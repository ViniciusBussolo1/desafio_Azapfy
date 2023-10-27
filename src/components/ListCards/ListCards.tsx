'use client'

import { useContext } from 'react'
import { HandleHeroesContext } from '@/context/HandleHeroesContext'
import { Card } from './Card/Card'
import { Modal } from '../Modal/Modal'

export function ListCards() {
  const { heroes, handleHeroesBatle, heroesBattle } =
    useContext(HandleHeroesContext)

  return (
    <main className="flex-1 overflow-auto h-screen grid grid-cols-2 min-[1025px]:grid-cols-3 min-[1441px]:grid-cols-5 place-items-center gap-y-20 py-11 ">
      {heroes.map((hero) => {
        return (
          <Card
            key={hero.id}
            id={hero.id}
            images={hero.images}
            name={hero.name}
            powerstats={hero.powerstats}
            onClick={() => handleHeroesBatle(hero)}
          />
        )
      })}
      {heroesBattle.length === 2 && <Modal />}
    </main>
  )
}
