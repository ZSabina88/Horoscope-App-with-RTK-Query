import { useParams } from "react-router-dom";
import { useGetEachSignQuery } from "../features/signApiSlice";
import SignItem from "./SignItem";
import CardModal from "./CardModal";

type PropCard = {
    onClose?: () => void,
    isOpen?: boolean
}

const SignDailyCard: React.FC<PropCard> = ({ onClose, isOpen }) => {
    const params = useParams();


    let sign = params.sign;
    if (sign === undefined) {
        sign = "aries"
    };


    const { data, isLoading, isError } = useGetEachSignQuery(sign);

    const copyrightIndex = data && data.horoscope.indexOf('(c)');
    const splittedText = data && data.horoscope.slice(0, copyrightIndex);


    return (
        <CardModal dailysignCard isOpen={isOpen} onClose={onClose}>
            <SignItem hasLoading={isLoading} hasError={isError}>
                {data &&
                    <>
                        <strong><h2>{data.sunsign}</h2></strong>
                        <p>&emsp;{splittedText}</p>
                        <div>
                            <p>Keywords:&emsp;{data.meta.keywords}</p>
                            <p>Mood:&emsp;{data.meta.mood}</p>
                            <p>Intensity:&emsp;{data.meta.intensity}</p>
                        </div>
                    </>
                }
            </SignItem>
        </CardModal>
    );
}

export default SignDailyCard;
