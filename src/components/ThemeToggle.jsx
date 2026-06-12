import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle(){
  // const [dark, setDark] = React.useState(document.documentElement.classList.contains('dark'))
  // React.useEffect(()=>{
  //   const obs = new MutationObserver(()=>setDark(document.documentElement.classList.contains('dark')))
  //   obs.observe(document.documentElement, { attributes: true })
  //   return ()=>obs.disconnect()
  // },[])
  
    const [dark, setDark] = React.useState(true)

React.useEffect(() => {
  const theme = localStorage.getItem('theme');

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}, []);

React.useEffect(()=>{
  const obs = new MutationObserver(()=>{
    setDark(document.documentElement.classList.contains('dark'))
  })

  obs.observe(document.documentElement,{attributes:true})
  return ()=>obs.disconnect()
},[])

  function toggle(){
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    }
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
      {dark ? <FaSun className="text-yellow-400"/> : <FaMoon className="text-blue-400"/>}
    </button>
  )
}
