import { Button } from '@components/ui';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const routeToLogin = () => {
    router.push('/auth/login');
  };
  return (
    <>
      <div className="h-minscreen flex justify-center items-center bg-slate-800 relative">
        <Image
          src="/assets/images/auth-started.svg"
          width={100}
          height={100}
          alt=""
          className="absolute top-0 left-0 w-screen h-screen object-cover"
        />
        <div className="top-0 left-0 right-0 bottom-0 absolute bg-black opacity-10"></div>
        <div className="flex justify-center items-center z-10">
          <div>
            <div className="flex justify-center text-white font-semibold text-5xl m-6 text-center">
              Let&#8217;s Discover
            </div>
            <div className="flex justify-center text-white font-semibold text-5xl m-6 text-center">
              Indonesia
            </div>
            <div className="h-[26rem]"></div>
            <div className="flex justify-center">
              <Button
                preset="primary"
                onClick={routeToLogin}
                className="scale-125 text-white"
              >
                Start Exploring
              </Button>
            </div>
            <div className="h-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
