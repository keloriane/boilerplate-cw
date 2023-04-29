import React from 'react';
import {Button} from "@chakra-ui/react";


type ButtonType = {
    children: React.ReactNode
}


const MainButton:React.FC<ButtonType> = ({children}) => {
    const toggleValue = true
  return (
    <Button
        backgroundColor={toggleValue ? "black" : "electricYellow"}

    >{children}</Button>
  )
}
export default MainButton;