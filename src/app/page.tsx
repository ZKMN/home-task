import { Metadata } from 'next';

import { Home } from '@/pagesLayer/Home';

export const metadata: Metadata = {
  title: 'Home Task',
  description: '',
};

const HomePage = () => <Home />;

export default HomePage;
