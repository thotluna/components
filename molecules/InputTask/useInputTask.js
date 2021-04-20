import { useState, useEffect, useRef } from 'react'
import { status } from './constants'

export default function useInputTask(statusInitial, handelOnCreted) {
  const [statusCurrent, setStatus] = useState(statusInitial)
  const [task, setTask] = useState('')
  const inputRef = useRef()

  const hadelOnEnter = () => {
    handelOnCreted(task)
    setStatus(status.STATUS_STANDBY)
    setTask('')
  }

  const handelCreating = () => {
    setStatus(status.STATUS_CREATING)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current, statusCurrent])

  return {
    statusCurrent,
    setStatus,
    task,
    setTask,
    hadelOnEnter,
    inputRef,
    handelCreating,
  }
}
