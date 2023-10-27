'use client'

import { ReactNode, createContext, useState } from 'react'
import axios from 'axios'

interface HeroesProps {
  id: number
  name: string
  powerstats: {
    intelligence: number
    strength: number
    speed: number
    durability: number
    power: number
    combat: number
  }
  images: {
    xs: string
    sm: string
    md: string
    lg: string
  }
}

interface HandleHeroesContextDataProps {
  handleDataHeroes: () => void
  heroes: Array<HeroesProps>
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
  const [heroes, setHeroes] = useState<Array<HeroesProps>>([])

  const url = 'http://homologacao3.azapfy.com.br/api/ps/metahumans'

  async function handleDataHeroes() {
    const { data } = await axios.get(url)

    setHeroes(data)
  }

  return (
    <HandleHeroesContext.Provider value={{ heroes, handleDataHeroes }}>
      {children}
    </HandleHeroesContext.Provider>
  )
}
