import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useCustomTheme } from "../../contexts"
import { Navbar } from "../../components"
import { GlobalStyle } from "../../themes"
import { PerfilProvider } from "../../contexts/Perfil"
import { Profiles } from "../../pages/Profiles/Profiles"

export const AppLayout = ({ children }) => {
  const { theme } = useCustomTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>

        <main>
          <Profiles />
        </main>
      </PerfilProvider>
    </ThemeProvider>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node,
}