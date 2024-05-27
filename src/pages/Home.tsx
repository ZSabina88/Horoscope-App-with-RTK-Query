import { useState } from 'react';
import CircularMenu from '../components/CircularMenu';
import SignCard from '../components/SignCard';

const Home: React.FC = () => {
    const [showCard, setShowCard] = useState<boolean>(false);

    function handleClick() {
        setShowCard(true);
    };

    function handleClose() {
        setShowCard(false);
    };

    return (
        <main>
            <CircularMenu onClick={handleClick} />
            {showCard && <SignCard onClose={handleClose} />}
        </main>
    );
}

export default Home;