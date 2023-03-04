import { Button, InputFieldFormik, Toast } from '@ui';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';

const COUNTRY_CODE = '+62';

const BookingSection: NextPage = () => {
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
  return (
    <div className="bg-denim-dark ">
      <div className="mb-4"></div>
      <div className="">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(props) => (
            <Form className="flex flex-col gap-2 max-w-sm mx-auto">
              <InputFieldFormik
                name="name"
                type="text"
                label="Nama Lengkap"
                placeholder="Nama Lengkap"
                dark
                required
              />
              <InputFieldFormik
                name="age"
                type="number"
                label="Usia"
                placeholder="Masukkan angka"
                dark
                required
              />
              <InputFieldFormik
                name="address"
                type="text"
                label="Alamat"
                placeholder=""
                dark
                required
              />
              <InputFieldFormik
                name="institute"
                type="text"
                label="Asal Instansi"
                dark
              />
              <InputFieldFormik
                name="email"
                type="email"
                label="Email"
                placeholder="JohnDoe@gmail.com"
                dark
                required
              />
              <InputFieldFormik
                name="phone"
                type="tel"
                label="Nomor Telepon/WhatsApp*"
                placeholder={COUNTRY_CODE}
                dark
                required
              />
              <InputFieldFormik
                name="line"
                type="text"
                label="Id Line"
                dark
                required
              />
              <InputFieldFormik
                name="donationDate"
                type="date"
                label="Tanggal Donor Darah"
                required
                dark
              />
              <Button
                preset="primary"
                className="mt-4  self-center"
                type="submit"
                disabled={props.isSubmitting}
              >
                Daftar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingSection;
