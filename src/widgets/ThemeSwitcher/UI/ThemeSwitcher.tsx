import React from 'react';
import {useTheme} from "../model/useTheme";
import Button from "../../../shared/UI/Button/Button";


const ThemeSwitcher = () => {


    const {toggleTheme} = useTheme()

    return (
        <Button
            onClick={toggleTheme}
        >
            Сменить тему
        </Button>
    );
};

export default React.memo(ThemeSwitcher);