import { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateScreen } from '../../redux/actions/screensActions';
import { LOGIN_SCREEN } from '../../redux/constants/screensConstants';
import '../../scss/Screens/WelcomeScreen.scss';

const WelcomeScreen = ({
    updateScreen,
}) => {
    const SCREEN_TIMER = 3000;

    useEffect(() => {
        setTimeout(() => updateScreen(LOGIN_SCREEN),
            SCREEN_TIMER);
    }, []);

    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='app-logo'>
                    be-you-tiful
                </div>
                <div className='app-description'>
                    the all in one beauty app 
                </div>
            </div>
        </div>
    )
};

const mapDispatchesToProps = {
    updateScreen
};

export default connect(null, mapDispatchesToProps)(WelcomeScreen);