import { useState, type ChangeEvent } from 'react'

const API_BASE_URL =
  'https://spring-data-analysis-506639246506.europe-west2.run.app'

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [analysis, setAnalysis] = useState<any | null>(null)
  const [analysisId, setAnalysisId] = useState<number | null>(null)

  function handleSelect(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return

    const name = f.name.toLowerCase()
    if (!name.endsWith('.csv') && !name.endsWith('.txt')) {
      setError('Only CSV and TXT files are supported by this endpoint.')
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
    setAnalysisId(null)
  }

  async function handleUpload() {
    if (!file) return
    setLoading(true)
    setError(null)

    try {
      const text = await file.text()

      const name = file.name.toLowerCase()
      const contentType =
        name.endsWith('.csv') ? 'text/csv' :
          name.endsWith('.txt') ? 'text/plain' :
            ''

      const res = await fetch(`${API_BASE_URL}/api/analysis/ingestCsv`, {
        method: 'POST',
        headers: { 'Content-Type': contentType },
        body: text,
      })

      const resText = await res.text()

      if (!res.ok) {
        const frontendHint = !text.trim()
          ? 'The file is empty.'
          : 'The file content is invalid.'

        let formatted = resText
        try {
          formatted = JSON.stringify(JSON.parse(resText), null, 2)
        } catch { }

        setError(
          frontendHint +
          '\n\nAPI response:\n' +
          (formatted || `${res.status} ${res.statusText}`)
        )
        return
      }

      let json
      try {
        json = JSON.parse(resText)
      } catch {
        setError(
          'Response could not be parsed as JSON.\n\nAPI response:\n' +
          resText
        )
        return
      }

      setAnalysis(json)
      setAnalysisId(json.id)
    } catch {
      setError('Network or server error')
    } finally {
      setLoading(false)
    }
  }



  async function handleDownload() {
    if (!analysisId) return
    setDownloading(true)
    try {
      const res = await fetch(
        `${API_BASE_URL}/api/analysis/${analysisId}/download.json`
      )
      if (!res.ok) {
        setError('Download failed')
        return
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'analysis.json'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch {
      setError('Download error')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="mt-0 flex flex-col items-center gap-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-6 shadow-lg">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-green-500">
          <input
            type="file"
            accept=".csv, .txt"
            onChange={handleSelect}
            className="hidden"
          />
          <div className="text-sm font-semibold text-gray-600 ">
            {fileName ?? 'Click to select a file'}
          </div>
        </label>

        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="mt-4 w-full cursor-pointer rounded-md bg-blue-600 py-2 text-sm font-medium text-white disabled:opacity-50 hover:bg-green-700"
        >
          Upload & Analyze
        </button>

        {loading && (
          <p className="mt-3 text-center text-sm text-blue-600">
            Uploading please wait…
          </p>
        )}
        {error && (
          <p className="mt-3 whitespace-pre-wrap text-left text-sm text-red-600">
            {error}
          </p>

        )}
      </div>

      {analysis && (
        <div className="mt-10 w-full max-w-4xl rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Analysis Result</h2>
          <pre className="max-h-96 overflow-auto rounded bg-slate-100 p-4 text-sm">
            {JSON.stringify(analysis, null, 2)}
          </pre>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="mt-4 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          >
            Download analysis
          </button>

          {downloading && (
            <div className="mt-3">
              <p className="text-sm text-green-600">Downloading…</p>
              <div className="mt-1 h-2 w-full overflow-hidden rounded bg-gray-200">
                <div className="h-full w-full animate-pulse bg-green-500" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
