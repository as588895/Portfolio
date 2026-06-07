import React from 'react'

export default function ScrollProgress(){
  const [pct, setPct] = React.useState(0)
  React.useEffect(()=>{
    function onScroll(){
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setPct(progress)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <div style={{width:`${pct}%`}} className="h-full bg-primary transition-width duration-150" />
    </div>
  )
}
