import React from 'react'

const timeline = [
  {title:'B.Tech Information Technology', org:'IMS Engineering College, Ghaziabad', range:'2023 - 2027', details:'CGPA: 7.67'},
  {title:'Senior Secondary (PCM)', org:'CBSE', range:'', details:'76.8%'},
  {title:'Secondary', org:'CBSE', range:'', details:'70.4%'}
]

export default function Education(){
  return (
    <section id="education" className="py-12">
      <h2 className="text-2xl font-bold">Education</h2>
      <div className="mt-6 border-l-2 border-primary pl-6">
        {timeline.map((t, i)=> (
          <div key={i} className="mb-8 relative">
            <div className="absolute -left-4 top-1 bg-primary w-3 h-3 rounded-full" />
            <h3 className="font-semibold">{t.title}</h3>
            <div className="text-sm text-muted">{t.org} {t.range && `• ${t.range}`}</div>
            <div className="text-sm mt-1">{t.details}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
