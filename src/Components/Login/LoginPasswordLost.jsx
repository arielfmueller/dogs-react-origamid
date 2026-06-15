import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import Error from "../Helper/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Head from "../Helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      const {json} = await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Recupere sua senha" />
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email/Usuário" type="text" name="login" {...login} />
        {loading ? (
          <Button disabled>Enviando</Button>
        ) : (
          <Button>Enviar Email</Button>
        )}
      </form>
      {error && <Error error={error} />}
      {data && (
        <p style={{ color: "#4c1", marginTop: ".5rem", fontSize: ".875rem" }}>
          {data}
        </p>
      )}
    </section>
  );
};

export default LoginPasswordLost;
