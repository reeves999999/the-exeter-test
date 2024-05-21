import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <h1>Error occurred</h1>
      <p>
        {isRouteErrorResponse(error) ? 'Page not found' : 'Unexpected error'}{' '}
      </p>
    </>
  );
}

export default ErrorPage;
