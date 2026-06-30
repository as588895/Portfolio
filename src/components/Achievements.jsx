import React from 'react'
import { motion } from 'framer-motion'

// const counters = [
//   {label:'DSA Problems Solved', value:200},
//   {label:'LeetCode 50 Days', value:1},
//   {label:'LeetCode 100 Days', value:1},
//   {label:'HackerRank 3 Star', value:1}
// ]
const counters = [
  { label: 'DSA Problems Solved', value: '200+' },
  { label: 'LeetCode Streak Badges', value: '50 Days & 100 Days' },
  { label: 'HackerRank Rating', value: '3⭐' }
]

function Counter({label, value}) {
  const [v, setV] = React.useState(0)
  React.useEffect(()=>{
    let start = 0; const dur = 1200; const step = Math.ceil(value / (dur/30))
    const id = setInterval(()=>{
      start += step; if(start >= value){ setV(value); clearInterval(id) } else setV(start)
    },30)
    return ()=>clearInterval(id)
  },[value])

  return (
    // <div className="p-4 rounded-lg bg-white/60 dark:bg-gray-800/60 text-center shadow">
    //   <div className="text-3xl font-bold text-primary">{v}</div>
    //   <div className="text-sm mt-2">{label}</div>
    // </div>
    <div className="p-4 rounded-lg bg-white/60 dark:bg-gray-800/60 text-center shadow">
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm mt-2">{label}</div>
    </div>
  )
}

export default function Achievements(){
  return (
    <section id="achievements" className="py-12">
      <h2 className="text-2xl font-bold">Achievements</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {counters.map(c=> <Counter key={c.label} {...c} />)}
      </div>
    </section>
  )
}
