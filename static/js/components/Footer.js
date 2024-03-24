import React from 'react'
import img_2 from '../assets/img_2.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import line_3 from '../assets/line_3.png';



export default function Footer() {
    return ( <
        footer className = "font-poppins py-6 flex w-10/12 mx-auto" >

        <
        img src = {
            line_3
        }
        alt = 'line'
        className = 'absolute left-0 right-0 -mt-12' > < /img>

        <
        div className = 'container text-white-100 mx-auto lg:px-20 px-5 relative z-20' >
        <
        div className = "lg:flex items-center justify-between py-12  lg:space-y-0 space-y-8" >
        <
        div >
        <
        ul data - aos = 'fade-right'
        className = "md:text-base text-sm flex justify-center md:gap-x-10 gap-x-5 items-center" >
        <
        li > < a href = "/"
        className = " text-white-100 md:font-semibold font-normal" > Home < /a></li >
        <
        li > < a href = "#features"
        className = " text-white-100 md:font-semibold font-normal" > Features < /a></li >
        <
        li > < a href = "#dapp"
        className = " text-white-100 md:font-semibold font-normal" > Dapp < /a></li >
        <
        /ul> <
        /div>

        <
        div data - aos = 'fade-left'
        className = 'flex items-center md:justify-normal justify-center gap-x-5' >
        <
        a href = 'https://twitter.com/OnchainToolkit' > < img src = {
            twitter
        }
        alt = 'twitter' > < /img></a >
        <
        a href = '/' > < img src = {
            telegram
        }
        alt = 'telegram' > < /img></a >
        <
        a href = '/' > < img src = {
            discord
        }
        alt = 'discord' > < /img></a >
        <
        /div> <
        /div>

        <
        div >
        <
        img data - aos = 'zoom-in'
        src = {
            img_2
        }
        alt = ''
        className = 'flex mx-auto md:w-64 w-44 lg:-mt-20' > < /img> <
        /div>

        <
        p className = 'text-center pt-6' > ©Copyrights, {
            new Date().getFullYear()
        }
        On chain Tool kit.All Right Reserved. < /p> <
        /div> <
        /footer>

    )
}