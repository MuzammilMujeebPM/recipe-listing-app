import { configureStore } from '@reduxjs/toolkit'
import recipeSlice from './slice/recipeSlice'

const rStore = configureStore({
    reducer: {
      recipeReducer : recipeSlice
    }
  })

export default rStore