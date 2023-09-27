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

                user && <div>
                    <h2 className="font-semibold">{user?.displayName}</h2>
                    <h6>User Email: {user.email}</h6>
                </div>

            }
        </div>
    );
};

export default Profile;