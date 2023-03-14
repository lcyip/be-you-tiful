import { 
    WELCOME_SCREEN,
    LOGIN_SCREEN,
    UPDATE_SCREEN,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_SIGN_UP_EMAIL,
    UPDATE_FULL_NAME,
    UPDATE_SIGN_UP_PASSWORD,
    UPDATE_REENTER_PASSWORD,
    UPDATE_SEARCH,
    UPDATE_TAB,
    UPDATE_PRODUCT_DETAIL,
} from "../constants/screensConstants";

export const updateScreen = (screen) => ({
    type: UPDATE_SCREEN,
    screen,
});

export const updateEmail = (email) => ({
    type: UPDATE_EMAIL,
    email,
});

export const updatePassword = (password) => ({
    type: UPDATE_PASSWORD,
    password,
});

export const updateSignUpEmail = (signUpEmail) => ({
    type: UPDATE_SIGN_UP_EMAIL,
    signUpEmail,
});

export const updateFullName = (fullName) => ({
    type: UPDATE_FULL_NAME,
    fullName,
});

export const updateSignUpPassword = (signUpPassword) => ({
    type: UPDATE_SIGN_UP_PASSWORD,
    signUpPassword,
});

export const updateReenterPassword = (reenterPassword) => ({
    type: UPDATE_REENTER_PASSWORD,
    reenterPassword,
});

export const updateSearch = (search) => ({
    type: UPDATE_SEARCH,
    search,
});

export const updateTab = tab => ({
    type: UPDATE_TAB,
    tab,
});

export const updateProductDetail = productDetail => ({
    type: UPDATE_PRODUCT_DETAIL,
    productDetail,
});

// export const insertingPod = pod => ({
//     type: ESPRESSO,
//     pod,
// })

// const pod = {
//     size: 'medium',
//     weight: '100mg',
//     roast: 'dark',
// }

// pod.size;
// pod.weight;
// pod.roast;


// insertingPod(pod);



// we are exporting [export] a defined constant [const] function [ () ] named updateScreen [updateScreen] that
// returns [=>] an object[ ({}) ]


// export const updateScreen = () => {
//     2 + 3;
// };