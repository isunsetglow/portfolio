import { useRef } from 'react'
import ScrollUp from './ScrollUp'
// import reactLogo from './assets/react.svg'
// import viteLogo from '//vite.svg'
import './App.css'

function App() {
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const scrolltToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  return (
    <>
    <div>
      <ScrollUp/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Satisfy"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Sans"></link>

      <div className='options'>
        <ul>
          <li onClick={() => scrolltToSection(about)} className='link'>About</li>
          <li onClick={() => scrolltToSection(projects)} className='link'>Projects</li>
          <li onClick={() => scrolltToSection(contact)} className='link'>Contact</li>
        </ul>
      </div>
      <div className='main'>
        <h2>Hello! My name is</h2>
        <h1 className='name'>Maria Hernandez</h1>
        <h2>and I'm a Front-end Web Developer.</h2>
      </div>
      <div ref={about} className='about'>
        <p>I am an Information Technology student at the University of Central Florida. 
          I am passionate about creating beautiful and functional websites and applications. </p>
        <p>I started this journey a year ago and the more I learn about it the more I love it.
          Art has always been a form of expression for me and I love that I can express myself through code as well.
          I am a very creative person and I love to learn new things. I am always looking for new challenges and ways to improve my skills.
          Currently, I'm focusing on finishing my last 2 semester strong and pursuing new opportunitues to continue to grow as a developer.
        </p>
      </div>
      <div ref={projects} className='projects'>

      </div>
      <div ref={contact} className='contact'>

      </div>
    </div>
    </>
  )
}

export default App