"use client"
import React from 'react';
import {NextUIProvider} from "@nextui-org/react"

const Providers = ({children}) => {
    return (
        <div>
            <NextUIProvider>
            {children}
            </NextUIProvider>
        </div>
    );
};

export default Providers;