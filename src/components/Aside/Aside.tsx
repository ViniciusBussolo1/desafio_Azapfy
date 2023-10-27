import { Button } from '@radix-ui/themes'
import { UserCircle2 } from 'lucide-react'

import IconSaturno from '../../../public/saturno.png'
import Image from 'next/image'

export function Aside() {
  return (
    <aside className="h-full w-60 bg-gray-950 py-7 ">
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <UserCircle2 size={48} className="text-blue-800" />
        <h1 className="text-2xl text-gray-200 uppercase">Vinicius</h1>
      </div>

      <div className="w-full flex justify-center mt-48 px-3">
        <Button size={'3'} className="w-full text-lg text-white cursor-pointer">
          <Image
            src={IconSaturno}
            alt="Icon Saturno"
            className="w-8 h-8 text-white"
          />
          Cartas
        </Button>
      </div>
    </aside>
  )
}
