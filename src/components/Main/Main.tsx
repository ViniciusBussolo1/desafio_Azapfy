import { Aside } from '../Aside/Aside'
import { ListCards } from '../ListCards/ListCards'
import { Search } from '../Search/Search'

export function Main() {
  return (
    <div className=" bg-gray-900 flex justify-between">
      <Aside />
      <ListCards />
      <Search />
    </div>
  )
}
