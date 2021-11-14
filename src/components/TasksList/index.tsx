import React from 'react'
import { useTasks } from '../../hooks/useTasksContext'

import { Task } from '../Task'

export function TasksList() {
  const { allTasks } = useTasks()

  return (
    <>
      {allTasks && allTasks.map((task) => <Task key={task.id} task={task} />)}
    </>
  )
}
