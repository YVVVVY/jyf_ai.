import {
  BrowserRouter as Router, // 前端路由
  Routes, // 路由设置容器
  Route,// 单条路由
} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import NewProduct from './pages/Products/NewProduct';

function App() {
  return (
    <>
     {/* 前端路由接管一切,配置 */}
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<UserProfile />}/>
        <Route path='/products' element={<Products />}>
          <Route path=':productId' element={<ProductDetails />}/>
        <Route path='new' element={<NewProduct />}/>
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;