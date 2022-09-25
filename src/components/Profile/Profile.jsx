import PropTypes from "prop-types"
import { usePerfil } from "../../contexts"
import { Container } from "./Profile.styles.jsx"

export const Profile = ({ profile }) => {
  const { handleFollow } = usePerfil()
  return (

    <Container>
      <p>{profile.nome}</p>
      <p>{profile.descricao}</p>
      <button onClick={() => handleFollow(profile.id)}>{profile.seguindo ? "Seguindo" : "Seguir"}</button>
    </Container>

  )
}

Profile.propTypes = {
  profile: PropTypes.object,
}
