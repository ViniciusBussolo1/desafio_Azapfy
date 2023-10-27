import { Sword } from 'lucide-react'
import Image from 'next/image'

interface CardProps {
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
  onClick: () => void
}

export function Card({ id, images, name, powerstats, onClick }: CardProps) {
  const totalPower =
    powerstats.combat +
    powerstats.speed +
    powerstats.durability +
    powerstats.intelligence +
    powerstats.power +
    powerstats.strength

  return (
    <>
      {totalPower >= 0 && totalPower <= 200 ? (
        <div
          key={id}
          className="w-48 flex flex-col justify-center items-center gap-3 pb-3 rounded border-[2px] border-gray-500 bg-gray-800 cursor-pointer hover:bg-gray-600"
          onClick={onClick}
        >
          <Image
            src={images.md}
            width={150}
            height={85}
            alt="image hero "
            className="shadow-lg shadow-gray-400 rounded"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-200 uppercase font-bold">{name}</h1>
            <div className="flex items-center gap-4">
              <Sword rotate={180} size={20} className="text-gray-200" />
              <span className="text-gray-200 uppercase font-bold">
                {totalPower}
              </span>
            </div>
          </div>
        </div>
      ) : totalPower >= 200 && totalPower <= 400 ? (
        <div
          key={id}
          className="w-48 flex flex-col justify-center items-center gap-3 pb-3 rounded border-[2px] border-green-700 bg-green-950 cursor-pointer hover:bg-green-900"
          onClick={onClick}
        >
          <Image
            src={images.md}
            width={150}
            height={85}
            alt="image hero "
            className="shadow-lg shadow-green-500 rounded"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-200 uppercase font-bold">{name}</h1>
            <div className="flex items-center gap-4">
              <Sword rotate={180} size={20} className="text-gray-200" />
              <span className="text-gray-200 uppercase font-bold">
                {totalPower}
              </span>
            </div>
          </div>
        </div>
      ) : totalPower >= 400 && totalPower <= 500 ? (
        <div
          key={id}
          className="w-48 flex flex-col justify-center items-center gap-3 pb-3 rounded border-[2px] border-purple-600 bg-purple-950 cursor-pointer hover:bg-purple-900"
          onClick={onClick}
        >
          <Image
            src={images.md}
            width={150}
            height={85}
            alt="image hero "
            className="shadow-lg shadow-purple-800 rounded"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-200 uppercase font-bold">{name}</h1>
            <div className="flex items-center gap-4">
              <Sword rotate={180} size={20} className="text-gray-200" />
              <span className="text-gray-200 uppercase font-bold">
                {totalPower}
              </span>
            </div>
          </div>
        </div>
      ) : totalPower >= 400 && totalPower <= 599 ? (
        <div
          key={id}
          className="w-48 flex flex-col justify-center items-center gap-3 pb-3 rounded border-[2px] border-yellow-600 bg-yellow-950 cursor-pointer hover:bg-yellow-800"
          onClick={onClick}
        >
          <Image
            src={images.md}
            width={150}
            height={85}
            alt="image hero "
            className="shadow-lg shadow-yellow-800 rounded"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-200 uppercase font-bold">{name}</h1>
            <div className="flex items-center gap-4">
              <Sword rotate={180} size={20} className="text-gray-200" />
              <span className="text-gray-200 uppercase font-bold">
                {totalPower}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div
          key={id}
          className="w-48 flex flex-col justify-center items-center gap-3 pb-3 rounded border-[2px] border-red-600 bg-red-950 cursor-pointer hover:bg-red-800"
          onClick={onClick}
        >
          <Image
            src={images.md}
            width={150}
            height={85}
            alt="image hero "
            className="shadow-lg shadow-red-800 rounded"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-200 uppercase font-bold">{name}</h1>
            <div className="flex items-center gap-4">
              <Sword rotate={180} size={20} className="text-gray-200" />
              <span className="text-gray-200 uppercase font-bold">
                {totalPower}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
