'use client';

import { createContext, useContext } from 'react';
import { User } from '@/types/user';

type DataContextType = {
    slug?: string[];
    users?: User[];
    isLoading?: boolean;
};

const DataContext = createContext<DataContextType>({});

export function DataProvider({
    children,
    value,
}: {
    children: React.ReactNode;
    value: DataContextType;
}) {
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
