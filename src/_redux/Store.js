import RootReducer from "./RootReducer";

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: RootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })

})