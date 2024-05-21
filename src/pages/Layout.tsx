import { Outlet } from 'react-router-dom';
import NavBar from '../components/Header';

function Layout() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}

export default Layout;
