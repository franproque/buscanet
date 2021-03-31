import './App.css';
import MenuLateral from './components/MenuLateral'
import NavBar from '../src/components/NavBar/NavBar'
import CenteredGrid from '../src/components/ProductsGrid/ProductsGrid';

function App() {
  return (
  <div className="container">
    <NavBar></NavBar>
    <div className="container--main">
      <MenuLateral/>
      <CenteredGrid></CenteredGrid>
    </div>
  </div>
  );
}

export default App;
