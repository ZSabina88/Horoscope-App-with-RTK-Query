import React from "react";
import classes from "../styles/SignItem.module.scss";

type SignItem = {
    children: React.ReactNode,
    hasLoading?: boolean,
    hasError?: boolean
}

const SignItem: React.FC<SignItem> = ({ children, hasLoading, hasError }) => {
    return (
        <div className={classes.itemText}>
            {hasLoading && <h2 className={classes.loading}>Loading...</h2>}
            {hasError && <h2 className={classes.error}>Something went wrong!</h2>}
            {children}
        </div>
    );
}

export default SignItem;

