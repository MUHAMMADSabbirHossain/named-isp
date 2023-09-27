import React from 'react';
import "./NavigationBar.css";
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const NavigationBar = () => {

    const [signOut, loading, error] = useSignOut(auth);

    return (
        <nav>
            navigation bar
            <button onClick={() => signOut()}>sign out</button>
            <Link to="/signin">sign in</Link>
        </nav>
    );
};

export default NavigationBar;