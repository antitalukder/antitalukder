import {initializeApp} from 'firebase/app';
import {getAuth , signInWithRedirect , signInWithPopup , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore , doc , getDoc , setDoc}  from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcvVs1crY64RBsSxPa0yQppd4TfXJFlEU",
    authDomain: "crwn-clothing-db-10fb9.firebaseapp.com",
    projectId: "crwn-clothing-db-10fb9",
    storageBucket: "crwn-clothing-db-10fb9.appspot.com",
    messagingSenderId: "1015092609229",
    appId: "1:1015092609229:web:fd20737c5502ece2292984"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt : "select_account"
  })

  export const auth = getAuth();
  export const signInwithGooglePopup = () => signInWithPopup(auth , googleProvider);
  export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth , googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
     const userDocRef = doc (db , 'users' , userAuth.uid);
     console.log(userDocRef);


     const userSnapshot = await getDoc(userDocRef);


     if(!userSnapshot.exists()){
        const { displayName , email} = userAuth ;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
               displayName , email , createdAt 
            });
        }catch(error){
            console.log('error creating the error' , error.message);
        }
     }
     // if user data does not exits 


    return userDocRef;

  }