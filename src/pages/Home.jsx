import React from 'react'
import "../styles/home.scss"
import Avatar from '../components/Avatar/Avatar'
import Notification from "../components/Notification/Notification"
import Dataview from '../components/Dataview/Dataview'
import Events from '../components/Events/Events'
import ListStudents from '../components/ListStudents/ListStudents'

function Home() {
  return (
    <div className='container'>

      <div className='home-welcome'>
        <span className="home-title">Olá, bem vindx Professor(a).</span>

        <div className='welcome-row'>
          <Notification />
          <Avatar />
        </div>

      </div>

      <div className='home-row'>

        <Dataview />

        <div className='home-col'>

            <Events />
            <ListStudents />

        </div>

      </div>

    </div>
  )
}

export default Home