import { Header } from '@ui';
import { NextPage } from 'next';

const Viktor: NextPage = () => {
  return (
    <div>
      <div>Viktor</div>
      <div>Typography</div>
      <div>Header</div>
      <div>
        <Header preset="t1" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="t1" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="t1" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="t2" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="t2" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="t2" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h1" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h1" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h1" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h2" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h2" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h2" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h3" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h3" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h3" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h4" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h4" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h4" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h5" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h5" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h5" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h6" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h6" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h6" className="font-light">
          Lorem ipsum.
        </Header>
        <div className="bg-danger-dark">TEST</div>
      </div>
    </div>
  );
};

export default Viktor;
