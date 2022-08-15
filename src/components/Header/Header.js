import { TbMenu } from 'react-icons/tb';
import { useState } from 'react';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <TbMenu
        className={`pointer black ${menu ? 'dn-m dn' : 'db-m db'} dn-ns ma2 b`}
        style={{ zIndex: 50 }}
        onClick={() => setMenu(!menu)}
      />
      <DesktopNav />
      <MobileNav setMenu={setMenu} menu={menu} />
    </>
  );
};
export default Header;
