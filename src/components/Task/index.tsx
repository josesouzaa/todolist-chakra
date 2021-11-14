import React from 'react'
import { useTasks } from '../../hooks/useTasksContext'

import { Flex, Checkbox, Text, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

interface TaskProps {
  task: {
    id: number
    title: string
    isComplete: boolean
  }
}

export function Task({ task }: TaskProps) {
  const { allTasks, AtualizeAllTasks } = useTasks()

  function handleCheck() {
    const NewAllTasks = allTasks.map((t) => {
      if (task.id === t.id) {
        t.isComplete = !t.isComplete
      }
      return t
    })
    AtualizeAllTasks(NewAllTasks)
  }

  function handleDelete() {
    const NewAllTasks = allTasks.filter((t) => t.id !== task.id)
    AtualizeAllTasks(NewAllTasks)
  }

  return (
    <Flex alignItems="center" sx={{ gap: 8 }}>
      <Checkbox
        colorScheme="teal"
        checked={task.isComplete}
        onChange={handleCheck}
      />
      <Text
        flexGrow={2}
        as={task.isComplete ? 'del' : 'abbr'}
        color={task.isComplete ? 'gray.400' : 'text'}
      >
        {task.title}
      </Text>
      <IconButton
        onClick={handleDelete}
        aria-label="Delete Task"
        colorScheme="teal"
        icon={<DeleteIcon />}
      />
    </Flex>
  )
}
