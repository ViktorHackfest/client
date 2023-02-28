import { Breadcrumb } from '@components/ui';
import type { NextPage } from 'next';

const Bread: NextPage = () => {
  return <Breadcrumb path={['Test', 'Bread']} />;
};

export default Bread;
