import React, { Component } from 'react'

class SearchPanel extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            search: ""
        }
    }
    onChange = (e) => {
        let value = e.target.value
        this.setState({search:value})
        this.props.onUpdateSearch(value)
    }
    
    render() {
        const {search} = this.state
        return (
            <input className='search' type="search" value={search} onChange={this.onChange} placeholder='Search....' />
        )
    }
}

export default SearchPanel
