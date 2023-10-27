'use client'

import { useContext } from 'react'
import { HandleHeroesContext } from '@/context/HandleHeroesContext'
import { Card } from './Card/Card'

export function ListCards() {
  const { heroes } = useContext(HandleHeroesContext)

  return (
    <main className="flex-1 overflow-auto h-screen grid grid-cols-5 place-items-center gap-y-20 py-11">
      {heroes.map((hero) => {
        return (
          <Card
            key={hero.id}
            id={hero.id}
            images={hero.images}
            name={hero.name}
            powerstats={hero.powerstats}
          />
        )
      })}
    </main>
  )
}
