import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import api from "../../services/api";

interface User {
  name: string;
  email: string;
  password: string;
};
const user: User = { name: "", email: "", password: "" };

export const SignupPage: React.FC = () => {
  const [user, setUser] = useState<User>();

  //   api
  //     .get('/signup')
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  return (
    <div>
      <h2>Inscreva-se</h2>
      {/* depois botar onSubmit={onSubmit} dentro da tag form */}
      <form>
        <input
          type="text"
          name="name"
          placeholder="Insira o seu nome"
          pattern="[A-Az-z]{3, }"
          title="O nome deve conter 3 letras no mínimo"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Insira o seu email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="O e-mail deve obedecer o formato exigido."
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Insira uma senha segura"
          pattern="[0-9a-zA-Z]{6,}"
          title="A senha deve conter no mínimo 8 caracteres."
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Confirme a senha"
          pattern="[0-9a-zA-Z]{6,}"
          title="A senha deve conter no mínimo 8 caracteres."
          required
        />

        <button type="submit">Pronto!</button>
      </form>

      <p>
        Já tem uma conta? <Link to={'/login'}>Faça login</Link>.
      </p>
    </div>
  );
};
