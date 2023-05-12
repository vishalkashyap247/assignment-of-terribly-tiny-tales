export const fetchTextFile = async (url) => {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  };
  
  export const parseText = (text) => {
    const words = text.toLowerCase().match(/[a-zA-Z]+/g);
    return words;
  };
  
  export const buildHistogramData = (data, limit) => {
    const frequency = {};
    data.forEach((word) => {
      frequency[word] = frequency[word] || 0;
      frequency[word]++;
    });
  
    const sortedData = Object.entries(frequency).sort(
      ([, freq1], [, freq2]) => freq2 - freq1
    );
  
    const histogramData = sortedData.slice(0, limit);
    return histogramData;
  };
  