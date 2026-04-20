import earthImg from './assets/images/earth.svg'
import Information from './components/information'
import ShoppingList from './components/shopping-list'
import ShoppingAddForm from './components/shopping-add-form'
import Filter from './components/filter'
import { Component } from 'react'
import { arr } from './contstants'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: arr
    }
  }
  
  onDelete = (id) => {
    const newArr = this.state.data.filter(item => item.id !== id)
    this.setState({
      data: newArr
    })
  }

  onToggleAc = (id) => {
    const newArr = this.state.data.map(item => {
      if(item.id === id){
        return {...item, active: !item.active}
      }

      return item
    })

    this.setState({
      data: newArr
    })
  }

  onAdd = (item) => {
    const {title, number} = item
    const newData = {title, size: number, active:false, id:crypto.randomUUID()}
    const newArr = [...this.state.data, newData]
    this.setState({
      data: newArr
    })
  }

  render() {

    const {data} = this.state
    return (
      <div className='app'>
        <div className='wrapper'>
          <div className='card'>
            <Information length={data.length}/>

            <ShoppingAddForm onAdd={this.onAdd}/>

            <ShoppingList data={data} onDelete={this.onDelete} onToggleAc={this.onToggleAc}/>

            <Filter/>
          </div>
          <img src={earthImg} alt="earth-img"/>
        </div>
      </div>
    )
  }
}

export default App
