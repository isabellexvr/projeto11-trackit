import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();



//UserContext.provider é a nuvemzinha que armazena as info que serão passadas para todos os filhos

export default function UserPicProvider({ children }) {

    const [userPic, setUserPic] = useState("")

    //mandamos em formato de objeto os useStates

    return (
        <UserContext.Provider value={{ userPic, setUserPic }}>
            {children}
        </UserContext.Provider>
    );
};

export function useUserPic() {
    const context = useContext(UserContext);
    const { userPic, setUserPic } = context;
    return ({ userPic, setUserPic });
}