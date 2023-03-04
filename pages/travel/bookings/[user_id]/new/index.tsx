import { Breadcrumb, Button, Footer, InputField, Navbar, Toast } from '@ui';
import { fetchUser, userAccessToken } from '@utils/fetchGoogleAuth';
import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';

type User = {
  photoURL: string;
  displayName: string;
  email: string;
  uid: string;
};

const BookingSection: NextPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const accessToken = userAccessToken();
      if (!accessToken) return router.push('/auth/login');
      const [userInfo] = fetchUser();
      console.log(userInfo);
      setUser(userInfo);
      setIsLoggedIn(true);
    })();
  }, []);

  const initialValues = {
    tour_guide: '1',
    start_date: '2023-03-04',
    end_date: '2023-03-05',
    price: '200000',
    is_offline: 'True',
    status: 'BOOKED',
  };

  const successToast = Toast({
    preset: 'success',
    message: 'Berhasil registrasi!',
  });
  const errorConflictToast = Toast({
    preset: 'error',
    message: 'Gagal registrasi! Anda sudah pernah registrasi sebelumnya.',
  });
  const errorToast = Toast({ preset: 'error', message: 'Gagal registrasi!' });

  const showRegistrationResult = (responseStatusCode: number) => {
    if (responseStatusCode == 200) {
      return successToast();
    }
    if (responseStatusCode == 409) {
      return errorConflictToast();
    }
    return errorToast();
  };

  const handleSubmit = () => {
    axios
      .post('/api/donor-darah/register', { data: initialValues })
      .then((res) => {
        showRegistrationResult(res.status);
      })
      .catch((error) => {
        console.log(error);
        showRegistrationResult(error.response.status);
      });
  };

  if (!isLoggedIn) return <div>Not Logged In</div>;
  return (
    <>
      <Navbar />
      <Breadcrumb path={['Tour Guide', 'Feri Sulu', 'Booking']} />
      <div className="">
        <div className="mb-4"></div>
        <form>
          <div className="bg-red-400 py-8">
            <div className="text-center pb-4 text-2xl font-bold text-white">
              Tour Guide Booking
            </div>
            <div className="bg-white mx-8 p-8 rounded-xl">
              <div className="flex flex-col">
                <InputField
                  label="Tour Guide"
                  name="tour_guide"
                  leftIcon={<GoPerson />}
                  value="Feri Sulu"
                  isDisabled={true}
                />
                <InputField
                  label="Start Date"
                  type="date"
                  name="start_date"
                  leftIcon={<FaCalendarAlt />}
                  placeholder="Search for your desired date"
                />
                <InputField
                  label="End Date"
                  type="date"
                  name="end_date"
                  leftIcon={<FaCalendarAlt />}
                  placeholder="Search for your desired date"
                />
                <InputField
                  label="Price"
                  name="price"
                  leftIcon={<FaCalendarAlt />}
                  value="Rp. 200.000"
                  isDisabled={true}
                />
                <div className="flex px-2 py-6 gap-2">
                  <input type="checkbox"></input>
                  <label>Offline Tour</label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 pt-20">
            <Link href="/user/tour-guide">
              <Button preset="tertiary" className="text-red-400">
                Cancel
              </Button>
            </Link>
            <Link href={`/travel/bookings/${user?.uid}`}>
              <Button
                preset="primary"
                className="text-white border-red-4  00 border-2"
                type="submit"
              >
                Next
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <div className="h-20"></div>
      <Footer />
    </>
  );
};

export default BookingSection;
