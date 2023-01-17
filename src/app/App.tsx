import React from 'react';
import './styles/index.scss'
import {classNames} from "../shared/helpers/classNames/classNames";

const App = () => {



    return (
        <div className={classNames('app', {}, [])}>

        </div>
    );
}

export default React.memo(App);
