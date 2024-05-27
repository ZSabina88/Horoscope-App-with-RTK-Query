import { useParams } from "react-router-dom";
import { useGetEachSignQuery } from "../features/signApiSlice";
import SignItem from "./SignItem";
import classes from "../styles/SignCard.module.scss";
import { GoNorthStar } from "react-icons/go";

type Prop = {
    onClose: () => void,
}

const SignCard: React.FC<Prop> = ({ onClose }) => {
    const params = useParams();


    let sign = params.sign;
    if (sign === undefined) {
        sign = "aries"
    };


    const { data, isLoading, isError } = useGetEachSignQuery(sign);

    const copyrightIndex = data && data.horoscope.indexOf('(c)');
    const splittedText = data && data.horoscope.slice(0, copyrightIndex);


    return (
        <section className={classes.card}>
            <SignItem>
                <p className={classes.icon} onClick={onClose}><GoNorthStar size={28} /></p>
                {isLoading && <h2 className={classes.loading}>Loading...</h2>}
                {isError && <h2 className={classes.error}>Something went wrong!</h2>}
                {data &&
                    <>
                        <h2>{data.sunsign}</h2>
                        <p>&emsp;{splittedText}</p>
                        <div>
                            <p>Keywords:&emsp;{data.meta.keywords}</p>
                            <p>Mood:&emsp;{data.meta.mood}</p>
                            <p>Intensity:&emsp;{data.meta.intensity}</p>
                        </div>
                    </>
                }


            </SignItem>
        </section>
    );
}

export default SignCard;
