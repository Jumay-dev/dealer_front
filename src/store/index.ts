import { createStore, combineReducers, applyMiddleware } from "redux";
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "../reducers/auth";
import { projectReducer } from "../reducers/project";
import { toolReducer } from "../reducers/tool";
import { appReducer } from "../reducers/app";
import { userReducer } from "../reducers/user";
import { companyReducer } from "../reducers/company";
import { searchReducer } from "../reducers/search";
import snackbarReducer from "../reducers/snackbar";

const rootReducer = (history) => combineReducers({
    auth: authReducer,
    project: projectReducer,
    tool: toolReducer,
    app: appReducer,
    user: userReducer,
    company: companyReducer,
    router: connectRouter(history),
    snackbar: snackbarReducer,
    search: searchReducer
})
export const history = createBrowserHistory()
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [ thunkMiddleware ];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer(history),
        composeWithDevTools(middleWareEnhancer)
    )

    return store
}