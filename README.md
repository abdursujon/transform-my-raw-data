# Transform My Raw Data
## Overview
A React web app that lets users upload files, connects to a **Spring Boot Data Analysis API** (developed by author of this application), displays advanced stats, tracks progress, and provides downloadable analysis results.

## Tech Stack
- React, Vite, TypeScript, Elastic UI  

## Live URL where you can upload file instantly for analysis.
https://abdursujon.github.io/transform-my-raw-data/


## Features
- Upload files in **JSON, Excel, TXT, CSV** formats.
- Display advanced stats for uploaded files:
  - Progress of analysis
  - Completion status
  - Estimated time for processing
  - Other relevant analytics metrics
- Visualize API responses including errors or bad requests, with clear explanations.
- Download processed files and analysis results.

## The Analysis Will Include
- Summary statistics of the uploaded data with advanced metrics such as:  
  - Null/missing value count per column  
  - Minimum, maximum, mean, median, mode  
  - Standard deviation and variance  
  - Total, sum, and count per numeric column  
  - Unique value counts per column  
  - Data type distribution per column  
  - Percentiles (25th, 50th, 75th)  
  - Skewness and kurtosis  
  - Frequency distribution of categorical columns  
  - Correlation matrix for numeric columns  
  - Top/bottom N values per column  
  - Detected outliers based on IQR or z-score  
  - File size and row/column count  
  - Progress tracking, estimated time to completion  
- File validation results (format errors, missing fields, invalid entries)  
- Detailed error explanations for any bad requests  
- Downloadable processed data and reports  


## How to use 
1. Open the web app.  
2. Upload a supported file.  
3. Monitor progress and stats on the UI.  
4. View results and download processed data.  
5. If the API returns an error (e.g., bad request), a detailed explanation will be displayed.  

