import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RdStation from './pages/rdStation/RdStation.tsx'
import GameOver from './pages/gameOver/GameOver.tsx'
import Question from './pages/question/Question.tsx'
import SorteioPremio from './pages/sorteioPremio/SorteioPremio.tsx'
import TelaVencedor from './pages/telaVencedor/TelaVencedor.tsx'
import Home from './pages/home/Home.tsx'
import TelaDificuldade from './pages/telaDificuldade/TelaDificuldade.tsx'
import SwaPay from './pages/produtos/swaPay/home/SwaPay.tsx'
import PayPop1 from './pages/produtos/swaPay/pop1/PayPop1.tsx'
import TelaDificuldadeMedio from './pages/telaDificuldadeMedio/TelaDificuldadeMedio.tsx'
import QuestionMedio from './pages/questionMedio/QuestionMedio.tsx'
import HomeGame from './pages/homeGame/HomeGame.tsx'
// import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/SwaPAY',
    element: <SwaPay />
  },{
    path: '/PayPop1',
    element: <PayPop1 />
  },
  //telas jogo//
  {
    path: '/home-game',
    element: <HomeGame />
  },
  {
    path: '/rdStation',
    element: <RdStation />
  },
  {
    path: '/game-over',
    element: <GameOver />
  },
  {
    path: '/easy-question',
    element: <Question />
  },{
    path: '/medium-question',
    element: <QuestionMedio />
  },
  {
    path: '/sorteio-premio',
    element: <SorteioPremio />
  },
  {
    path: '/WINNER',
    element: <TelaVencedor />
  },
  {
    path: '/dificuldade',
    element: <TelaDificuldade />
  },
  {
    path: '/dificuldade-media',
    element: <TelaDificuldadeMedio />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)