import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSliceReducer from './slices/authSlice'

const authPersistConfig = {
    storage,
    key : 'login'
}

const persistedAuthSlice = persistReducer(authPersistConfig , authSliceReducer);

export const store = configureStore({
    reducer : {
        login : persistedAuthSlice
    }
});

export const persist = persistStore(store);

