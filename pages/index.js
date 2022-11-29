import Header from '../components/Header'
import Table from '../components/Table'
import style from '../styles/Home.module.css'
import LotteryCard from '../components/LotteryCard'
 
export default function Home() {
  return (
    <div className={style.wrapper}>
      
      <Header />

      
      <LotteryCard/>

     
      <Table/>
    </div>
  )
}
