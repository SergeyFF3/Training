import React, {useCallback} from 'react';
import {useSelector} from "react-redux";
import {getRegisterData} from "../model/selectors/getRegisterData";
import {getRegisterIsLoading} from "../model/selectors/getRegisterIsLoading";
import {getRegisterError} from "../model/selectors/getRegisterError";
import {useAppDispatch} from "../../../app/provider/StoreProvider/store";
import {registerActions} from '../model/slices/registerSlice';
import {registerUser} from "../model/services/registerUser";
import {RegisterForm} from "../../../entities/RegisterForm";
import {useNavigate} from 'react-router-dom';

const Registration = () => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const {email, password} = useSelector(getRegisterData)

    const isLoading = useSelector(getRegisterIsLoading)

    const error = useSelector(getRegisterError)

    const onChangeEmail = useCallback((value: string) => {
        dispatch(registerActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(registerActions.setPassword(value))
    }, [dispatch])

    const onRegistration = useCallback(async () => {
        let result = await dispatch(registerUser({email, password}))

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/')
        }
        dispatch(registerActions.setPassword(''))
        dispatch(registerActions.setEmail(''))

    }, [dispatch, email, password, navigate])

    return <RegisterForm
        email={email}
        password={password}
        isLoading={isLoading}
        error={error}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onRegistration={onRegistration}
    />

};

export default React.memo(Registration);