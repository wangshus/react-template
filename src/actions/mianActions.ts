import { action } from "typesafe-actions"


export const MAINACTIONSLIST = {
    RESET_SAGA: "MAIN/RESET_SAGA",
    VALUE_CHANGE: "MAIN/VALUE_CHANGE"
}


export const valueChange = (data: string) => action(MAINACTIONSLIST.VALUE_CHANGE, data);