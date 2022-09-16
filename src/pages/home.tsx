import { Button } from '../components';
import { useAuth0 } from '@auth0/auth0-react';

export const Home = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const logInOrOutClicked = () =>
    isAuthenticated ? logout() : loginWithRedirect();

  return (
    <article>
      <header className="w-full flex justify-end p-4 gap-x-2">
        {!isAuthenticated && (
          <Button
            onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
            type="secondary"
          >
            Sign up
          </Button>
        )}
        <Button onClick={logInOrOutClicked}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
      </header>
      {isAuthenticated && !isLoading && user && (
        <h1 className="text-3xl text-center">Hi {user.name}!</h1>
      )}

      <section className="flex items-center pt-8 flex-col">
        <h4>Columns will go here</h4>
        <ol className="list-decimal">
          <li>Date</li>
          <li>Withdrawals</li>
          <li>Deposit</li>
        </ol>
      </section>
    </article>
  );
};
