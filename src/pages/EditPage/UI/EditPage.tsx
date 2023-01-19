import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './EditPage.module.scss'

interface EditPageProps {
    className?: string
}

const EditPage = (props: EditPageProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.EditPage, {}, [className])}>
           EDIT PAGE
        </div>
    );
};

export default React.memo(EditPage);