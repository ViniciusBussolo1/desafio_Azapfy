'use client'

import { HandleHeroesContext } from '@/context/HandleHeroesContext'
import { TextField } from '@radix-ui/themes'
import { Search } from 'lucide-react'
import { ChangeEvent, useEffect, useState, useContext } from 'react'
import { useDebounce } from 'usehooks-ts'

export function SearchComponent() {
  const [name, setName] = useState('')
  const debouncedValue = useDebounce<string>(name, 400)

  const { handleSearchHeroes } = useContext(HandleHeroesContext)

  const handleSearchHero = async (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  useEffect(() => {
    const searchCustomers = async () => {
      await handleSearchHeroes(debouncedValue)
    }

    searchCustomers()
  }, [debouncedValue])

  return (
    <div className="px-4 py-4">
      <TextField.Root>
        <TextField.Slot>
          <Search size={20} color="blue" />
        </TextField.Slot>
        <TextField.Input
          radius="full"
          variant="soft"
          color="blue"
          className="text-white"
          value={name}
          onChange={handleSearchHero}
        />
      </TextField.Root>
    </div>
  )
}
