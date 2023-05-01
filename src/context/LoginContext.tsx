import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface Auth {
    access_Token: string,
    username: string,
    password: string,
    refresh_token?: string
}

export type AuthInContext = {
    auth: Auth | null
    setAuth: Dispatch<SetStateAction<Auth | null>>
}

export const providerContext = createContext<AuthInContext | null>(null);

export const AuthContext = ({ children }: { children: JSX.Element[] }) => {
    const [auth, setAuth] = useState<Auth | null>(null);

    return (
        <providerContext.Provider value={{ auth, setAuth }}>
            {children}
        </providerContext.Provider>
    )
}



