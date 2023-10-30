'use client'

import { TextField } from '@radix-ui/themes'
import { Search } from 'lucide-react'

export function SearchComponent() {
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
        />
      </TextField.Root>
    </div>
  )
}
