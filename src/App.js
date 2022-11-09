import './App.css';
import Navigation from './components/Navigation';

import {
  BrowserRouter,
  Routes, Route, Link, Outlet
} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import RouterWeb from './components/Router';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
      axios.get(`https://636a1b74b10125b78fd0a324.mockapi.io/fakeData2`)
      .then((response) => {
          setItems(response.data);
      })
  }, []);

  return (
    <>
    <BrowserRouter>
      <Navigation />
      <RouterWeb></RouterWeb>
    </BrowserRouter>
      {/* {content()} */}
    </>
  );
}

export default App;
