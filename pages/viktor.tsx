import { Header } from '@ui';
import { NextPage } from 'next';

const Viktor: NextPage = () => {
  return (
    <div>
      <div>Viktor</div>
      <div>Typography</div>
      <div>Header</div>
      <div>
        <Header preset="t1" weight="bold">
          Lorem ipsum.
        </Header>
        <Header preset="t1" weight="regular">
          Lorem ipsum.
        </Header>
        <Header preset="t1" weight="light">
          Lorem ipsum.
        </Header>
        <Header preset="t2" weight="bold">
          Lorem ipsum.
        </Header>
        <Header preset="t2" weight="regular">
          Lorem ipsum.
        </Header>
        <Header preset="t2" weight="light">
          Lorem ipsum.
        </Header>
      </div>
    </div>
  );
};

export default Viktor;
