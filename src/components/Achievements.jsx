import "./Achievements.css";

const counters = [
  { label: "DSA Problems Solved", value: "250+" },
  { label: "LeetCode Streak Badges", value: "50 / 100 Days" },
  { label: "HackerRank Rating", value: "3 Star" },
];

function Counter({ label, value, index }) {
  return (
    <article className="achievement-card">
      <div className="achievement-card__topline"><span>0{index + 1}</span><i /></div>
      <div className="achievement-card__value">{value}</div>
      <div className="achievement-card__label">{label}</div>
      <div className="achievement-card__bar" />
    </article>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-heading">
        <div>
          <span>04 / PROGRESS</span>
          <h2>Proof of <em>practice.</em></h2>
        </div>
        <p>Small, consistent progress adds up to stronger engineering.</p>
      </div>
      <div className="achievements-grid">
        {counters.map((counter, index) => (
          <Counter key={counter.label} index={index} {...counter} />
        ))}
      </div>
    </section>
  );
}
