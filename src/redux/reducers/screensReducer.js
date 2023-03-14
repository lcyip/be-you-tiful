import {
    WELCOME_SCREEN,
    LOGIN_SCREEN,
    SIGNUP_SCREEN,
    HOME_SCREEN,
    RETAILER_DETAILS_SCREEN,
    UPDATE_SCREEN,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_SIGN_UP_EMAIL,
    UPDATE_FULL_NAME,
    UPDATE_SIGN_UP_PASSWORD,
    UPDATE_REENTER_PASSWORD,
    UPDATE_SEARCH,
    UPDATE_TAB,
    HOME_TAB,
    UPDATE_PRODUCT_DETAIL,
} from '../constants/screensConstants'

const initialState = {
    currentScreen: HOME_SCREEN,
    // activePod: "none",
    [LOGIN_SCREEN]: {
        email: '',
        password: '',
    },
    [SIGNUP_SCREEN]: {
        fullName: '',
        signUpEmail: '',
        signUpPassword: '',
        reenterPassword: '',
    },
    [HOME_SCREEN]: {
        search:'',
        tab: HOME_TAB,
    },
    [RETAILER_DETAILS_SCREEN]: {
        productDetail: {}
    }
};


// whatever {
//     onClick = someting
//     onSomething = something
//     onPress = something
// }

// ...whatever,
// onClick = something new overriding the previous value

// onClick = something
// onSometing = something
// onPress = something
// onClick = something new overriding the previous value


const reducer = (state = initialState, action) => {
    console.log(JSON.parse(JSON.stringify(state, null, 2)));
    switch (action.type) {
        case UPDATE_SCREEN:
            return {
                ...state,
                currentScreen: action.screen,
            };
        case UPDATE_EMAIL:
            return {
                ...state,
                [LOGIN_SCREEN]: {
                    ...state[LOGIN_SCREEN],
                    email: action.email,
                }
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                [LOGIN_SCREEN]: {
                    ...state[LOGIN_SCREEN],
                    password: action.password,
                }
            };
        case UPDATE_SIGN_UP_EMAIL:
            return {
                ...state,
                [SIGNUP_SCREEN]: {
                    ...state[SIGNUP_SCREEN],
                    signUpEmail: action.signUpEmail,
                }
            };
        case UPDATE_FULL_NAME:
            return {
                ...state,
                [SIGNUP_SCREEN]: {
                    ...state[SIGNUP_SCREEN],
                    fullName: action.fullName,
                }
            };
        case UPDATE_SIGN_UP_PASSWORD:
            return {
                ...state,
                [SIGNUP_SCREEN]: {
                    ...state[SIGNUP_SCREEN],
                    signUpPassword: action.signUpPassword,
                }
            };
        case UPDATE_REENTER_PASSWORD:
            return {
                ...state,
                [SIGNUP_SCREEN]: {
                    ...state[SIGNUP_SCREEN],
                    reenterPassword: action.reenterPassword,
                }
            };        
        case UPDATE_SEARCH:
            return {
                ...state,
                [HOME_SCREEN]: {
                    ...state[HOME_SCREEN],
                    search: action.search,
                }
            };   
        case UPDATE_TAB:
            return {
                ...state,
                [HOME_SCREEN]: {
                    ...state[HOME_SCREEN],
                    tab: action.tab,
                }
            };
        case UPDATE_PRODUCT_DETAIL:
            return {
                ...state,
                [RETAILER_DETAILS_SCREEN]: {
                    ...state[RETAILER_DETAILS_SCREEN],
                    productDetail: action.productDetail,
                }
            };
        
        default:
            return state;
    }
};

export default reducer;