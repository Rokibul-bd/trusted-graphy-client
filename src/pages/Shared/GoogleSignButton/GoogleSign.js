import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const GoogleSign = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn'>Google Sign in</button>
        </div>
    );
};

export default GoogleSign;