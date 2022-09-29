
import {auth , signInwithGooglePopup ,signInWithGoogleRedirect, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth';
import { async } from '@firebase/util';
const SignIn = () => {


    const logGoogleUser = async () => {
        const {user} = await signInwithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log(user);
       
    }

  
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}
export default SignIn;