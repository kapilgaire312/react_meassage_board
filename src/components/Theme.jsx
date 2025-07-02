import { createContext, useState } from 'react'
import ThemeBanner from './ThemeBanner';
import { ThemeContext } from './Context';
import { Link } from 'react-router-dom'

function Theme() {
  const [theme, setTheme] = useState('dark')

  function toggle() {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark')
  }

  return (<>

    <h1>Hello</h1>
    <ThemeContext.Provider value={{ theme, toggle }}>

      <ThemeBanner />

    </ThemeContext.Provider>
    <hr></hr>
    <Link to='/messageboard'>Go to Message Board</Link>
  </>

  )
}

export default Theme