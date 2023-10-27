import { HandleHeroesContext } from '@/context/HandleHeroesContext'
import { useContext, useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
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

export function Modal() {
  const [heroWinner, setHeroWinner] = useState<HeroProps>()

  const { handleWinnerHero, heroesBattle } = useContext(HandleHeroesContext)

  useEffect(() => {
    setHeroWinner(handleWinnerHero())
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 fixed inset-0"></div>
      <div className="max-w-[71.25rem] w-full h-[36.25rem] bg-black p-6 rounded-lg z-50 flex flex-col justify-center items-center gap-9">
        <h1 className="text-green-600 font-bold text-xl uppercase">
          Winner <span className="text-gray-200">{heroWinner?.name}</span>
        </h1>
        <div className="flex items-center justify-center gap-28">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-start gap-4">
              <Image
                src={heroesBattle[0].images.md}
                alt="Image Hero"
                width={150}
                height={85}
              />
              <h2 className="text-gray-200 text-lg uppercase">
                {heroesBattle[0].name}
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-200">
                {heroesBattle[0].powerstats.intelligence >
                heroesBattle[1].powerstats.intelligence ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.intelligence}</span>
                    <ChevronUp size={20} color="green" />
                  </div>
                ) : heroesBattle[0].powerstats.intelligence ===
                  heroesBattle[1].powerstats.intelligence ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.intelligence}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.intelligence}</span>
                    <ChevronDown size={20} color="red" />
                  </div>
                )}
              </span>

              <span className="text-gray-200">
                {heroesBattle[0].powerstats.strength >
                heroesBattle[1].powerstats.strength ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.strength}</span>
                    <ChevronUp size={20} color="green" />
                  </div>
                ) : heroesBattle[0].powerstats.strength ===
                  heroesBattle[1].powerstats.strength ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.strength}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.strength}</span>
                    <ChevronDown size={20} color="red" />
                  </div>
                )}
              </span>

              <span className="text-gray-200">
                {heroesBattle[0].powerstats.speed >
                heroesBattle[1].powerstats.speed ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.speed}</span>
                    <ChevronUp size={20} color="green" />
                  </div>
                ) : heroesBattle[0].powerstats.speed ===
                  heroesBattle[1].powerstats.speed ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.speed}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.speed}</span>
                    <ChevronDown size={20} color="red" />
                  </div>
                )}
              </span>

              <span className="text-gray-200">
                {heroesBattle[0].powerstats.durability >
                heroesBattle[1].powerstats.durability ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.durability}</span>
                    <ChevronUp size={20} color="green" />
                  </div>
                ) : heroesBattle[0].powerstats.durability ===
                  heroesBattle[1].powerstats.durability ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.durability}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.durability}</span>
                    <ChevronDown size={20} color="red" />
                  </div>
                )}
              </span>

              <span className="text-gray-200">
                {heroesBattle[0].powerstats.combat >
                heroesBattle[1].powerstats.combat ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.combat}</span>
                    <ChevronUp size={20} color="green" />
                  </div>
                ) : heroesBattle[0].powerstats.combat ===
                  heroesBattle[1].powerstats.combat ? (
                  <div className="flex justify-start items-center">
                    <div className="flex justify-start items-start gap-2">
                      <span>{heroesBattle[0].powerstats.combat}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[0].powerstats.combat}</span>
                    <ChevronDown size={20} color="red" />
                  </div>
                )}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-gray-200 font-semibold">intelligence</span>
            <span className="text-gray-200 font-semibold">strength</span>
            <span className="text-gray-200 font-semibold">speed</span>
            <span className="text-gray-200 font-semibold">durability</span>
            <span className="text-gray-200 font-semibold">combat</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-gray-200">
                {heroesBattle[1].powerstats.intelligence >
                heroesBattle[0].powerstats.intelligence ? (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronUp size={20} color="green" />
                    <span>{heroesBattle[1].powerstats.intelligence}</span>
                  </div>
                ) : heroesBattle[1].powerstats.intelligence ===
                  heroesBattle[0].powerstats.intelligence ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[1].powerstats.intelligence}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronDown size={20} color="red" />
                    <span>{heroesBattle[1].powerstats.intelligence}</span>
                  </div>
                )}
              </span>

              <span className="text-gray-200">
                {heroesBattle[1].powerstats.strength >
                heroesBattle[0].powerstats.strength ? (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronUp size={20} color="green" />
                    <span>{heroesBattle[1].powerstats.strength}</span>
                  </div>
                ) : heroesBattle[1].powerstats.strength ===
                  heroesBattle[0].powerstats.strength ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[1].powerstats.strength}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronDown size={20} color="red" />
                    <span>{heroesBattle[1].powerstats.strength}</span>
                  </div>
                )}
              </span>

              <span className="text-gray-200">
                {heroesBattle[1].powerstats.speed >
                heroesBattle[0].powerstats.speed ? (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronUp size={20} color="green" />
                    <span>{heroesBattle[1].powerstats.speed}</span>
                  </div>
                ) : heroesBattle[1].powerstats.speed ===
                  heroesBattle[0].powerstats.speed ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[1].powerstats.speed}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronDown size={20} color="red" />
                    <span>{heroesBattle[1].powerstats.speed}</span>
                  </div>
                )}
              </span>

              <span className="text-gray-200">
                {heroesBattle[1].powerstats.durability >
                heroesBattle[0].powerstats.durability ? (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronUp size={20} color="green" />
                    <span>{heroesBattle[1].powerstats.durability}</span>
                  </div>
                ) : heroesBattle[1].powerstats.durability ===
                  heroesBattle[0].powerstats.durability ? (
                  <div className="flex justify-start items-start gap-2">
                    <span>{heroesBattle[1].powerstats.durability}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronDown size={20} color="red" />
                    <span>{heroesBattle[1].powerstats.durability}</span>
                  </div>
                )}
              </span>

              <span className="text-gray-200">
                {heroesBattle[1].powerstats.combat >
                heroesBattle[0].powerstats.combat ? (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronUp size={20} color="green" />
                    <span>{heroesBattle[1].powerstats.combat}</span>
                  </div>
                ) : heroesBattle[1].powerstats.combat ===
                  heroesBattle[0].powerstats.combat ? (
                  <div className="flex justify-end items-start gap-2">
                    <span>{heroesBattle[1].powerstats.combat}</span>
                  </div>
                ) : (
                  <div className="flex justify-start items-start gap-2">
                    <ChevronDown size={20} color="red" />
                    <span>{heroesBattle[1].powerstats.combat}</span>
                  </div>
                )}
              </span>
            </div>
            <div className="flex flex-col items-end gap-4">
              <Image
                src={heroesBattle[1].images.md}
                alt="Image Hero"
                width={150}
                height={85}
              />
              <h2 className="text-gray-200 text-lg uppercase">
                {heroesBattle[1].name}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
