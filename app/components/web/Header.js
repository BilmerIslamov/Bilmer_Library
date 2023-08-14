"use client";
import React from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

import './Header.scss';
import '../../globals.scss'
import NavbarJson from './Header.json';

import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../svg/nav-logo.svg';
import { FaSearch } from 'react-icons/fa'
import { MdLanguage } from 'react-icons/md'
import { palette } from '@mui/system';





export default function Navbar() {
    const router = usePathname()
    const [searchBlog, useSearchBlog] = useState()
    const [linkJson, setLinkJson] = useState([])


    const navigation = NavbarJson.map((ItemJson, Index) =>
        <li key={Index} className="navbar-item">
            <Link
                href={ItemJson.link}
                className={`navbar-link-content ${router == ItemJson.link ? "active" : ""}`}
                data-id={ItemJson.dataId}
            >
                {ItemJson.title}
            </Link>
        </li>
    );


    return (
        <React.Fragment>
            <header className='header'>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-content">
                            <div className="navbar-content-left">
                                <Link href="/" className="navbar-logo_group">
                                    <Image
                                        src={Logo}
                                        alt="Vercel Logo"
                                        className={`navbar-logo`}
                                        priority
                                    />
                                    <h1 className="navbar-title">Bilmer Library</h1>
                                </Link>

                                <ul className="navbar-list-group">
                                    {navigation}
                                </ul>
                            </div>
                            <div className="navbar-content-right">
                                <Button variant="contained" className='navbar-search-btn'>
                                    <FaSearch className='navbar-search-btn-icon' />
                                    Search
                                </Button>
                                <Button variant="contained" className="navbar-lang-btn">
                                    <MdLanguage className='navbar-lang-btn-icon' />
                                    Lang
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}