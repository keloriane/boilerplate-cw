'use client'
import React from "react";
import {Box} from "@chakra-ui/react";
import {containerWidth} from "@/shared/theme";




interface ContainerProps {
    children: React.ReactNode
}
const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <Box
        w={"100%"}
        maxWidth={containerWidth}
        p={[ "27px" , "36px" , "40px"]}
        margin={"0 auto"}
        backgroundColor={"pink"}
    >
        {children}
    </Box>
  )
}
export default Container;