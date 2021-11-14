import React from 'react'
import { TasksProvider } from './hooks/useTasksContext'

import { Header } from './components/Header'
import { NewTaskInput } from './components/NewTaskInput'
import { TasksList } from './components/TasksList'

import { Container } from '@chakra-ui/react'

function App() {
  return (
    <TasksProvider>
      <Container
        maxW="container.md"
        p="4"
        mt="12"
        display="flex"
        flexDirection="column"
        shadow="base"
        borderRadius="8"
        sx={{
          gap: '2rem'
        }}
      >
        <Header />
        <NewTaskInput />
        <TasksList />
      </Container>
    </TasksProvider>
  )
}

export default App
