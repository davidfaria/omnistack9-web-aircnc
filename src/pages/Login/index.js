import React, { useState } from "react";
import api from "./../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });

    // console.log(response);

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }
  return (
    <>
      <p>
        Ofereça <b>spots</b> para programadores e encontre <b>talentos</b> para
        sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>E-MAIL *</label>
        <input
          type='email'
          id='email'
          placeholder='Seu melhor e-mail'
          onChange={e => setEmail(e.target.value)}
        ></input>
        <button className='btn' type='submit'>
          Entrar
        </button>
      </form>
    </>
  );
}
