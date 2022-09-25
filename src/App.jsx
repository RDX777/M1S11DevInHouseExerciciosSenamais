import { CustomThemeProvider } from "./contexts"
import { AppLayout } from "./layouts/App/AppLayout"

function App() {

  return (
    <CustomThemeProvider>
      <AppLayout />
    </CustomThemeProvider>
  )
}

export default App
