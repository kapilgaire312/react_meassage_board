import { useContext } from 'react'
import { ThemeContext } from './Context';



function ThemeBanner() {
  const { theme, toggle } = useContext(ThemeContext)
  console.log(theme)

  return (
    <>
      <h1>The theme is: {theme}</h1>
      <button onClick={toggle}>Change it</button>
    </>

  )
}

export default ThemeBanner