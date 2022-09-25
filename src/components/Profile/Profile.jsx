import PropTypes from "prop-types";
import { usePerfil } from "../../contexts";
import { Button } from "../Button";
import { Container } from "./Profile.styles";

export const Profile = () => {
  const { profiles, handleFollow } = usePerfil();

  return (
    <>
      {profiles.map((p) => (
        <div key={p.id}>
          <p>{p.nome}</p>
          <p>{p.descricao}</p>
          <button onClick={() => handleFollow(p.id) }>{p.seguindo ? "Seguindo" : "Seguir"}</button>
        </div>
      ))}
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
