import { useLocation } from 'react-router-dom';
import Header from './Header';

const ConditionalHeader = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="container mx-auto">
      <Header />
    </div>
  );
};

export default ConditionalHeader;
