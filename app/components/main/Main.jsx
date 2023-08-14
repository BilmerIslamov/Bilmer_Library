"use client";

import React from 'react';
import { Button } from '@mui/material';
import { Container } from 'react-bootstrap'

import Image from 'next/image'

import './Main.scss'
import '../../globals.scss'

import MainLogo from '../svg/main-logo.svg'
import BlogTwo from './blog-2';
import GetStated from './blog-3';


export default function Main() {
    return (
        <React.Fragment>
            <main className='main' >
                <Container>
                    <section className="main-blog">
                        <div className="main-logo-group">
                            <div className="main__image">
                                <Image src={MainLogo} alt='' className='main-logo'/>
                            </div>
                         
                            <h2 className="main-logo-title">Bilmer Library your website assistant</h2>
                            {/* <span className='main-logo-span'></span>  */}
                            <p className="main-logo-text">Powered by Bilmer, the <span className='main-brand-title'>Bilmer Library</span> allows you to extend the latest React functionality, accelerate web applications, integrate javaScript tools, and build web applications using <span className='main-brand-title'>API</span>s.</p>
                            <ul className="main-logo-list">
                                <li className="main-logo-item">
                                    without errors
                                </li>
                                <span className='main-logo-list-span'></span>
                                <li className="main-logo-item">
                                    great animations
                                </li>
                                <span className='main-logo-list-span'></span>
                                <li className="main-logo-item">
                                    efficiency
                                </li>
                            </ul>
                        </div>
                    </section>
                    <BlogTwo/>
                    <span className='main-type-error'></span>
                    <GetStated/>
                    <span className='main-type-error'></span>
                </Container>
            </main>
        </React.Fragment>
    )
}