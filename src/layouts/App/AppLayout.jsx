import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useCustomTheme } from "../../contexts"
import { Navbar } from "../../components"
import { GlobalStyle } from "../../themes"

export const AppLayout = ({children}) => {
  const { theme } = useCustomTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {children}
    </ThemeProvider>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node,
}