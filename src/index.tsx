
import './index.css';
import App from './pages/App';
import Hello from './pages/Hello'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from "react-dom"

render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/hello" element={<Hello/>}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

