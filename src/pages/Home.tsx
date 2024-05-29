import CircularMenu from '../components/CircularMenu';
import Buttons from '../components/Buttons';
import { useToggle } from '../hooks/useToggle';

const Home: React.FC = () => {
    const [showCard, setShowCard] = useToggle(false);

    return (
        <main>
            <CircularMenu onClick={setShowCard} />
            {showCard && <Buttons isOpen={showCard} onClose={setShowCard} />}
        </main>
    );
}

export default Home;