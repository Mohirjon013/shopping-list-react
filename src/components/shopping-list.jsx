import React from 'react'
import ShoppingListItem from './shopping-list-item'

function ShoppingList({data}) {
  return (
    <div className='shopping-list'>
      {
        data.map(item => (
          <ShoppingListItem item={item}/>
        ))
      }
    </div>
  )
}

export default ShoppingList
