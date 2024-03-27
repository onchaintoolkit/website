import React, {
    useEffect
} from 'react'
import Footer from './Footer'
import Menu from './Menu'
import img_1 from '../assets/img_1.png';
import img_2 from '../assets/img_2.png';
import img_3 from '../assets/img_3.png';
import img_4 from '../assets/bg-img.png';
import bg_img from '../assets/bg_img.png';
import badge from '../assets/badge.png';
import feature_1 from '../assets/feature_1.png';
import feature_2 from '../assets/feature_2.png';
import feature_3 from '../assets/feature_3.png';
import feature_4 from '../assets/feature_4.png';
import feature_5 from '../assets/feature_5.png';
import feature_6 from '../assets/feature_6.png';
import line from '../assets/line.png';
import line_1 from '../assets/line_1.png';
import line_2 from '../assets/line_2.png';
import icon_1 from '../assets/icon_1.png';
import icon_2 from '../assets/icon_2.png';
import icon_3 from '../assets/icon_3.png';
import icon_4 from '../assets/icon_4.png';
import icon_5 from '../assets/icon_5.png';
import icon_6 from '../assets/icon_6.png';
import community_1 from '../assets/community_1.png';
import community_2 from '../assets/community_2.png';
import community_3 from '../assets/community_3.png';
import community_4 from '../assets/community_4.png';

