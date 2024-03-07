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
// import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    path: '/question',
    element: <Question />
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
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
