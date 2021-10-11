import { Item } from '../../types/Item'
import * as C from './styles'
import { useState } from 'react'

type Props = {
    item: Item
}

export const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <C.Container>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.nameTask}</label>
        </C.Container>
    )
}