import earthImg from './assets/images/earth.svg'
import Information from './components/information'
import ShoppingList from './components/shopping-list'
import ShoppingAddForm from './components/shopping-add-form'
import Filter from './components/filter'
import { Component } from 'react'
import { arr } from './contstants'
import SearchPanel from './components/search-panel'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: arr,
      search:"",
      filter:"all"
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

  searchData = (arr, term) => {
    if(term.length === 0){
      return arr
    }

    return arr.filter(item => item.title.indexOf(term) > -1)
  }

  onUpdateSearch = (search) => {
    this.setState({search})
  }

  filterData = (arr, filter) => {
    switch(filter) {
      case "completed":
        return arr.filter(item => item.active)
      case "big-size":
        return arr.filter(item => item.size > 10)
      default:
        return arr
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }


  render() {
    const {data, search, filter} = this.state

    const allData = this.filterData(this.searchData(data, search), filter)

    return (
      <div className='app'>
        <div className='wrapper'>
          <div className='card'>
            <Information length={data.length}/>
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <ShoppingAddForm onAdd={this.onAdd}/>

            <ShoppingList data={allData} onDelete={this.onDelete} onToggleAc={this.onToggleAc}/>

            <Filter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          <img className='app-img' src={earthImg} alt="earth-img"/>
        </div>
      </div>
    )
  }
}

export default App
