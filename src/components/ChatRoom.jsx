export default function ChatRoom() {
  return (
    <div className="bg-zinc-900 border border-gray-700 p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-5">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">💬 Contact Me</h2>

      <div className="p-6 rounded-lg bg-zinc-800 border border-gray-700 mb-6">
        <p className="text-white text-center mb-4">
          To contact me directly, send an email to:
        </p>
        <a
          href="mailto:sujayport189@gmail.com"
          className="block text-center text-blue-400 underline font-semibold"
        >
          sujayport189@gmail.com
        </a>
      </div>

      <div className="text-zinc-300 text-sm leading-6">
        <p className="mb-4">
          This chat room is now set up to connect via email. Click the email link above to open your email client and send your message directly to sujayport189@gmail.com.
        </p>
        <p>
          If you prefer, you can also use the form on the right to message me via email.
        </p>
      </div>
    </div>
  );
}
