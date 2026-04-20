import React from 'react'

function ShoppingListItem(props){
    
    const {item, onDeleteItem, onToggleAcItem} = props
    
    return (
        <div key={item.id} className={`list-item ${item.active && 'active'}`}>
            <div className="item-info">
            <span>{item.size}</span>
            <p>{item.title}</p>
        </div>
            <div className="item-actions">
                <span onClick={onToggleAcItem} className='check'>&#10003;</span>
                <span onClick={onDeleteItem} className='times'>&times;</span>
            </div>
        </div>
    )
}

export default ShoppingListItem
