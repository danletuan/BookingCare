const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',


    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FALL: ' USER_LOGIN_FALL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCRSS: 'FETCH_GENDER_SUCCRSS',
    FETCH_GENDER_FAILDED: 'FETCH_GENDER_FAILDED',

    FETCH_POSITION_SUCCRSS: 'FETCH_POSITION_SUCCRSS',
    FETCH_POSITION_FAILDED: 'FETCH_POSITION_FAILDED',

    FETCH_ROLE_SUCCRSS: 'FETCH_ROLE_SUCCRSS',
    FETCH_ROLE_FAILDED: 'FETCH_ROLE_FAILDED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILDED: 'CREATE_USER_FAILDED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILDED: 'EDIT_USER_FAILDED',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILDED: 'DELETE_USER_FAILDED',

    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAILDED: 'FETCH_ALL_USERS_FAILDED',

    FETCH_TOP_DOCTOR_SUCCESS: 'FETCH_TOP_DOCTOR_SUCCESS',
    FETCH_TOP_DOCTOR_FAILDED: 'FETCH_TOP_DOCTOR_FAILDED',

    FETCH_ALL_DOCTOR_SUCCESS: 'FETCH_ALL_DOCTOR_SUCCESS',
    FETCH_ALL_DOCTOR_FAILDED: 'FETCH_ALL_DOCTOR_FAILDED',

    SAVE_DETAIL_DOCTOR_SUCCESS: 'SAVE_DETAIL_DOCTOR_SUCCESS',
    SAVE_DETAIL_DOCTOR_FAILDED: 'SAVE_DETAIL_DOCTOR_FAILDED',
})

export default actionTypes;