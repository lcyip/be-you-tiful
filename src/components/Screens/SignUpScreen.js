import '../../scss/Screens/SignUpScreen.scss'
import {ContinueWithButton} from './LoginScreen';
import TopHeader from './TopHeader'; 
import facebookLogo from '../../imageSources/facebookLogo.png';
import googleLogo from '../../imageSources/googleLogo.png';
import appleLogo from '../../imageSources/appleLogo.png';
import { emailSelector, passwordSelector, screensSelector } from '../../redux/selectors/screensSelectors';
import { updateEmail, updatePassword, updateScreen, updateFullName, updateReenterPassword } from '../../redux/actions/screensActions';
import { connect } from 'react-redux';
import { HOME_SCREEN, LOGIN_SCREEN } from '../../redux/constants/screensConstants';


const SignUpScreen = ({
    fullName,
    email,
    password,
    reenterPassword,
    updateFullName,
    updateEmail,
    updatePassword,
    updateReenterPassword,
    updateScreen
}) => {
    return (
        <div className='sign-up-container'> 
            <TopHeader/>
            <div className='sign-up-header'>
                Create an Account  
            </div>
            <ContinueWithButton
                logo={facebookLogo}
                text='Continue with Facebook'
                backgroundColor='#1877F2'
                color='white'
            />
            <ContinueWithButton
                logo={googleLogo}
                text='Continue with Google'
                backgroundColor='white'
                color='gray'
            />
            <ContinueWithButton
                logo={appleLogo}
                text='Continue with Apple'
                backgroundColor='black'
                color='white'
            />
            <div className='or-divider'>
                -OR-
            </div>
            <UserInput text='Full Name' 
                value={fullName}
                action={(ref) => updateFullName(ref.target.value)}
                type='text'
            />
            <UserInput text='Email' 
                value={email}
                action={(ref) => updateEmail(ref.target.value)}
                type='text'
            />
            <UserInput text='Password' 
                value={password}
                action={ref => updatePassword(ref.target.value)}
                type='password'
            />
            <UserInput text='Re-enter Password' 
                value={reenterPassword}
                action={ref => updateReenterPassword(ref.target.value)}
                type='password'
            />
             <button className='sign-up-button'
                onClick={() => updateScreen (HOME_SCREEN)}
            >
                Sign Up
            </button>
            <div className='log-in-question'>
                <div>
                    Already have an account?
                </div>
                <button className='log-in-text'
                    onClick={() => updateScreen (LOGIN_SCREEN)}
                >
                    Log In 
                </button>
            </div>
        </div>
    );
};

const UserInput = ({
    text,
    value,
    action,
    type,
}) => {
    return (
        <input className='user-input'
            type={type}
            placeholder={text}
            value={value}
            onChange={action}
        />
    );
};

const mapStateToProps = (state) => ({
    email: emailSelector(state),
    password: passwordSelector(state)
});

const mapDispatches = {
    updateFullName,
    updateEmail,
    updatePassword,
    updateReenterPassword,
    updateScreen
};

export default connect(mapStateToProps, mapDispatches)(SignUpScreen);