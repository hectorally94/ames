import { configureStore } from '@reduxjs/toolkit';
//import apiServices from './apiServices';
import languageReducer from '../redux/languageSlice';
import imgApiServices from './imgApiServices';
import apiServices from './apiServices';
import eventsReducer from '../redux/eventsSlice'
const store = configureStore({
  reducer: {
    [apiServices.reducerPath]: apiServices.reducer,
    [imgApiServices.reducerPath]: imgApiServices.reducer,

    language: languageReducer,
    events:eventsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiServices.middleware,imgApiServices.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;