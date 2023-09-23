import { Poppins, Roboto, Nunito, Inter } from "next/font/google"

const poppins =  Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin'],
    variable: "--poppins",
    display: "swap"
})

const roboto =  Roboto({
    weight: ["400", "500",  "700"],
    subsets: ['latin'],
    variable: "--roboto",
    display: "swap"
})

const nunito =  Nunito({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin'],
    variable: "--nunito",
    display: "swap"
})

const inter =  Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin'],
    variable: "--inter",
    display: "swap"
})

const font = {poppins: poppins.variable, roboto: roboto.variable , nunito: nunito.variable ,inter: inter.variable };
export default font