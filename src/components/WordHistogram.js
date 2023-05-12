import React, { useState, useEffect } from 'react';
import { fetchTextFile } from './api';
import Histogram from './Histogram';

function WordHistogram() {
  const [wordCount, setWordCount] = useState([]);
  const [allWords, setAllWords] = useState([]);

  useEffect(() => {
    fetchTextFile('https://www.terriblytinytales.com/test.txt')
      .then(textContent => {
        const wordCountMap = new Map();
        const words = textContent.match(/\b\w+\b/g);
        words.forEach(word => {
          const count = wordCountMap.get(word) || 0;
          wordCountMap.set(word, count + 1);
        });
        const sortedWordCount = Array.from(wordCountMap.entries()).sort((a, b) => b[1] - a[1]);
        const top20Words = sortedWordCount.slice(0, 20);
        setWordCount(top20Words);
        setAllWords(sortedWordCount);
      });
  }, []);

  return (
    <div>
      {wordCount.length > 0 && (
        <div>
          <h3>Top 20 Words:</h3>
          <ul>
            {wordCount.map(([word, count]) => (
              <li key={word}>{word}: {count}</li>
            ))}
          </ul>
          <Histogram data={wordCount} xLabel="Top 20 Words" yLabel="Frequency" />
        </div>
      )}
    </div>
  );
}

export default WordHistogram;
