import "./App.css";
import React, { useState } from "react";
import { fetchTextFile, parseText, buildHistogramData } from "./components/utils";
import { saveAs } from "file-saver";
import Histogram from "./components/Histogram";

function App() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    const text = await fetchTextFile(
      "https://www.terriblytinytales.com/test.txt"
    );
    const parsedData = parseText(text);
    const histogramData = buildHistogramData(parsedData, 20);
    setData(histogramData);
  };

  const handleExport = () => {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "histogram.csv");
  };

  const convertToCSV = (data) => {
    const rows = [
      ["Word", "Frequency"],
      ...data.map(([word, frequency]) => [word, frequency]),
    ];
    return rows.map((row) => row.join(",")).join("\n");
  };

  return (
    <div>
      <h1>Vishal Kashyap</h1>
      <button onClick={handleClick}>Fetch data</button>
      {data && (
        <>
          <Histogram data={data} />
          <button onClick={handleExport}>Export</button>
        </>
      )}
    </div>
  );
}

export default App;
