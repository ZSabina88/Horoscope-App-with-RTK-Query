import { useState } from "react";

export const useToggle = (initialState: boolean): [boolean, () => void] => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
}