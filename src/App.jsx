import { useState } from 'react';
import './App.css';
import HandlerLogOut from './components/HandlerLogOut';
import HandlerLogin from './components/HandlerLogin';


function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <>
      {isLogin ? 
        <HandlerLogOut setLogin={setLogin} /> : 
        <HandlerLogin setLogin={setLogin} />
      }
    </>
  );
}

export default App;
