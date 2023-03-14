import { LOGIN_SCREEN } from "../constants/screensConstants";
import { SIGNUP_SCREEN } from "../constants/screensConstants";
import { HOME_SCREEN } from "../constants/screensConstants";
import { RETAILER_DETAILS_SCREEN } from "../constants/screensConstants";
import { CART_SCREEN } from "../constants/screensConstants";

export const screensSelector = state => state.screensReducer;

export const loginScreenSelector = state => screensSelector(state)[LOGIN_SCREEN];
export const signUpScreenSelector = state => screensSelector(state)[SIGNUP_SCREEN];
export const homeScreenSelector = state => screensSelector(state)[HOME_SCREEN];
export const retailerDetailsScreenSelector = state => screensSelector(state)[RETAILER_DETAILS_SCREEN];

export const emailSelector = state => loginScreenSelector(state).email;
export const passwordSelector = state => loginScreenSelector(state).password;

export const fullNameSelector = state => signUpScreenSelector(state).fullName;
export const signUpEmailSelector = state => signUpScreenSelector(state).signUpEmail;
export const signUpPasswordSelector = state => signUpScreenSelector(state).signUpPassword;
export const reenterPasswordSelector = state => signUpScreenSelector(state).reenterPassword;

export const searchSelector = state => homeScreenSelector(state).search;
export const tabSelector = state => homeScreenSelector(state).tab;

export const productDetailSelector = state => retailerDetailsScreenSelector(state).productDetail;
