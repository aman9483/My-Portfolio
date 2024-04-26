
import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      onClick={goBack}
      className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Back
    </button>
  );
};

export default BackButton;
