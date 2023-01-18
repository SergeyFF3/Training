import React, {useCallback} from 'react';
import {LoginForm} from "../../../../entities/LoginForm";
import {useAppDispatch} from "../../../../app/provider/StoreProvider/store";
import {useSelector} from "react-redux";
import {getLoginEmail, getLoginError, getLoginIsLoading, getLoginPassword} from "../../model/selectors/getLoginData";
import { loginActions } from 'features/AuthByEmail/model/slices/loginSlice';
import {loginByEmail} from "../../model/services/loginByEmail";
import {useNavigate} from "react-router-dom";



const AuthByEmail = () => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const email = useSelector(getLoginEmail)

    const password = useSelector(getLoginPassword)

    const isLoading = useSelector(getLoginIsLoading)

    const error = useSelector(getLoginError)

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLogin = useCallback(async () => {
        const result = await dispatch(loginByEmail({email, password}))

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/profile')
        }
        dispatch(loginActions.setPassword(''))

    }, [dispatch, email, password, navigate])

    const onRegistration = useCallback(() => {
        navigate('/register')
    }, [navigate])

    return (
        <div >
           <LoginForm
                email={email}
                password={password}
                isLoading={isLoading}
                error={error}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onLogin={onLogin}
                onRegistration={onRegistration}
           />
        </div>
    );
};

export default React.memo(AuthByEmail);