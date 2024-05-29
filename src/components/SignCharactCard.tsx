import SignItem from "./SignItem";
import CardModal from "./CardModal";

import { useParams } from "react-router-dom";

type PropCard = {
    onClose?: () => void,
    isOpen?: boolean
}


const SignCharactCard: React.FC<PropCard> = ({ onClose, isOpen }) => {
    const params = useParams();


    let sign = params.sign;
    if (sign === undefined) {
        sign = "aries"
    };
  return (
    <div>
      
    </div>
  );
}

export default SignCharactCard;
