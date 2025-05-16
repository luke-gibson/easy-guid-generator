import { useDispatch, useSelector } from 'react-redux';
import { generateGuid, clearHistory } from '@/store/guidSlice';
import CurrentGuid from '@/components/CurrentGuid';
import History from '@/components/History';
import PillComponent from '@/components/PillComponent';
import { RootState } from '@/store';
import Button from '@/components/Button';

const Home = () => {
  const dispatch = useDispatch();
  const currentGuid = useSelector((state: RootState) => state.guid.currentGuid);
  const history = useSelector((state: RootState) => state.guid.history);

  return (
    <section className="p-4 max-w-xl mx-auto space-y-6">
      <h1 className="text-white text-3xl sm:text-4xl font-bold">Easy GUID Generator</h1>
      <Button
        onClick={() => dispatch(generateGuid())}
        className="text-white bg-[#00DC82] hover:bg-white hover:text-[#0D162B] px-4 py-2 rounded-full transition-colors flex items-center justify-center"
      >
        Generate GUID
      </Button>

      <CurrentGuid guid={currentGuid} />
      <History history={history} clearHistory={() => dispatch(clearHistory())} />

      <PillComponent to="https://ovalcreative.co.uk" className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6">
        Powered by: Oval Creative
      </PillComponent>
    </section>
  );
};

export default Home;