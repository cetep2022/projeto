import './App.css'
import Cards from '../components/Cards'
import Home from '../pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <div className="layout-app">
        <div className='container'>
          <Cards heading="teste" message="sdsh jsdfhsj jd fj kf skfj  fjfks f sfjs fjsfkjs  fsf" button="git-hub" />
          <Cards heading="teste" message="sdsh jsdfhsj jd fj kf skfj  fjfks f sfjs fjsfkjs  fsf" button="git-hub" />
        </div>
      </div>
    </div>
  )
}



