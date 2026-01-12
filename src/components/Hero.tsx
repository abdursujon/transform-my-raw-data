export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center px-6">
      <h1 className="text-4xl font-bold tracking-tight text-slate-800 mt-12">
        Welcome to <span className="text-blue-600">DataDock</span>
      </h1>
      <div className="mt-6 max-w-2xl text-center">
        <p className="text-lg font-medium text-slate-800">
          Upload your data. Get instant analysis.
        </p>

        <p className="mt-3 text-slate-600">
          Supported formats:
          <span className="ml-2 font-semibold text-slate-700">CSV</span>,{' '}
          <span className="font-semibold text-slate-700">Excel</span>,{' '}
          <span className="font-semibold text-slate-700">JSON</span>,{' '}
          <span className="font-semibold text-slate-700">TXT</span>
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>• Automatic validation and error reporting</li>
          <li>• Real-time progress tracking</li>
          <li>• Detailed statistical insights</li>
          <li>• Downloadable analysis results</li>
        </ul>
      </div>

    </section>
  )
}
