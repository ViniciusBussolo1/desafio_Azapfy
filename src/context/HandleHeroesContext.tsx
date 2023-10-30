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
  handleSearchHeroes: (name: string) => void
  heroes: Array<HeroesProps>
  heroesBattle: Array<HeroesProps>
  heroesFilter: Array<HeroesProps>
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
  const [heroesFilter, setHeroesFilter] = useState<Array<HeroesProps>>([])
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

  function removerSpecials(texto: any) {
    // eliminando acentuação
    texto = texto.replace(/[ÀÁÂÃÄÅ]/, 'A')
    texto = texto.replace(/[àáâãäå]/, 'a')
    texto = texto.replace(/[ÈÉÊË]/, 'E')
    texto = texto.replace(/[Ç]/, 'C')
    texto = texto.replace(/[ç]/, 'c')

    return texto.replace(/[^a-z0-9]/gi, '')
  }

  function handleSearchHeroes(name: string) {
    const newBlocos = heroes.filter((item) =>
      removerSpecials(item.name)
        .toLocaleLowerCase()
        .includes(removerSpecials(name).toLocaleLowerCase()),
    )

    setHeroesFilter(newBlocos)
  }

  return (
    <HandleHeroesContext.Provider
      value={{
        heroes,
        handleDataHeroes,
        handleHeroesBatle,
        handleWinnerHero,
        handleSearchHeroes,
        heroesBattle,
        heroesFilter,
        setHeroesBattle,
      }}
    >
      {children}
    </HandleHeroesContext.Provider>
  )
}
