import React from 'react';
import "./SocialInUp.css";
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../SignIn/Loading';

const SocialInUp = () => {

    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithGoogle, gooleUser, gooleLoading, gooleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (facebookLoading || githubLoading || gooleLoading) {
        <Loading></Loading>
    }

    if (facebookUser || githubUser || gooleUser) {
        navigate("/");
    }

    return (
        <div className=''>

            social in up
            <div className=''>
                <hr />or <hr />
            </div>
            <h2>Connect with Social Networks</h2>

            {/* error message section */}
            {
                (facebookError || githubError || gooleError) &&
                <p className=" text-red mt-10 text-center text-sm text-gray-500">
                    {facebookError?.message} {githubError?.message}{gooleError?.message} { }{ } { }{ }
                </p>
            }

            <input className=" flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2 mx-auto" type="button" value="Apple" />

            <input className=" flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2 mx-auto" type="button" value="Facebook" onClick={() => signInWithFacebook()} />

            <input className=" flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2 mx-auto" type="button" value="Github" onClick={() => signInWithGithub()} />

            <input className=" flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2 mx-auto" type="button" value="Google" onClick={() => signInWithGoogle()} />

            <input className=" flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2 mx-auto" type="button" value="Microsoft" />

            <input className=" flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2 mx-auto" type="button" value="Twitter" />

            <input className=" flex w-20 justify-center rounded-md bg-indigo-600 px-3201.5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2 mx-auto" type="button" value="Yahoo" />
        </div>
    );
};

export default SocialInUp;