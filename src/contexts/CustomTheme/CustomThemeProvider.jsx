import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { CustomThemeContext } from "./CustomThemeContext"
import { getTheme, setTheme } from "../../utils/index.js"

export const CustomThemeProvider = ({children}) => {

  const [isDark, setDark] = useState(true)

  useEffect(() => {
    setDark(getTheme())
  }, [])

  const handleTheme = () => setDark((previ) => {
    const value = !previ
    setTheme(value)
    return value
  })

  return (
    <CustomThemeContext.Provider value={{isDark, handleTheme}}>
      {children}
    </CustomThemeContext.Provider>
  )
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
}