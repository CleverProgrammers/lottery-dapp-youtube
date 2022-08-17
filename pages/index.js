import { useState, useEffect } from 'react'
import Header from '../components/Header'
import PotCard from '../components/PotCard'
import Table from '../components/Table'
import { useAppContext } from '../context/context'
import style from '../styles/Home.module.css'
export default function Home() {
  const {
    address,
    connectWalletHandler,
    lotteryPot,
    lotteryPlayers,
    enterLotteryHandler,
    pickWinnerHandler,
  } = useAppContext()

  return (
    <div className={style.wrapper}>
      <Header />

      <PotCard />
      <Table />
    </div>
  )
}
