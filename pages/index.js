import Header from '../components/Header'
import PotCard from '../components/PotCard'
import Table from '../components/Table'

import style from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <PotCard />
      <Table />
    </div>
  )
}
