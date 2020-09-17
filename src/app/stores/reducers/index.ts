import { combineReducers, Reducer, CombinedState } from "redux";
export const useRootReducer = (): Reducer<CombinedState<{}>> => {
    return combineReducers<{}>({

    })
}