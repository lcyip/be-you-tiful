import { connect } from 'react-redux';
import './App.scss';
import Phone from './Phone/index';

import {
  WELCOME_SCREEN,
  LOGIN_SCREEN,
  SIGNUP_SCREEN,
  HOME_SCREEN,
  RETAILER_DETAILS_SCREEN,
  PRODUCT_DETAILS_SCREEN,
  CART_SCREEN,
} from './redux/constants/screensConstants';

import WelcomeScreen from './components/Screens/WelcomeScreen';
import LoginScreen from './components/Screens/LoginScreen';
import SignUpScreen from './components/Screens/SignUpScreen';
import HomeScreen from './components/Screens/HomeScreen';
import RetailerDetailsScreen from './components/Screens/RetailerDetailsScreen';
import ProductDetailsScreen from './components/Screens/ProductDetailsScreen';

const App = ({
  currentScreen,
}) => {
  
  const screens = {
    [WELCOME_SCREEN]: <WelcomeScreen/>,
    [LOGIN_SCREEN]: <LoginScreen/>,
    [SIGNUP_SCREEN]: <SignUpScreen/>,
    [HOME_SCREEN]: <HomeScreen/>,
    [RETAILER_DETAILS_SCREEN]: <RetailerDetailsScreen/>,
    [PRODUCT_DETAILS_SCREEN]: <ProductDetailsScreen/>,
  };

  // 1) our initial state for currentScreen is WELCOME_SCREEN
  // 2) in our app, we get the state of currentScreen which is WELCOME_SCREEN
  // 3) and we pass it into our Phone component to be displayed
  // 4) 

  return (
    <div className='App'>
      <Phone screen={screens[currentScreen]}/>
    </div>
  );
}

const mapStateToProps = (state) => state.screensReducer;

const mapDispatchesToProps = {
};

export default connect(mapStateToProps, mapDispatchesToProps)(App);
