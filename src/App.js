import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './components/routing/Router';

function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
