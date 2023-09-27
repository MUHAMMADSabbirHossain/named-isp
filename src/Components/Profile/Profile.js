import React from 'react';
import "./Profile.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            profile
            {
                user && <h2>{user.email}</h2>

            }
        </div>
    );
};

export default Profile;