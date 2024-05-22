import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { UserRepoProvider } from '../contexts/UserRepoContext';

function Layout() {
  return (
    <main>
      <UserRepoProvider>
        <Header />
        <Outlet />
      </UserRepoProvider>
    </main>
  );
}

export default Layout;
