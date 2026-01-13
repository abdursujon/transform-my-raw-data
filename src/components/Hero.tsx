export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900">
        Transform <span className="text-orange-600">Raw Data</span> into
        <span className="block text-blue-600">Instant Insights</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        Upload your data and get fast, accurate analysis with zero setup.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <h2 className="text-lg font-semibold text-slate-800">Supported Files</h2>
        <span className="rounded-full border px-4 py-1 text-sm text-slate-700">CSV</span>
        {/* <span className="rounded-full border px-4 py-1 text-slate-700">Excel</span> */}
        {/* <span className="rounded-full border px-4 py-1 text-slate-700">JSON</span> */}
        <span className="rounded-full border px-4 py-1 text-sm text-slate-700">TXT</span>
      </div>

      <h2 className="mt-6 max-w-4xl text-2xl font-semibold text-slate-900">
        Actions you can perform
      </h2>

      <ul className="mt-4 space-y-2 text-sm text-slate-600 text-left">
        <li>• Automatic validation and error reporting</li>
        <li>• Real-time progress tracking</li>
        <li>• Detailed statistical insights</li>
        <li>• Downloadable analysis results</li>
      </ul>
    </section>

  )
}
