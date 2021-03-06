import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup, createUserFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserFromAuth(user);
    }

    return(
        <div>
            <h1>
            This is the sign in page
            </h1>
            <button onClick={logGoogleUser}>Log in with Google</button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;