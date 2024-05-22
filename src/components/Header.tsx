import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="bg-exeter-grey-900 text-white p-8 sticky top-0">
      <img src={logo} alt="The Exeter" className="max-h-12" />
    </header>
  );
};

export default Header;
