'use client'
import React from "react";
import {CacheProvider} from "@emotion/react";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "@/shared/theme";


type ProvidersProps = {
    children: React.ReactNode
}




const Providers:React.FC<ProvidersProps>=({children}) => {
    return (
            <ChakraProvider resetCSS theme={theme}>
                {children}
            </ChakraProvider>
    )
}

export default Providers;