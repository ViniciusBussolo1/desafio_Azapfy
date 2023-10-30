'use client'

import { useContext } from 'react'
import { HandleHeroesContext } from '@/context/HandleHeroesContext'
import { Card } from './Card/Card'
import { Modal } from '../Modal/Modal'

export function ListCards() {
  const { heroes, handleHeroesBatle, heroesBattle, heroesFilter } =
    useContext(HandleHeroesContext)

  return (
    <>
      {heroes.length === 0 ? (
        <main className="flex-1 overflow-auto h-screen flex justify-center items-center py-11 ">
          <h1
            className="text-white text-2xl uppercase
          "
          >
            Clique no botão para gerar as cartas
          </h1>
        </main>
      ) : (
        <main className="flex-1 overflow-auto h-screen grid grid-cols-2 min-[1025px]:grid-cols-3 min-[1441px]:grid-cols-5 place-items-center gap-y-20 py-11 ">
          {heroesFilter.length === 0 ? (
            <>
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
            </>
          ) : (
            <>
              {heroesFilter.map((hero) => {
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
            </>
          )}

          {heroesBattle.length === 2 && <Modal />}
        </main>
      )}
    </>
  )
}
