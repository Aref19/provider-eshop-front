
import './App.css';
import Login from './component/Login';
import { useAuth } from './hook/ContextHook';
import { AuthInContext } from './context/LoginContext';
import Item from './component/Item';

const Map = () => {


  const { auth } = useAuth() as AuthInContext;
  if (auth == null) {
    return (
      <div className="App">
        <Login />
      </div >
    );
  } else {
    return (
      <div className="App">
        <Item  />
      </div >
    );
  }
}
function App() {
  return (
    <Map />
  )


}



export default App;
