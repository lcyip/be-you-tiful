import '../../scss/Screens/LoginScreen.scss';
import TopHeader from './TopHeader';
import facebookLogo from '../../imageSources/facebookLogo.png';
import googleLogo from '../../imageSources/googleLogo.png';
import appleLogo from '../../imageSources/appleLogo.png';
import { emailSelector, passwordSelector, screensSelector } from '../../redux/selectors/screensSelectors';
import { updateEmail, updatePassword, updateScreen } from '../../redux/actions/screensActions';
import { connect } from 'react-redux';
import { LOGIN_SCREEN, SIGNUP_SCREEN, HOME_SCREEN } from '../../redux/constants/screensConstants';

const LoginScreen = ({
    email,
    password,
    updateEmail,
    updatePassword,
    updateScreen
}) => {

    return (
        <div className='login-screen-container'>
            <TopHeader/>
            <div className='log-in-header'>
                Log In
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
            <button className='log-in-button'
                onClick={() => updateScreen(HOME_SCREEN)}
            >
                Log In
            </button>
            <div className='sign-up-question'>
                <div>
                    Don't have an account?
                </div>
                <button className='sign-up-text'
                    onClick={() => updateScreen (SIGNUP_SCREEN)}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export const ContinueWithButton = ({
    logo,
    text,
    font,
    backgroundColor,
    color,
}) => {
    return (
        <button className='continue-with-button-container'
            style={{
                backgroundColor,
                color,
            }}
        >
            <img className='continue-with-button-logo' src={logo}/>
            <div>
                {text}
            </div>
        </button>
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
    updateEmail,
    updatePassword,
    updateScreen
};

export default connect(mapStateToProps, mapDispatches)(LoginScreen);