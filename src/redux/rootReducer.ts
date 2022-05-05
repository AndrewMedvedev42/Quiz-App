import { State } from "./defaultState";

export default function rootReducer (state=State, action:any){
    switch (action.type){
        default:
            return {...state}
    }
}