import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const GoogleSign = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => { })
            .then(error => console.error(error))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn'>Google Sign in</button>
        </div>
    );
};

export default GoogleSign;