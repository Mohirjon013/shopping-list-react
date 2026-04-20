import React from 'react'
import ShoppingListItem from './shopping-list-item'

function ShoppingList({data, onDelete, onToggleAc}) {
  return (
    <div className='shopping-list'>
      {
        data.map(item => (
          <ShoppingListItem item={item} key={item.id} onDeleteItem={() => onDelete(item.id)} onToggleAcItem={() => onToggleAc(item.id)}/>
        ))
      }
    </div>
  )
}

export default ShoppingList
