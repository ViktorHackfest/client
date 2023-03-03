import { Traveler } from '@models/Traveler';
import { Toast } from '@ui';
import { fetchUser, userAccessToken } from '@utils/fetchGoogleAuth';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// POST & CHECKING FIRST
// IF EXIST THEN GET DATA

export const useAuthBackend = () => {
  const [allTraveler, setAllTraveler] = useState<Traveler[]>([]);
  // const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();
  // Sementara ini ke Traveler dulu nanti dihandle ke User yang punya
  // attribute role traveler dan tour guide
  const [travelerData, setTravelerData] = useState<Traveler>({
    id: '',
    money: 1000000,
  });

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

  // SUCCESS BUT DOUBLING
  useEffect(() => {
    (async () => {
      // Handler to call on window resize
      const accessToken = userAccessToken();
      if (!accessToken) return router.push('/auth/login');
      const [userInfo] = fetchUser(); // Fetch from Google Firebase
      console.log(userInfo);
      // Compose to object Traveler
      const traveler = {
        id: userInfo.uid,
        money: 1000000,
      };
      setTravelerData(traveler);

      // POST USER TO BACKEND
      const handleSubmit = (values: Traveler) => {
        axios
          .post(
            '/api/user/register',
            { data: values },
            { params: { type_user: 'traveler' } }
          )
          .then((res) => {
            showRegistrationResult(res.status);
          })
          .catch((error) => {
            console.log(error);
            showRegistrationResult(error.response.status);
          });
      };

      // GET USER FROM BACKEND
      axios.get('/api/user/traveler').then((response) => {
        setAllTraveler(response.data);
        // Jika sudah ada di database maka langsung ambil data
        let isRegistered = false;
        for (let t of response.data) {
          if (t.id == userInfo.uid) {
            console.log("Traveler already registered! Let's get data!");
            isRegistered = true;
          }
        }
        // Jika belum ada di database maka tambahkan ke database (POST)
        if (!isRegistered) {
          handleSubmit(traveler);
        }
      });
    })();
  }, []);
  return travelerData;
};
