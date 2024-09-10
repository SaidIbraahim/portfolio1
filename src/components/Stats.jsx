import React from "react";

function Stats() {
  const stats = [
    { number: "20+", title: "Clients Order" },
    { number: "30+", title: "Projects Completed" },
    { number: "4.5", title: "Star Rating" },
    { number: "12", title: "Months Of Experience" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-box" key={index}>
            <h2>{stat.number}</h2>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
