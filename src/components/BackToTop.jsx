import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop(){
  const [visible, setVisible] = React.useState(false)
  React.useEffect(()=>{
    function onScroll(){ setVisible(window.scrollY > 400) }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])

  function goTop(){ window.scrollTo({top:0, behavior:'smooth'}) }

  return visible ? (
    <button onClick={goTop} className="fixed right-6 bottom-6 p-3 rounded-full bg-primary text-white shadow-lg">
      <FaArrowUp />
    </button>
  ) : null
}
