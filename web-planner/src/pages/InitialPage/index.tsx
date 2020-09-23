import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export const InitialPage: React.FC = (props: Props) => {
  return (
    <div>
      <p>InitialPage</p>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
      
      <Link to={'/signup'}>
        <button>Signup</button>
      </Link>
    </div>
  );
};
