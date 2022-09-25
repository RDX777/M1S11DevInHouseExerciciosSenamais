import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useCustomTheme } from "../../contexts"
import { Navbar, Profile } from "../../components"
import { GlobalStyle } from "../../themes"
import { PerfilProvider } from "../../contexts/Perfil"

export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>
        <main>
          <Profile />
        </main>
      </PerfilProvider>
    </ThemeProvider>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node,
}