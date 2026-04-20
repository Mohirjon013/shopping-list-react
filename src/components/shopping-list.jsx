import React from 'react'
import ShoppingListItem from './shopping-list-item'

function ShoppingList({data, onDelete, onToggleAc}) {
  return (
    <div className='shopping-list'>
      { data.length ? 
        data.map(item => (
          <ShoppingListItem item={item} key={item.id} onDeleteItem={() => onDelete(item.id)} onToggleAcItem={() => onToggleAc(item.id)}/>
        ))
        : (<h1 style={{textAlign:"center", color:"#fff"}}>Not Found data</h1>)
      }
    </div>
  )
}

export default ShoppingList
