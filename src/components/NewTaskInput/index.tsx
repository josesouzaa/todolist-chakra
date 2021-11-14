import React, { useState, FormEvent } from 'react'
import { useTasks } from '../../hooks/useTasksContext'

import { Flex, Input, Button } from '@chakra-ui/react'

export function NewTaskInput() {
  const { allTasks, AtualizeAllTasks, newIdGenerator } = useTasks()
  const [newTaskText, setNewTaskText] = useState('')

  function handleSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault()
    if (!newTaskText.match(/^\s*$/)) {
      const newTask = {
        id: newIdGenerator(),
        title: newTaskText,
        isComplete: false
      }
      AtualizeAllTasks([newTask, ...allTasks])
      setNewTaskText('')
    }
  }

  return (
    <Flex as="form" action="submit" onSubmit={handleSubmit}>
      <Input
        placeholder="O que devo fazer hoje?"
        size="md"
        borderEndRadius="0"
        colorScheme="teal"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <Button
        px="8"
        size="md"
        colorScheme="teal"
        type="submit"
        borderStartRadius="0"
      >
        Adicionar Tarefa
      </Button>
    </Flex>
  )
}
