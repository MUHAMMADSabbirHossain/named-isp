import React from 'react';
import "./NavigationBar.css";
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const NavigationBar = () => {


    const [user, loading, error] = useAuthState(auth);
    const [signOut, singOutLoading, singOutError] = useSignOut(auth);

    return (
        <nav>
            navigation bar

            {
                user ? <button onClick={() => signOut()}>sign out</button> : <Link to="/signin">sign in</Link>
            }

        </nav>
    );
};

export default NavigationBar;