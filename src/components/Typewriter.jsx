import React from 'react'

export default function Typewriter({words=[] , speed=80}){
  const [index, setIndex] = React.useState(0)
  const [subIndex, setSubIndex] = React.useState(0)
  const [blink, setBlink] = React.useState(true)

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSubIndex((prev)=>prev+1)
    }, speed)
    return ()=>clearTimeout(timeout)
  },[subIndex, index])

  React.useEffect(()=>{
    if(subIndex === words[index].length + 1){
      const timeout = setTimeout(()=>{
        setIndex((prev)=> (prev +1) % words.length)
        setSubIndex(0)
      }, 1200)
      return ()=>clearTimeout(timeout)
    }
  },[subIndex, index, words])

  React.useEffect(()=>{
    const int = setInterval(()=>setBlink(v=>!v), 500)
    return ()=>clearInterval(int)
  },[])

  return (
    <span className="text-lg">
      {words.length ? words[index].substring(0, Math.max(0, subIndex)) : ''}
      <span className="inline-block ml-1" style={{width:8}}>{blink ? '|' : ' '}</span>
    </span>
  )
}
