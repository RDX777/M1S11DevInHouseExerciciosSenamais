import { CustomThemeProvider } from "./contexts"
import { AppLayout } from "./layouts/App/AppLayout"
import { GlobalStyle } from "./themes"

function App() {

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <AppLayout>
        <p>teste</p>
      </AppLayout>
    </CustomThemeProvider>
  )
}

export default App
