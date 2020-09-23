import * as React from 'react';
import { Link } from 'react-router-dom';
type Props = {};

export const LoginPage: React.FC = (props: Props) => {

  return (
    <div>
      <h2>Faça login</h2>
      <input type="text" name="name" placeholder="Insira o seu nome" />
      <input type="password" name="password" placeholder="Insira a sua senha" />
      <button>Eba!!</button>
      <p>Ainda não tem uma conta? <Link to={"/signup"}>Inscreva-se</Link>.</p>
    </div>
  );
};
