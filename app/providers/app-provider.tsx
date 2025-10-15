import { createContext, useCallback, useContext, useEffect, useState } from 'react'

interface AppContextType {
  sidebarOpen: boolean
  setSidebarOpen: (sidebarOpen: boolean) => void
}

const AppContext = createContext<AppContextType>({
  sidebarOpen: true,
  setSidebarOpen: () => {}
})

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpenState] = useState<boolean>(true)

  const setSidebarOpen = useCallback((open: boolean) => {
    setSidebarOpenState(open)
    localStorage.setItem('sidebar', JSON.stringify(open))
  }, [])

  useEffect(() => {
    const _sidebarOpen = localStorage.getItem('sidebar')
    setSidebarOpenState(_sidebarOpen ? JSON.parse(_sidebarOpen) : true)
  }, [])

  return <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{children}</AppContext.Provider>
}
