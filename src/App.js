import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import HomeWithUseStateHook from './components/HomeWithUseStateHook';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <HomeWithUseStateHook></HomeWithUseStateHook>
    </div>
  );
}

export default App;
