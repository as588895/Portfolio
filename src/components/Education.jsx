import { FaCalendarAlt, FaChartLine, FaGraduationCap, FaSchool } from "react-icons/fa";
import "./Education.css";

const timeline = [
  {
    title: "B.Tech Information Technology",
    org: "IMS Engineering College, Ghaziabad",
    range: "2023 - 2027",
    details: "Current CGPA: 7.79/10",
    icon: FaGraduationCap,
  },
  {
    title: "Senior Secondary (Class XII - PCM)",
    org: "Gyan Kunj Sr. Sec. Academy (CBSE)",
    range: "Completed",
    details: "Scored 76.8%",
    icon: FaSchool,
  },
  {
    title: "Secondary (Class X)",
    org: "Gyan Kunj Sr. Sec. Academy (CBSE)",
    range: "Completed",
    details: "Scored 70.4%",
    icon: FaSchool,
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-heading">
          <span className="education-eyebrow">Academic journey</span>
          <h2>Education</h2>
          <p>
            A steady foundation in technology, problem solving, and full-stack
            development.
          </p>
        </div>

        <div className="education-timeline">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`education-item ${index % 2 === 0 ? "is-left" : "is-right"}`}
              >
                <div className="education-marker">
                  <Icon aria-hidden="true" />
                </div>

                <div className="education-card">
                  <div className="education-card__topline">
                    <span>{index === 0 ? "Current focus" : "Milestone"}</span>
                    <span className="education-card__number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p className="education-card__org">{item.org}</p>

                  <div className="education-card__meta">
                    <span>
                      <FaCalendarAlt aria-hidden="true" />
                      {item.range}
                    </span>
                    <span>
                      <FaChartLine aria-hidden="true" />
                      {item.details}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
