import useTitle from '@/hooks/useTitle'
import {
  Button
}from 'react-vant';
import{
  showToast
}from '@/components/Toast/toastController'

const Home = () => {
  useTitle('奶龙首页')
  return (
    <>
      Home
      <button type='primaty' onClick={() => showToast(3,6,9)}>点击</button>
    </>
  )
}
export default Home
