import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DesejaContinuar from './pages/continuarMedio/DesejaContinuar.tsx'
import TemCerteza from './pages/certezaMedio/TemCerteza.tsx'
import GameOver from './pages/gameOver/GameOver.tsx'
import Home from './pages/home/Home.tsx'
import HomeGame from './pages/homeGame/HomeGame.tsx'
import SwaPay from './pages/produtos/swaPay/home/SwaPay.tsx'
import PayPop1 from './pages/produtos/swaPay/pop1/PayPop1.tsx'
import Question from './pages/question/Question.tsx'
import QuestionHard from './pages/questionHard/QuestionHard.tsx'
import QuestionMedio from './pages/questionMedio/QuestionMedio.tsx'
import RdStation from './pages/rdStation/RdStation.tsx'
import SorteioPremio from './pages/sorteioPremio/SorteioPremio.tsx'
import TelaDificuldade from './pages/telaDificuldade/TelaDificuldade.tsx'
import TelaDificuldadeMedio from './pages/telaDificuldadeMedio/TelaDificuldadeMedio.tsx'
import TemCertezaHard from './pages/certezaHard/TemCertezaHard.tsx'
import DesejaContinuarHard from './pages/continuarHard/DesejaContinuarHard.tsx'
import TelaDificuldadeHard from './pages/telaDificuldadeHard/TelaDificuldadeHard.tsx'
// import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }, {
    path: '/SwaPAY',
    element: <SwaPay />
  }, {
    path: '/PayPop1',
    element: <PayPop1 />
  },
  //telas jogo//
  {
    path: '/home-game',
    element: <HomeGame />
  }, {
    path: '/rdStation',
    element: <RdStation />
  }, {
    path: '/easy-question',
    element: <Question />
  }, {
    path: '/medium-question',
    element: <QuestionMedio />
  }, {
    path: '/hard-question',
    element: <QuestionHard />
  }, {
    path: '/continue',
    element: <DesejaContinuar />
  }, {
    path: '/really',
    element: <TemCerteza />
  }, {
    path: '/continue-hard',
    element: <DesejaContinuarHard />
  }, {
    path: '/really-hard',
    element: <TemCertezaHard />
  }, {
    path: '/game-over',
    element: <GameOver />
  }, {
    path: '/sorteio-premio',
    element: <SorteioPremio />
  }, {
    path: '/dificuldade',
    element: <TelaDificuldade />
  }, {
    path: '/dificuldade-media',
    element: <TelaDificuldadeMedio />
  }, {
    path: '/dificuldade-hard',
    element: <TelaDificuldadeHard />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)