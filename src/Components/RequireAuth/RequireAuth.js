import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../SignIn/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
        <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: loading }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;