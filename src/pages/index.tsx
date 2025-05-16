import { useDispatch, useSelector } from 'react-redux';
import { generateGuid, clearHistory } from '@/store/guidSlice';
import CurrentGuid from '@/components/CurrentGuid';
import History from '@/components/History';
import PillComponent from '@/components/PillComponent';
import { RootState } from '@/store';
import Button from '@/components/Button';
import { LogoIcon } from '@/components/Icons/Logo';
import { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';

const Home = () => {
  const dispatch = useDispatch();
  const currentGuid = useSelector((state: RootState) => state.guid.currentGuid);
  const history = useSelector((state: RootState) => state.guid.history);

  // Generate a GUID on page load
  useEffect(() => {
    if (!currentGuid) {
      dispatch(generateGuid());
    }
  }, [dispatch, currentGuid]);

  return (
    <>
    <SEOHead
        title="Free GUID Generator Online – Create Unique GUIDs Instantly | EasyGUID"
        ogTitle="Free GUID Generator Online – Create Unique GUIDs Instantly | EasyGUID"
        description="Generate globally unique identifiers (GUIDs) instantly with EasyGUID. A fast, free, and secure online GUID generator with copy and history features. No sign-up needed."
        ogDescription="Generate globally unique identifiers (GUIDs) instantly with EasyGUID. A fast, free, and secure online GUID generator with copy and history features. No sign-up needed."
        ogImage="https://res.cloudinary.com/dqqarxqbu/image/upload/v1746107614/Screenshot_2025-05-01_at_14.53.10_fvlixj.png"
        twitterCard="summary_large_image"
        url="https://www.easyguid.co.uk/"
      />
    <section className="p-4 max-w-xl mx-auto space-y-6">
      <h1 className="text-white text-3xl sm:text-4xl font-bold">Easy GUID Generator</h1>
      <Button
        onClick={() => dispatch(generateGuid())}
        className="text-white cursor-pointer bg-[#00DC82] hover:bg-white hover:text-[#0D162B] px-4 py-2 rounded-full transition-colors flex items-center justify-center"
      >
        Generate GUID
      </Button>

      <CurrentGuid guid={currentGuid} />
      <History history={history} clearHistory={() => dispatch(clearHistory())} />

      <PillComponent to="https://ovalcreative.co.uk" className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6">
        Powered by: <LogoIcon className="w-16 sm:w-24 ml-2"/>
      </PillComponent>
    </section>
  </>
  );
};

export default Home;