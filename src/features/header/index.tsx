import Image from 'next/image';

import LogoIcon from '@/assets/logo.png';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('header');
  return (
    <header className="flex items-center justify-between">
      <Image src={LogoIcon} alt="logo" width={100} height={100} />
      <nav>
        <ul>
          <li>{t('name')}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
