'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { useModalContext } from '../ContactModalContext'
import ApplyForm from '../ApplyForm'

export default function ApplyModal() {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const { handleChange, instituteName, showContactModal } = useModalContext();

  const onDismiss = useCallback(() => {
    handleChange();
  }, [handleChange])


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
  if (!showContactModal) {
    return (
      <></>
    )
  }
  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center overflow-y-scroll bg-slate-500/80"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 fixed z-50  w-full max-w-6xl scale-100 bg-white  opacity-100 sm:rounded-lg md:w-full dark:bg-white top-0 bottom-2 overflow-y-scroll">
        <div className='flex justify-between px-5 bg-blue-500 py-4'>
          <div className='bg-white cursor-pointer hover:bg-white/40  rounded-full p-2 border shadow' onClick={onDismiss}><FaXmark /></div>
        </div>
        <ApplyForm instituteName={instituteName} />
      </div>
    </div>
  )
}