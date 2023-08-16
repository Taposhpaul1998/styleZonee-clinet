import React from 'react';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../../../firebase/firebase.init';
import { useDispatch } from 'react-redux';
import { useCreateUserMutation } from '../../../../features/userApi/UserApi';

const SocileLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const dispatch = useDispatch()
    const [createUser] = useCreateUserMutation()

    const handleGoogleSingin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const data = {
                    name: user.displayName,
                    email: user.email,
                    imageUrl: user.photoURL,
                    uid: user.uid
                }
                if (user) {
                    dispatch(createUser(data))
                }
            }).catch((error) => {

            });
    }

    const handleFacebookLogin = () => {

        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className='p-6 mt-1'>
            <button
                onClick={handleGoogleSingin}
                className="bg-white hover:bg-gray-900 hover:text-white transition text-center text-gray-900 border border-gray-500 text-base font-poppins font-medium py-1 w-full rounded mb-4">
                <FontAwesomeIcon className='mr-2' icon={faGoogle} />
                Gmail</button>
            <button
                onClick={handleFacebookLogin}
                className="bg-white hover:bg-gray-900 hover:text-white transition text-center text-gray-900 border border-gray-500 text-base font-poppins font-medium py-1 w-full rounded">
                <FontAwesomeIcon className='mr-2' icon={faFacebookSquare} />
                Facebook</button>
        </div>
    );
};

export default SocileLogIn;