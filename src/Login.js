import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

export default function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in using Firebase
        auth.signInWithPopup(provider)
            .then(result => {
                //dispatch => pass the user and pushes it inside the data layer
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result)
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className='login_logo'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5pZUi39sa9MDvoqYQqWiyOnL3dl5HnWHSA&usqp=CAU" alt="Facebook image logo" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKYmBc3E7ztL3FwPPn8kC1JDw0kMjGyPoJA&usqp=CAU" alt="Facebook logo text" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}