import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: 'ease',
        });
        Aos.refresh();
    }, [])

    return (

        <
        div className = "bg-blue-100 font-poppins overflow-hidden text-white-100 bg-grid" >

        <
        div className = '' > {
            /* top section */ }

        <
        img data - aos = 'fade-up'
        src = {
            line
        }
        alt = 'line'
        className = 'absolute left-0 right-0 sm:top-4 top-64 w-full' > < /img>

        <
        div className = "lg:px-20 px-5 bg-top relative z-20" >
        <
        div className = 'container mx-auto' >

        <
        Menu / >

        <
        div className = "lg:flex block justify-between items-center gap-x-32 py-12 font-montserat lg:space-y-0 space-y-20" >
        <
        div data - aos = "fade-right"
        className = "lg:w-1/2 w-full" >
        <
        h1 className = 'md:text-6xl text-3xl font-bold text-white-100' >
        Welcome to OnChain Toolkit Multichain trading Ecosystem <
        /h1>

        <
        p className = 'py-6 text-white-50 font-inter' >
        Equipped with autonomous AI assistants, DEX aggregator, fiat on - ramp, and cross - chain swaps powered by LayerZero technology <
        /p>

        <
        div className = "" >
        <
        a href = "/" >
        <
        button className = "text-white-100 bg-purple-100 py-3 lg:px-8 px-4 font-semibold mt-3 rounded-xl" >
        Launch App <
        /button> < /
        a > <
        /div>

        <
        /div>

        <
        div data - aos = "zoom-in"
        className = "" >
        <
        img data - aos = 'fade-up'
        src = {
            bg_img
        }
        alt = "Logo"
        className = 'sm:flex mx-auto absolute -mt-8' / >
        <
        img data - aos = 'zoom-in'
        data - aos - delay = '500'
        src = {
            badge
        }
        alt = "Logo"
        className = 'sm:flex mx-auto absolute z-30 -mt-10 -ml-5 md:w-36 w-28' / >
        <
        img data - aos = 'zoom-in'
        data - aos - delay = '500'
        src = {
            img_1
        }
        alt = "Logo"
        className = 'sm:flex mx-auto relative z-20 w-10/12' / >
        <
        /div> < /
        div >


        <
        div className = "lg:flex block justify-between items-center flex-row-reverse gap-x-12 lg:py-20 py-6 font-montserat  lg:space-y-0 space-y-16" >
        <
        div data - aos = "fade-right"
        className = "lg:w-1/2 w-full space-y-8" >
        <
        h2 className = 'md:text-6xl text-3xl font-extrabold text-gradient' >
        Our Super Power <
        /h2>

        <
        p className = 'md:text-2xl text-xl font-semibold text-purple-100' >
        With the multichain trading capability, users can access and trade assets across various blockchain networks seamlessly, saving time and effort <
        /p>

        <
        /div>

        <
        div data - aos = "zoom-in"
        className = "" >
        <
        img src = {
            img_4
        }
        alt = "Logo"
        className = 'sm:flex mx-auto absolute' / >
        <
        img src = {
            img_2
        }
        alt = "Logo"
        className = 'sm:flex mx-auto relative z-20 -translate-y-12 w-11/12' / >
        <
        /div> < /
        div >

<img src={line_1} alt='line' className='absolute left-0 right-0 w-full -mt-24' />
<div className='lg:flex block justify-between items-center gap-x-12 lg:pb-12 pb-6 font-montserat lg:space-y-0 space-y-8 relative z-20'>
  <div data-aos='fade-right' className='lg:w-1/2 w-full'>
    <h3 className='md:text-4xl text-2xl font-bold text-purple-100 mb-2'>Your Heading Here</h3>
    <p className='md:text-3xl text-xl font-medium text-purple-100'>
      'Whether you're a seasoned trader or insightful analyst, the Onchain Toolkit provides the resources you need to succeed in the rapidly growing world of decentralized finance'
    </p>
  </div>
</div>

        <
        div data - aos = "zoom-in"
        className = "" >
        <
        img src = {
            img_3
        }
        alt = "Logo"
        className = 'sm:flex mx-auto' / >
        <
        /div> < /
        div >

        <
        /div> < /
        div >

        {
            /* feature section */ }

        <
        img src = {
            line_2
        }
        alt = 'line'
        className = 'absolute left-0 right-0 w-full mt-32' > < /img>

        <
        div id = 'features'
        className = "lg:px-20 px-5 lg:py-20 py-6 bg_feature relative z-20" >
        <
        div className = 'container mx-auto' >

        <
        p className = 'md:text-5xl text-3xl font-extrabold text-gradient text-center' >
        Key Features <
        /p>

        <
        div className = 'grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-x-6 gap-y-12 lg:mt-20 mt-8' >
        <
        div data - aos = 'fade-up'
        className = 'flex flex-col items-center justify-center text-center border border-white-50 rounded-xl px-6 py-8 h-96 gap-y-8 bg-blue-50' >
        <
        img src = {
            feature_1
        }
        alt = '' > < /img> <
        p className = 'md:text-2xl text-xl font-semibold' > AI Assistants < /p> <
        p className = 'text-white-50' >
        Enhance decision - making and market navigation with real - time market analysis, portfolio and risk management, alerts, and educational resources. <
        /p> < /
        div >

        <
        div data - aos = 'fade-up'
        className = 'flex flex-col items-center justify-center text-center border border-white-50 rounded-xl px-6 py-8 h-96 gap-y-8 bg-blue-50' >
        <
        img src = {
            feature_2
        }
        alt = '' > < /img> <
        p className = 'md:text-2xl text-xl font-semibold' > Crosschain Swaps < /p> <
        p className = 'text-white-50' >
        Utilize LayerZero 's innovative solutions for direct cross-chain swaps, ensuring efficient and secure asset transfers across networks. < /
        p > <
        /div>

        <
        div data - aos = 'fade-up'
        className = 'flex flex-col items-center justify-center text-center border border-white-50 rounded-xl px-6 py-8 h-96 gap-y-8 bg-blue-50' >
        <
        img src = {
            feature_3
        }
        alt = '' > < /img> <
        p className = 'md:text-2xl text-xl font-semibold' > Fiat On Ramp < /p> <
        p className = 'text-white-50' >
        Purchase cryptocurrencies directly with fiat through a secure gateway, using payment methods like credit cards and bank transfers. <
        /p> < /
        div > <
        div data - aos = 'fade-up'
        className = 'flex flex-col items-center justify-center text-center border border-white-50 rounded-xl px-6 py-8 h-96 gap-y-8 bg-blue-50' >
        <
        img src = {
            feature_4
        }
        alt = '' > < /img> <
        p className = 'md:text-2xl text-xl font-semibold' > Limit Orders < /p> <
        p className = 'text-white-50' >
        Place limit orders to execute at specified prices or more favorable rates, enabling precise entry and exit points
        for transactions. <
        /p> < /
        div >

        <
        div data - aos = 'fade-up'
        className = 'flex flex-col items-center justify-center text-center border border-white-50 rounded-xl px-6 py-8 h-96 gap-y-8 bg-blue-50' >
        <
        img src = {
            feature_5
        }
        alt = '' > < /img> <
        p className = 'md:text-2xl text-xl font-semibold' > Contract / Token Scanner < /p> <
        p className = 'text-white-50' >
        Evaluate smart contracts and tokens by analyzing the blockchain, scanning transaction data, and code to assess integrity, security, and functionality. <
        /p> < /
        div >

        <
        div data - aos = 'fade-up'
        className = 'flex flex-col items-center justify-center text-center border border-white-50 rounded-xl px-6 py-8 h-96 gap-y-8 bg-blue-50' >
        <
        img src = {
            feature_6
        }
        alt = '' > < /img> <
        p className = 'md:text-2xl text-xl font-semibold' > Multichain DEX Agregator < /p> <
        p className = 'text-white-50' >
        Access a larger pool of assets and trade seamlessly by combining liquidity from multiple decentralized exchanges across different blockchains. <
        /p> < /
        div > <
        /div>

        <
        div className = 'lg:my-28 my-8 text-center lg:w-9/12 flex mx-auto' >
        <
        p className = 'md:text-4xl text52xl font-semibold text-purple-100' >
        Your essential tool
        for navigating the decentralized finance(DeFi) landscape <
        /p> < /
        div >

        <
        div data - aos = 'fade-up'
        className = 'lg:py-28 p-6 text-center border-8 border-purple-100 rounded-3xl' >
        <
        p data - aos = 'fade-in'
        data - aos - delay = '300'
        className = 'md:text-4xl text-lg font-semibold text-purple-50 lg:w-9/12 flex mx-auto' >
        Onchain Toolkit is more than just a tool it empowers users to navigate the complexities of decentralized exchanges with confidence and intelligence. <
        /p> < /
        div >

        <
        /div> < /
        div >

        <
        div className = 'lg:pb-20 py-6' >
        <
        p className = 'md:text-5xl text-3xl font-extrabold text-gradient text-center' >
        Powered By <
        /p> <
        div className = "logo lg:mt-16 mt-8" >
        <
        div className = "logo_slider" >
        <
        ul className = 'flex items-center justify-center md:gap-x-20 gap-x-6' >
        <
        li > < img src = {
            icon_1
        }
        alt = 'partner'
        className = 'md:w-24' > < /img></li >
        <
        li > < img src = {
            icon_2
        }
        alt = 'partner'
        className = 'md:w-24' > < /img></li >
        <
        li > < img src = {
            icon_3
        }
        alt = 'partner'
        className = 'md:w-52' > < /img></li >
        <
        li > < img src = {
            icon_4
        }
        alt = 'partner'
        className = 'md:w-52' > < /img></li >
        <
        li > < img src = {
            icon_5
        }
        alt = 'partner'
        className = 'md:w-52' > < /img></li >
        <
        li > < img src = {
            icon_6
        }
        alt = 'partner'
        className = 'md:w-52' > < /img></li >
        <
        /ul> < /
        div > <
        /div> < /
        div >

        {
            /* community section */ }

        <
        div id = 'community'
        className = "relative z-20" >
        <
        div className = "lg:px-20 px-5 container mx-auto" >

        <
        div data - aos = "fade-up"
        className = 'text-center md:space-y-16 space-y-8 bg-gradient md:py-20 p-8 rounded-3xl flex flex-col mx-auto lg:w-11/12' >

        <
        p className = 'md:text-5xl text-3xl font-bold' >
        Join our Community <
        /p> <
        div className = 'flex items-center justify-center gap-x-8' >
        <
        a href = 'https://twitter.com/OnchainToolkit' > < img src = {
            community_1
        }
        alt = ''
        className = 'w-16' > < /img></a >
        <
        a href = '/' > < img src = {
            community_2
        }
        alt = ''
        className = 'w-16' > < /img></a >
        <
        a href = '/' > < img src = {
            community_3
        }
        alt = ''
        className = 'w-16' > < /img></a >
        <
        a href = '/' > < img src = {
            community_4
        }
        alt = ''
        className = 'w-20' > < /img></a >
        <
        /div>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        div className = 'bg-dark-bottom' >
        <
        Footer / >
        <
        /div> < /
        div > <
        /div>
    )
}