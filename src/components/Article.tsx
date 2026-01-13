export default function Article() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-slate-700">
      <h2 className="text-3xl font-bold text-slate-900">
        What This Application Does
      </h2>

      <p className="mt-4 text-lg">
        <span className="font-bold">Transform My Raw Data </span>is a data analysis platform that turns uploaded
        files into structured insights. It validates input, processes large
        datasets, and returns detailed statistical results in real time.
      </p>

      <h3 className="mt-10 text-2xl font-semibold text-slate-900">
        Supported File Analysis
      </h3>

      <p className="mt-3">
        The application accepts CSV, and TXT files (JSON, and Excel will be avaiable soon). Each file is
        parsed, validated, and analysed using a dedicated Spring Boot Data
        Analysis API.
      </p>

      <h3 className="mt-10 text-2xl font-semibold text-slate-900">
        Statistical Insights Provided
      </h3>

      <ul className="mt-4 space-y-3">
        <li>
          <strong>Data quality checks:</strong> null and missing values per
          column, invalid entries, and format validation.
        </li>
        <h2 className="font-semibold">Below feature will be avaiable soon.</h2>
        <li>
          <strong>Descriptive statistics:</strong> minimum, maximum, mean,
          median, mode, standard deviation, variance, totals, and counts.
        </li>
        <li>
          <strong>Distribution analysis:</strong> percentiles, frequency
          distributions, skewness, and kurtosis.
        </li>
        <li>
          <strong>Column-level insights:</strong> unique value counts, detected
          outliers using statistical thresholds, and data type classification.
        </li>
        <li>
          <strong>Relationship analysis:</strong> correlation matrices for
          numeric data.
        </li>
      </ul>

      <h3 className="mt-10 text-2xl font-semibold text-slate-900">
        Processing and Results
      </h3>

      <p className="mt-3">
        While analysis is running, the UI displays real-time progress, estimated
        completion time, and status updates. Once completed, users can review
        results directly in the interface or download the processed data and
        reports.
      </p>

      <h3 className="mt-10 text-2xl font-semibold text-slate-900">
        Error Handling
      </h3>

      <p className="mt-3">
        If a file fails validation or the API returns a bad request, the app
        displays clear, human-readable error messages explaining exactly what
        went wrong and how to fix it.
      </p>
    </section>
  )
}
