import React from "react";
import Enviar from '../../Assets/enviar.svg?react'
import Error from '../Helper/Error'
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import styles from "../../Styles/Components/Photo/PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    const token = window.localStorage.getItem('token')
    const {url, options} = COMMENT_POST(id, {comment}, token)
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json] )
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${single ? styles.single : ""} ${styles.form}`}>
      <textarea
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        name="comment"
        id="comment"
        placeholder="Digite aqui seu comentário"
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
