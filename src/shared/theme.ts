import {extendTheme} from "@chakra-ui/react";

import localFont from 'next/font/local';


const fontWeights = {
    light: 250,
    normal: 400,
    medium: 500,
    bold: 700,
}
const fontSizes = {
    sm: "1rem",
    md: "1.5rem",
    lg: "3rem",
    xl: "3.5rem",
    "2xl": "5rem",
    "button": "2.5rem",

}
const Aeonik = localFont({
    src: [
        {
            path: '/fonts/Aeonik-Regular.otf',
            weight: '400',
            style: 'normal',
        },
    ],
});




const GoshaSans = localFont({
    src: [
        {
            path: 'fonts/GoshaSans-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: 'fonts/GoshaSans-Regular.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: 'fonts/GoshaSans-Ultrabold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: 'fonts/GoshaSans-Ultralight.otf',
            weight: '100',
            style: 'normal',


        },
    ],
});


const colors = {
    electricYellow:"#D6FF01",
    mainGrey: "D9D9D9"
}


export const containerWidth = ["26.5rem","32rem" , "40rem", "64rem", "80rem"]

export const theme = extendTheme({
   fontWeights: fontWeights,
    fonts: {
        heading: GoshaSans.style.fontFamily,
        body: Aeonik.style.fontFamily,
    },
    fontSizes: fontSizes,

});




