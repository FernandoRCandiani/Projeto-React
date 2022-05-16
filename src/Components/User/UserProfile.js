import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";

const UserProfile = () => {
  const { user } = useParams(); // Quando mexemos com parametros ex:/perfil/cat

  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
