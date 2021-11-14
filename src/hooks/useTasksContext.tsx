import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface Task {
  id: number
  title: string
  isComplete: boolean
}

interface TasksContextData {
  allTasks: Task[]
  AtualizeAllTasks: (NewAllTasks: Task[]) => void
  newIdGenerator: () => number
}

interface TasksProviderProps {
  children: ReactNode
}

const TasksContext = createContext({} as TasksContextData)

export function TasksProvider({ children }: TasksProviderProps) {
  const [allTasks, setAllTasks] = useState<Task[]>([])

  useEffect(() => {
    if (localStorage.getItem('@todolisttasks')) {
      const LoadTasks = localStorage.getItem('@todolisttasks')
      setAllTasks(JSON.parse(LoadTasks as string))
    } else {
      setAllTasks([])
    }
  }, [])

  function AtualizeAllTasks(NewAllTasks: Task[]) {
    localStorage.setItem('@todolisttasks', JSON.stringify(NewAllTasks))
    setAllTasks(NewAllTasks)
  }

  function newIdGenerator() {
    const id = Math.floor(Math.random() * 999999)
    return id
  }

  return (
    <TasksContext.Provider
      value={{ allTasks, AtualizeAllTasks, newIdGenerator }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)
  return context
}
