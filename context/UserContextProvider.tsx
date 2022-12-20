import React, {useState} from "react";

// @ts-ignore
export const UserContext = React.createContext()


const UserContextProvider = ({children}: {children: any}) => {
    const [user, setUser] = useState<User | null>(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
