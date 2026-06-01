import { useState, useEffect } from "react";

export default function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // The broken bioData import has been replaced directly with your GitHub username
    fetch(`https://api.github.com/users/Sujay-sys/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub repositories.");
        return res.json();
      })
      .then((data) => {
        const originalRepos = data.filter((repo) => !repo.fork);
        setRepos(originalRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="mt-16">
      <div className="rounded-3xl border border-violet-500/30 bg-zinc-900/70 p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
        <h2 className="text-3xl font-bold mb-2">Live Repository Stream</h2>
        <p className="text-sm text-zinc-400 mb-6">
          These projects are pulled directly from my GitHub profile via the GitHub API. Any new public repository I publish will appear here automatically.
        </p>

        {loading ? (
          <div className="text-zinc-300">Syncing live GitHub repositories...</div>
        ) : error ? (
          <div className="text-rose-400">Unable to load repositories: {error}</div>
        ) : repos.length === 0 ? (
          <div className="text-zinc-300">No repositories were found yet.</div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-violet-400">public_repo</span>
                  <span className="text-sm text-zinc-400">⭐ {repo.stargazers_count}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{repo.name}</h3>
                <p className="text-sm leading-relaxed text-zinc-400 mb-4">
                  {repo.description || "No public description provided. Click to visit the codebase details."}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                  <span>{repo.language || "Plain Text"}</span>
                  <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}