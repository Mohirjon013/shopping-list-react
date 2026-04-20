import React from 'react'

class ShoppingAddForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title:"Buy ",
      number:""
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onAdd = (e) => {
    e.preventDefault()
    const data = {
      title:this.state.title,
      number:this.state.number
    }

    if(!data.number.length || !data.title.length){
      alert("All fields should filled")
    }
    else{
      this.props.onAdd(data)
      this.setState({
        title: "Buy",
        number:''
      })
    }

  }


  render() {
    const {title, number} = this.state

    return (
      <form onSubmit={this.onAdd} className='form'>
        <input onChange={this.onChange} value={title} type="text" name='title' className='title' placeholder='Title...' required/>
        <input onChange={this.onChange} value={number} type="number" name='number' className='number' placeholder='14...' required/>
        <button type='submit' >Add</button>
      </form>
    )
  }
}

export default ShoppingAddForm
