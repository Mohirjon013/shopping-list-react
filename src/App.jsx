import earthImg from '../src/assets/images/earth.svg'
import Information from './components/information'
import ShoppingList from './components/shopping-list'
import ShoppingAddForm from './components/shopping-add-form'
import Filter from './components/filter'

function App() {
  
  const data = [
    {
      id:1,
      size:14,
      title:"Buy smth",
      active:false
    },
    {
      id:2,
      size:25,
      title:"Buy Apple",
      active:true
    },
    {
      id:3,
      size:20,
      title:"Buy IPhone",
      active:false
    },
  ]

  return (
    <div className='app'>
      <div className='wrapper'>
        <div className='card'>
          <Information/>

          <ShoppingAddForm/>

          <ShoppingList data={data}/>

          <Filter/>
        </div>
        <img src={earthImg} alt="earth-img"/>
      </div>
    </div>
  )
}

export default App
