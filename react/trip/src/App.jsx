import { useState } from 'react'
import './App.css'
import {
  Suspense,
  lazy
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading'
import Toast from '@/components/Toast'

const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Discount = lazy(() => import('@/pages/Discount'))
const Trip = lazy(() => import('@/pages/Trip'))
const Account = lazy(() => import('@/pages/Account'))
const Collection = lazy(() => import('@/pages/Collection'))
const Detail = lazy(() => import('@/pages/Detail'))
const ArticleNew = lazy(()=>import('@/pages/Article/ArticleNew'))
const Article = lazy(()=>import('@/pages/Article'))
  
function App() {

  return (
    <>
    {/* <Loading /> */}
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* 带有tabbar的Layout */}
          <Route element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/trip' element={<Trip />} />
            <Route path='/account' element={<Account />} />
            <Route path='/collection' element={<Collection />} />

          </Route>
          {/* 空的Layout */}
          <Route element={<BlankLayout />}>
            <Route path='/search' element={<Search />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path="/article" element={<Article />}>
              <Route path="new" element={<ArticleNew />} />
              {/* <Route path="list" element={<ArticleList />} /> */}
            </Route>
          </Route>
          
        </Routes>
      </Suspense>
      <Toast />
    </>
  )
}

export default App
