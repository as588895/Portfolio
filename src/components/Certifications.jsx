import React from 'react'

// const certs = [
//   {title:'Alpha DSA with Java', org:'Apna College', year:'2026'},
//   {title:'Data Analytics Workshop', org:'Appwars Technologies', year:'March 2026'}
// ]
const certs = [
  {
    title: 'Alpha DSA with Java',
    org: 'Apna College',
    year: '2026',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7425159417022545920/'
  },
  {
    title: 'Data Analytics Workshop',
    org: 'Appwars Technologies',
    year: 'March 2026',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7441030265612767232/'
  },
  {
    title: 'Getting Started with Artificial Intelligence',
    org: 'IBM SkillsBuild',
    year: 'June 2026',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7470417042622541824/'
  }
]

export default function Certifications(){
  return (
    <section id="certifications" className="py-12">
      <h2 className="text-2xl font-bold">Certifications</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map(c=> (
          <div key={c.title} className="p-4 rounded-lg bg-white/60 dark:bg-gray-800/60 shadow">
            <div className="font-semibold">{c.title}</div>
            <div className="text-sm text-muted">{c.org} • {c.year}</div>
            {c.link && (
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
