import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ childern }) => {
    // const {childern} = props.childern
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {
                childern
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;