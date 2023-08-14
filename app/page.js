'use client';

import Image from 'next/image'
import styles from './page.module.scss'
import React from 'react'
import { useEffect } from 'react'



import Button from '@mui/material/Button';
// import AOS from 'aos'
import AOS from 'aos';
import 'aos/dist/aos.css';



{/* <main className={styles.main}></main> */ }

{/* <a
href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
target="_blank"
rel="noopener noreferrer"
> */}
// Deploy <span>-&gt;</span>

import Logo from './components/svg/nav-logo.svg'
import Main from './components/main/Main.jsx';

export default function Home() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <React.Fragment>
            <Main/>
            {/* hello world */}
        </React.Fragment>
    )
}
