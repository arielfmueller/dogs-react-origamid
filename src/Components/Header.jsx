import React from "react";
import styles from "../Styles/Components/Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../Assets/dogs.svg?react";
import User from "../Assets/usuario.svg?react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home ">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.username}
            <User />
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login | Criar
            <User />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
