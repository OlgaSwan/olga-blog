import { createContext } from "react";

interface AuthContextProps {
    isAuth: boolean
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextProps>({isAuth: false, setIsAuth: () => {}})