import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {

  const navigate = useNavigate();

  const homeButton = () => {
    navigate('/');
  }
  return (
    <div>
      <h1>AboutPage!!</h1>
      <button onClick={homeButton}>Home!!!!</button>
    </div>
  )
}

export default AboutPage