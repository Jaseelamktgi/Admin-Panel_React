import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import List from './Pages/List/List'
import Single from './Pages/Single/Single'
import New from './Pages/New/New'
// import './Style/Dark.scss'

// import your route components too
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './FormSource';

function App() {
  
  return (
    <div className= " app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" 
              element={<New  inputs={userInputs} title="Adde new user" />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add new product"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
