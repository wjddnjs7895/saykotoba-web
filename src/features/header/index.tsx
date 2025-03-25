import Image from 'next/image';

import LogoIcon from '@assets/logo.png';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('header');
  return (
    <div className="flex items-center justify-between w-full bg-white">
      <Image src={LogoIcon} alt="logo" width={100} height={100} />
      <nav>
        <ul>
          <li>{t('name')}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
