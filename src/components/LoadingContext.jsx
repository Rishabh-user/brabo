// LoadingContext.js (Example)
import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const startLoading = () => {
        console.log('Starting loading');
        setIsLoading(true);
    };

    const stopLoading = () => {
        console.log('Stopping loading');
        setIsLoading(false);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    return useContext(LoadingContext);
};
