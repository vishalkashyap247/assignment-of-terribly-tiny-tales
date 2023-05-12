import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./histogram.css";

function Histogram({ data, xLabel, yLabel }) {
  const svgRef = useRef();

  useEffect(() => {
    if (data.length > 0 && svgRef.current) {
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = 500 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d[0]))
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d[1])])
        .nice()
        .range([height - margin.bottom, margin.top]);

      const svg = d3.select(svgRef.current);

      svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d[0]))
        .attr("y", (d) => yScale(d[1]))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => yScale(0) - yScale(d[1]));

      svg
        .selectAll(".label")
        .data(data)
        .join("text")
        .attr("class", "label1")
        .attr("x", (d) => xScale(d[0]) + xScale.bandwidth() / 2)
        .attr("y", (d) => yScale(d[1]) - 5)
        .text((d) => d[1]);

      const xAxis = d3.axisBottom(xScale);
      svg
        .select(".x-axis")
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("dy", "1em")
        .attr("class", "x-axis-label");

      // Append the x-axis label
      svg
        .select(".x-label")
        .attr("x", width / 2)
        .attr("y", height)
        .attr("text-anchor", "middle")
        .text(xLabel);

      const yAxis = d3.axisLeft(yScale);
      svg
        .select(".y-axis")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(yAxis);

      svg
        .select(".y-label")
        .attr("x", -height / 2)
        .attr("y", -margin.left)
        .attr("transform", "rotate(-90)")
        .attr("text-anchor", "middle")
        .text(yLabel);
    }
  }, [data, xLabel, yLabel]);

  return (
    <svg ref={svgRef} width="600" height="400">
      <g className="x-axis" />
      <g className="y-axis" />
      <text className="x-label" />
      <text className="y-label" />
    </svg>
  );
}

export default Histogram;
