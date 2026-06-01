import fs from 'fs';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { LoadingManager } from 'three';

const data = fs.readFileSync('./public/assets/card-v1.glb');
const arraybuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
const loader = new GLTFLoader(new LoadingManager());
loader.parse(arraybuffer, 'file://', (gltf) => {
  console.log('sceneNames', gltf.scene ? gltf.scene.children.map(c => c.name) : []);
  console.log('nodes', (gltf.parser.json.nodes || []).map((n, i) => ({ i, n: n.name })));
  console.log('meshes', (gltf.parser.json.meshes || []).map((m, i) => ({ i, name: m.name, primitives: m.primitives.map(p => p.attributes) })));
  console.log('materials', (gltf.parser.json.materials || []).map((m, i) => ({ i, name: m.name })));
}, (err) => {
  console.error('LOAD ERROR', err);
});
