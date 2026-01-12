import { useState, type ChangeEvent } from 'react'

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [analysis, setAnalysis] = useState<Record<string, unknown> | null>(null)

  function handleSelect(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return

    if (!f.name.toLowerCase().endsWith('.csv')) {
      setError('Only CSV files are supported by this endpoint.')
      e.target.value = ''
      setFile(null)
      setFileName(null)
      setAnalysis(null)
      return
    }

    setError(null)
    setFile(f)
    setFileName(f.name)
    setAnalysis(null)
  }

  async function handleUpload() {
    if (!file) return

    setLoading(true)
    setError(null)

    try {
      const csvText = await file.text() // CHANGE: read file as plain text instead of sending File binary

      const res = await fetch('/api/analysis/ingestCsv', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' }, // CHANGE: match @RequestBody String on backend
        body: csvText, // CHANGE: send raw CSV text, same as curl --data-binary
      })

      const text = await res.text()

      if (!res.ok) {
        setError(text || 'Upload failed')
        return
      }

      setAnalysis(JSON.parse(text))
    } catch {
      setError('Network or server error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-6 shadow-sm">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-blue-500">
          <input
            type="file"
            accept=".csv"
            onChange={handleSelect}
            className="hidden"
          />

          <div className="text-sm text-gray-600">
            {fileName ?? 'Click to select a CSV file'}
          </div>
        </label>

        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          Upload & Analyze
        </button>

        {loading && <p className="mt-3 text-center text-sm text-blue-600">Uploading…</p>}
        {error && <p className="mt-3 text-center text-sm text-red-600">{error}</p>}
      </div>

      {analysis && (
        <div className="w-full max-w-4xl rounded-xl border bg-white p-6 shadow-sm mb-10">
          <h2 className="mb-4 text-lg font-semibold">Analysis Result</h2>
          <pre className="max-h-96 overflow-auto rounded bg-slate-100 p-4 text-sm">
            {JSON.stringify(analysis, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
