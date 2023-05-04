
import './App.css';
import Login from './component/Login';
import { useAuth } from './hook/ContextHook';
import { AuthInContext } from './context/LoginContext';
import Item from './component/Item';

import { createRoot } from "react-dom/client";
import { Outlet, Route } from 'react-router-dom';
import { Routes, useNavigate } from 'react-router-dom';
import { log } from 'console';
import EditItem from './component/EditItem';

const root = createRoot(document.getElementById("root") as Element);


const Map = () => {

  console.log("root", root);


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
        <Routes>
          <Route
            path="/" element={<Outlet />}>
            <Route path="item" element={<Item />} />
            <Route path="edit" element={<EditItem />} />
          </Route>
        </Routes>
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
