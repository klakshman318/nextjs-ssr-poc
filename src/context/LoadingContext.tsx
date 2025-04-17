'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LoadingContext = createContext<{
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}>({
    isLoading: false,
    startLoading: () => { },
    stopLoading: () => { },
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    return useContext(LoadingContext);
}
