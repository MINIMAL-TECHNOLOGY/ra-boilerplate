import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { counterReducer } from './slices'
import rootSaga from './sagas'

//----------------------------------------------------------------------------
// Combine reducers
const appReducer = combineReducers({
  counter: counterReducer,
})

//----------------------------------------------------------------------------
// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

//----------------------------------------------------------------------------
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appReducer>

//----------------------------------------------------------------------------
// Reset store after logout
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'RESET_APP') {
    state = {} as RootState
  }

  return appReducer(state, action)
}

//----------------------------------------------------------------------------
// Create store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

//----------------------------------------------------------------------------
// Run saga
sagaMiddleware.run(rootSaga)

//----------------------------------------------------------------------------
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
