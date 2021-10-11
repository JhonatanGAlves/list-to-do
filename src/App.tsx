import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, nameTask: 'Começar a issue 1931', done: false },
    { id: 2, nameTask: 'Issue 1931 finalizada', done: true }
  ])

  return (
    <C.Container>
      <C.mainArea>
        <C.Header>Lista de Tarefas</C.Header>

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
      </C.mainArea>
    </C.Container>
  )
}

export default App