import { Breadcrumb, NavbarOpen } from '@ui';
import type { NextPage } from 'next';

const Bread: NextPage = () => {
  return (
    <>
      <Breadcrumb path={['Test', 'Bread']} />
      <NavbarOpen />
    </>
  );
};

export default Bread;
