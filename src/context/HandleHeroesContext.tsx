'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'
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
  handleHeroesBatle: (heroes: HeroesProps) => void
  handleWinnerHero: () => HeroesProps
  heroes: Array<HeroesProps>
  heroesBattle: Array<HeroesProps>
  setHeroesBattle: Dispatch<SetStateAction<HeroesProps[]>>
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
  const [heroesBattle, setHeroesBattle] = useState<Array<HeroesProps>>([])

  function handleWinnerHero() {
    const heroWinner = heroesBattle.reduce((heroi1, heroi2) => {
      const poderTotal1 = Object.values(heroi1.powerstats).reduce(
        (total, valor) => total + valor,
        0,
      )

      const poderTotal2 = Object.values(heroi2.powerstats).reduce(
        (total, valor) => total + valor,
        0,
      )

      return poderTotal1 > poderTotal2 ? heroi1 : heroi2
    })

    return heroWinner
  }

  function handleHeroesBatle(heroes: HeroesProps) {
    if (heroesBattle.some((hero) => hero.id === heroes.id)) {
      console.log('voce ja adicionou este heroi')
    } else {
      if (heroesBattle.length <= 1) {
        const novaListaHeroes = [...heroesBattle, heroes]

        setHeroesBattle(novaListaHeroes)
      } else {
        return null
      }
    }
  }

  async function handleDataHeroes() {
    const url = 'http://homologacao3.azapfy.com.br/api/ps/metahumans'

    const { data } = await axios.get(url)

    setHeroes(data)
  }

  return (
    <HandleHeroesContext.Provider
      value={{
        heroes,
        handleDataHeroes,
        handleHeroesBatle,
        heroesBattle,
        handleWinnerHero,
        setHeroesBattle,
      }}
    >
      {children}
    </HandleHeroesContext.Provider>
  )
}
