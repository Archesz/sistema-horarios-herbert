import React from 'react'
import "../styles/home.scss"

function Home() {
  return (
    <div className='home-container'>
      <span className="agenda-title">Sistema</span>
      <span className='agenda-title red'>Herbert de Souza</span>
      <span className="agenda-descript">Olá! Esse sistema foi desenvolvido por <a href="https://portfolio-jovi-a8jn76wqx-archesz.vercel.app" target="_blank" className='link'>@Archs (Jovi)</a>. Estamos em fase de teste. Quaisquer erro, me chamem!</span>

      <span className="agenda-descript">Esse é um projeto <b>Open Source</b> (Código aberto), Quaisquer programadores, designers, artistas ou computeiros podem ajudar a desenvolver o projeto para ampliar para diversos cursinhos populares :)</span>

      <span className="agenda-descript">Para acessar o código desse projeto, basta acessar o <a href="https://github.com/Archesz/sistema-horarios-herbert" className='link' target="_blank">Github</a>.</span>

    </div>
  )
}

export default Home