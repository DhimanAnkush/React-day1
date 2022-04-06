import logo from './logo.svg';
import './App.css';
import { List } from './components/List';
import { Join } from './components/JoinUs';
import { Settings } from './components/Settings';
import { Login } from './components/Login';
import { Contact } from './components/Contact';
import { Search } from './components/Search';
import { Help } from './components/Help';
import { Home } from './components/Home';
import { Download } from './components/Download';

function App() {
  return (
    <div className="App">
      <List />
      <div className='flex'>
        <Join />
        <Settings />
      </div>
      <div className='flex'>
        <Login />
        <Contact />
      </div>
      <div className='flex'>
        <Search/>
        <Help />
      </div>
      <div className='flex'>
        <Home />
        <Download />
      </div>

    </div>
  );
}

export default App;
