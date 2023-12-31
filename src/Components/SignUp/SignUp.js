import React, { useState } from 'react';
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth'; import auth from "../../firebase.init";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../SignIn/Loading';
import { useRef } from 'react';
import SocialInUp from '../SocialInUp/SocialInUp';

const SignUp = () => {

    const emailRef = useRef();
    const [agreed, setAgreed] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [sendPasswordResetEmail, sending, resetEerror] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();

    if (loading || updating || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate("/");
    }

    const handleFormSignUp = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };


    return (
        <section>
            sign up

            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleFormSignUp} className="space-y-6" action="#" method="POST">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                    placeholder=" Enter your name"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                    placeholder=" Enter your Email"
                                    ref={emailRef}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a onClick={() => sendPasswordResetEmail(emailRef.current.value)} href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                    placeholder=" password"
                                />
                            </div>
                        </div>

                        <div>
                            <input onClick={() => (setAgreed(!agreed))} type="checkbox" name="terms-conditions" id="terms-conditions" />
                            <label
                                className={`text-sm font-medium leading-6 ${agreed ? "text-green-600" : "text-red-600"}`}
                                htmlFor="terms-conditions"> Accept named-isp All Terms and Condition.
                            </label>

                        </div>

                        {/* error message section */}
                        {
                            (createError || profileError || resetEerror) && <p className=" text-red mt-10 text-center text-sm text-gray-500">{createError?.message}{profileError?.message}{resetEerror.message}</p>
                        }

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled={!agreed}
                            >
                                Sign up
                            </button>

                        </div>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                <Link to="/signin">Login in Now</Link>
                            </a>
                        </p>

                        <SocialInUp></SocialInUp>

                    </form>

                </div>
            </div>
        </section>
    );
};

export default SignUp;