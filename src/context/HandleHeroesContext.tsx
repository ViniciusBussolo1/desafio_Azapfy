import { ReactNode, createContext, useState } from 'react'

interface HandleHeroesContextDataProps {
  heroes: number
}

interface HandleHeroesContextProvidersProps {
  children: ReactNode
}

export const HandleHeroesContext = createContext(
  {} as HandleHeroesContextDataProps,
)

export function HandleHeroesContextProvider({
  children,
}: HandleHeroesContextProvidersProps) {
  const [heroes, setHeroes] = useState(0)

  return (
    <HandleHeroesContext.Provider value={{ heroes }}>
      {children}
    </HandleHeroesContext.Provider>
  )
}
