import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './slices/admin'
import modalReducer from './slices/modal'

export default configureStore({
    reducer: {
        admin: adminReducer,
        modal: modalReducer,
    },
})
