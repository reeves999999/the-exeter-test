import { Outlet } from 'react-router-dom';
import NavBar from '../components/Header';
import { UserRepoProvider } from '../contexts/UserRepoContext';

function Layout() {
  return (
    <main>
      <UserRepoProvider>
        <NavBar />
        <Outlet />
      </UserRepoProvider>
    </main>
  );
}

export default Layout;
