import React from 'react';
import "./SignUp.css";

const SignUp = () => {
    return (
        <section>
            sign up

            <form action="">

                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="" />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="" />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="" />

                <input type="checkbox" name="checkbox" id="" />
                <input type="submit" value="" />
            </form>
        </section>
    );
};

export default SignUp;