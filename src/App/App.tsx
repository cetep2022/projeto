import './App.css'
import Cards from '../pages/Cards/Cards';
import Home from '../pages/Home/Home';
import Header from '../components/Header';

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Cards></Cards>
    </div>
  )
}



