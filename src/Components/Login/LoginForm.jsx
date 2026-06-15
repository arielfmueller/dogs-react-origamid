import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import { Link } from "react-router-dom";
import styles from "../../Styles/Components/Login/LoginForm.module.css";
import stylesBtn from "../../Styles/Components/Form/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Usuário e/ou senha inválido(s)."} />
      </form>
      <Link className={styles.lost} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.signup}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se:</p>
      </div>
      <Link className={stylesBtn.button} to="/login/signup">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
