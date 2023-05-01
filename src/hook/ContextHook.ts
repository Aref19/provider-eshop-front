import { useContext } from 'react';
import { providerContext } from '../context/LoginContext';
export const useAuth = () => {
    return useContext(providerContext);
}