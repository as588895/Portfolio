import React from 'react'

export default function Loading(){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-secondary/80">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary" />
    </div>
  )
}
