import { CustomThemeProvider } from "./contexts"
import { AppLayout } from "./layouts/App/AppLayout"

function App() {

  return (
    <CustomThemeProvider>
      <AppLayout>
        <p>teste</p>
      </AppLayout>
    </CustomThemeProvider>
  )
}

export default App
