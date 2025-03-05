import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const Home: FC = () => {
  const { t } = useTranslation('home');
  return (
    <main className="px-8 py-4 max-w-screen-lg flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p className="text-sm mb-8">{t('description')}</p>
    </main>
  );
};

export default Home;
