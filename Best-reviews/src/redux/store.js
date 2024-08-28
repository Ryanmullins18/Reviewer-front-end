import {configureStore} from '@reduxjs/toolkit'
import { review_api } from './api'

export default configureStore({
    reducer: {
        [review_api.reducerPath]: review_api.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(review_api.middleware),
})