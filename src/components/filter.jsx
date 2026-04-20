import React from 'react'

function Filter({filter, onFilterSelect}) {
    const buttons = [
        {id:"all", label: "All products"},
        {id:"completed", label: "Completed"},
        {id:"big-size", label: "Big size"},

    ]
    return (
        <div className='filter'>
            <div className="btns">
                {buttons.map((item) => (
                    <button onClick={() => onFilterSelect(item.id)} key={item.id} className={`${filter === item.id && 'active'}`}>{item.label}</button>
                ))}
            </div>
        </div>
    )
}

export default Filter
