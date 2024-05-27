import React from "react";
import classes from "../styles/SignItem.module.scss";

type SignItem = {
    children: React.ReactNode
}

const SignItem: React.FC<SignItem> = ({ children }) => {
    return (
        <article className={classes.item}>
            <div className={classes.itemText}>
                {children}
            </div>
        </article>
    );
}

export default SignItem;

