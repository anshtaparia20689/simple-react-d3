import { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./App.css";

function App() {
  const chartRef = useRef();

  useEffect(() => {
    const data = [
      { course: "CPSC 304", difficulty: 3 },
      { course: "CPSC 310", difficulty: 4 },
      { course: "CPSC 320", difficulty: 5 },
      { course: "STAT 406", difficulty: 4 },
    ];

    const svg = d3.select(chartRef.current);

    svg.selectAll("*").remove();

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 50)
      .attr("y", (d, i) => i * 60 + 30)
      .attr("width", (d) => d.difficulty * 60)
      .attr("height", 35);

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", 55)
      .attr("y", (d, i) => i * 60 + 53)
      .text((d) => `${d.course}: ${d.difficulty}/5`);
  }, []);

  return (
    <div className="page">
      <h1>My First React + D3 Project</h1>
      <p>This is a simple bar chart showing course difficulty.</p>

      <svg ref={chartRef} width={500} height={300}></svg>
    </div>
  );
}

export default App;