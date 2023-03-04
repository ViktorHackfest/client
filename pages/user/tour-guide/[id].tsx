import { SingleTourGuide } from '@components/modules/user';
import { TourGuide } from '@models/TourGuide';
import { Breadcrumb, Footer, LoadingScreen, Navbar } from '@ui';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TourGuideById = (tour_guide: any) => {
  const router = useRouter();
  const { id } = router.query;

  const [tourGuide, setTourGuide] = useState<TourGuide>();
  const [name, setName] = useState<string>('');
  const [tourGuideLoading, setTourGuideLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/user/tour-guide/${id}`).then((response) => {
      setTourGuide(response.data);
      setTourGuideLoading(false);
      setName(response.data.name);
      if (response.data.length === 0) setIsEmpty(true);
    });
  }, [id]);

  if (tourGuideLoading) {
    return <LoadingScreen />;
  } else {
    if (isEmpty) return <div>There are no tourGuides</div>;
    return (
      <>
        <Navbar />
        <Breadcrumb path={['Tour Guide', name]} />
        <SingleTourGuide tour_guide={tourGuide} />
        <Footer />
      </>
    );
  }
};

export default TourGuideById;
