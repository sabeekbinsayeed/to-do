import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const handleGoogle = () => {
        signInWithGoogle();
        console.log('done google')

    }

    if (user) {
        navigate('/todo')
    }


    return (
        <div>

            <div className='  '>


                <h1 style={{ textColor: 'red' }}>Without Signing you cannot use our website</h1>
                <h3>Please Sign in</h3>
                <button onClick={handleGoogle} className='btn btn-info w-50  d-block mx-auto my-2'>

                    <span style={{ color: 'black', marginLeft: '10px' }}>google sign in</span>
                </button>

            </div>

        </div >
    );
};

export default Social;