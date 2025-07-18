import { 
  useState,
  useEffect,
  Suspense,
  lazy,
} from 'react'
import{
  Routes,
  Route,
  Navigate
} from'react-router-dom'
import Loading from './components/Loading'
const RepoList = lazy(() => import('./pages/RepoList'));

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/user/:id/repos' element={<RepoList />} />
        <Route path='*' element={<Navigate to='/users/shunwuyu/repos' />} />
      </Routes>
    </Suspense>
  )
}

export default App