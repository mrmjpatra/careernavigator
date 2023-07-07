'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import { FiMaximize2 } from 'react-icons/fi'
import { FaXmark } from 'react-icons/fa6'

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center backdrop-blur-sm overflow-y-scroll"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 fixed z-50  w-full max-w-4xl scale-100 bg-white  opacity-100 sm:rounded-lg md:w-full dark:bg-white top-2">
        <div className='flex justify-between px-5 bg-blue-500 py-4'>
          <div className='bg-white cursor-pointer hover:bg-white/40  rounded-full p-2 border shadow'><FaXmark  onClick={onDismiss}/></div>
          <div className='bg-white cursor-pointer hover:bg-gray-400 rounded-full p-2 hover:text-white shadow '><FiMaximize2 onClick={()=> window.location.reload()} /></div>
        </div>
        {children}

      </div>
    </div>
  )
}