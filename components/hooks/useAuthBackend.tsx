import { Traveler } from '@models/Traveler';
import { Toast } from '@ui';
import { fetchUser, userAccessToken } from '@utils/fetchGoogleAuth';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// POST & CHECKING FIRST
// IF EXIST THEN GET DATA

export const useAuthBackend = () => {
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

  useEffect(() => {
    (async () => {
      // Handler to call on window resize
      const accessToken = userAccessToken();
      if (!accessToken) return router.push('/auth/login');
      const [userInfo] = fetchUser();
      console.log(userInfo);

      const handleSubmit = (values: Traveler) => {
        axios
          .post('/api/user/register', { data: values })
          .then((res) => {
            showRegistrationResult(res.status);
          })
          .catch((error) => {
            console.log(error);
            showRegistrationResult(error.response.status);
          });
      };
      // Call handler right away so state gets updated
      handleSubmit({ id: '1', money: 1000000 });
    })();
  }, []); // Empty array ensures that effect is only run on mount
  return travelerData;
};
