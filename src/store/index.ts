import { createStore, combineReducers, applyMiddleware,  } from "redux";

const rootReducer = combineReducers({

})

export default function configureStore() {
    const store = createStore(
        rootReducer
    )

    return store
}