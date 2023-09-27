import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    if (!user) {
        navigate("/signin");
    }
    return children;
};

export default RequireAuth;