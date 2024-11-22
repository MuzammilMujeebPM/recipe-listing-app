import { configureStore } from '@reduxjs/toolkit'
import recipeSlice from './slice/recipeSlice'

const Store = configureStore({
    reducer: {
      recipeReducer : recipeSlice
    }
  })

export default Store