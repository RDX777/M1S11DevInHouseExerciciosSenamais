import { Container, Title, Button } from "./Navbar.styled"
import { useCustomTheme } from "../../contexts"

export const Navbar = () => {
  const { handleTheme } = useCustomTheme()
  return (<Container>
    <Title>Perfis</Title>

    <Button onClick={handleTheme}>Tema</Button>
  </Container>)
}