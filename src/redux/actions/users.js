import * as type from "../types/userTypes";

export function getUsers(users){
    return {
        type: type.GET_USERS_REQUEST,
        payload: users,
    }
}