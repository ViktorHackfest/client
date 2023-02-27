import { Header, Toast } from '@ui';
import { NextPage } from 'next';

const Viktor: NextPage = () => {
  const errorToast = Toast({
    preset: 'error',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  const warningToast = Toast({
    preset: 'warning',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  const successToast = Toast({
    preset: 'success',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  const infoToast = Toast({
    preset: 'info',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  const errorHandler = () => {
    console.log('ERROR');
    errorToast();
  };
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
      <div>Toast</div>
      <div>
        <button onClick={errorHandler} className="bg-danger-light">
          Error
        </button>
        <button onClick={() => warningToast()} className="bg-warning-light">
          Warning
        </button>
        <button onClick={() => successToast()} className="bg-success-light">
          Success
        </button>
        <button onClick={() => infoToast()} className="bg-cerulean">
          Info
        </button>
      </div>
    </div>
  );
};

export default Viktor;
