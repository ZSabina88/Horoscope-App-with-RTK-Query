import CardModal from './CardModal';
import SignDailyCard from './SignDailyCard';
import { useToggle } from '../hooks/useToggle';

interface PropButton {
  onClose?: () => void,
  isOpen?: boolean
}


const Buttons: React.FC<PropButton> = ({ onClose, isOpen }) => {
  const [showCharacteristics, setShowCharacteristics] = useToggle(false);
  const [showDailySign, setShowDailySign] = useToggle(false);

  return (
    <>
      <CardModal isOpen={isOpen} onClose={onClose} buttonCard>
        <button>Characteristics</button>
        <button onClick={setShowDailySign}>Daily Horoscope</button>
      </CardModal>
      {
        showDailySign &&
        <SignDailyCard isOpen={showDailySign} onClose={setShowDailySign} />
      }
    </>
  );
}

export default Buttons;