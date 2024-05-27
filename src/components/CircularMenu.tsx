import classes from "../styles/CircularMenu.module.scss";
import { signs } from "../helper/signs";
import { Link } from 'react-router-dom';

type Prop = {
    onClick: () => void,
}

const CircularMenu: React.FC<Prop> = ({ onClick }) => {
    const radius = 250;
    const totalElements = signs.length;
    const angleStep = (2 * Math.PI) / totalElements;

    return (
        <div className={classes.circleContainer}>
            {signs.map((element, index) => {
                const angle = index * angleStep;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const style: any = {
                    position: 'absolute',
                    transform: `translate(${x}px, ${y}px)`
                };

                return (
                    <ul className={classes.circleElement} style={style} >
                        <li key={element.name} onClick={onClick}>
                            <Link to={`/sunsigns/${element.name}`}>
                                <img src={element.img} alt="zodiac signs" />
                            </Link>
                        </li>
                    </ul>

                );
            })}
        </div>
    );
}

export default CircularMenu;
