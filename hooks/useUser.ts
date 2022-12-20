import {useContext} from "react";
import {UserContext} from "../context/UserContextProvider";

type UserObject = {
    user: User | null;
    setUser: (user: User | null) => void;
}

export default function useUser() {
    return useContext(UserContext) as UserObject
}
