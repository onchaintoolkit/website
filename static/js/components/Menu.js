import React, {
    useState
} from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

    const [show, setShow] = useState(false);


    return (

        <
        header >
        <
        div className = "lg:flex hidden items-center justify-between font-poppins  text-white-100 h-28" >
        <
        a href = "/"
        className = "logo lg:my-12" >
        <
        img src = {
            logo
        }
        alt = "Logo" / >
        <
        /a>

        <
        nav >
        <
        ul className = "text-md flex justify-center gap-8 items-center" >
        <
        li > < a href = "/"
        className = "text-white-50 hover:text-white-100" > Home < /a></li >
        <
        li > < a href = "#features"
        className = "text-white-50 hover:text-white-100" > Features < /a></li >
        <
        li > < a href = "https://onchaintoolkit.gitbook.io/onchain-dex-terminal-overview/onchain-dex-terminal/onchain-toolkit-overview"
        className = "text-white-50 hover:text-white-100" > Whitepaper < /a></li >
        <
        li > < a href = "mailto: support@onchaintoolkit.com"
        className = "text-white-50 hover:text-white-100" > Contact Us < /a></li >
        <
        /ul> <
        /nav>

        <
        a href = "/" >
        <
        button className = "text-white-100 btn-gradient py-3 lg:px-8 px-4 font-semibold mt-3 rounded-xl" >
        Launch App <
        /button> <
        /a> <
        /div>

        <
        div className = "lg:hidden flex items-center justify-between pt-5 " >
        <
        a href = "/"
        className = "text-white-100" >
        <
        img src = {
            logo
        }
        alt = "Logo"
        className = 'w-44' / >
        <
        /a>

        <
        button onClick = {
            () => setShow(!show)
        }
        className = "nav cursor-pointer" >

        <
        svg xmlns = "http://www.w3.org/2000/svg"
        fill = "none"
        viewBox = "0 0 24 24"
        strokeWidth = "1.5"
        stroke = "currentColor"
        className = "w-6 h-6 text-white-100" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        d = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" > < /path> <
        /svg>

        <
        /button> <
        /div>

        {
            show ? < div className = "fixed top-0 bottom-0 left-0 p-5 w-3/4 overflow-y-auto font-semibold btn-gradient z-20" >

                <
                div className = "mt-3 px-3 mb-20" >
                <
                a href = "/"
            className = "" >
                <
                img src = {
                    logo
                }
            alt = "Logo"
            className = 'w-48' / >
                <
                /a> <
                /div>

                <
                a onClick = {
                    () => setShow(!show)
                }
            href = '/' >
                <
                div className = 'text-lg ml-4 font-semibold' >
                Home <
                /div> <
                /a>

                <
                a onClick = {
                    () => setShow(!show)
                }
            href = '#features' >
                <
                div className = 'text-lg ml-4 mt-8 font-semibold' >
                Features <
                /div> <
                /a> <
                a onClick = {
                    () => setShow(!show)
                }
            href = '/' >
                <
                div className = 'text-lg ml-4 mt-8 font-semibold' >
                Why us <
                /div> <
                /a> <
                a onClick = {
                    () => setShow(!show)
                }
            href = '/' >
                <
                div className = 'text-lg ml-4 mt-8 font-semibold' >
                Whitepaper <
                /div> <
                /a>

                <
                a onClick = {
                    () => setShow(!show)
                }
            href = '/' >
                <
                div className = 'text-lg ml-4 mt-8 font-semibold' >
                Contact Us <
                /div> <
                /a>

                <
                a onClick = {
                    () => setShow(!show)
                }
            href = '/' >
                <
                div className = 'text-lg ml-4 mt-8 font-semibold' >
                Launch App <
                /div> <
                /a>

                <
                /div> : null
        }


        <
        /header >
    )
}