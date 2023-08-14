"use client"

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { Container } from 'react-bootstrap'
import './Main.scss'

import { BiSearch } from 'react-icons/bi'
import { BiErrorCircle } from 'react-icons/bi'
import { GoCodeSquare } from 'react-icons/go'
import { AiOutlineCodepen } from 'react-icons/ai'
import { SiLibrarything } from 'react-icons/si'
import { RiCss3Line } from 'react-icons/ri'
import { FaPhoenixFramework } from 'react-icons/fa'
import { MdOutlineApi } from 'react-icons/md'

import { LuArrowUpRightFromCircle } from 'react-icons/lu'
import { PiArrowSquareUpRightFill } from 'react-icons/pi'
import { MdOutlineLocalLibrary } from 'react-icons/md'

import Link from 'next/link'

export default function BlogTwo() {
    return (
        <React.Fragment>
            <section className='blogTwo'>
                <div className="blogTwo-main-title">
                    <h4 className="blogTwo-title">Why <span className='blogTwo-span-title'>Bilmer Library</span> is needed <span className='blogTwo-span-title'>?</span></h4>
                </div>
                <div className="blogTwo-content">
                    <ul className="blogTwo-content-list">
                        <Link href="/">
                            <li className="blogTwo-content-item">
                                <h6 className="blogTwo-content-item-title">
                                    reduce the scope of the&nbsp;
                                    <span className='blogTwo-content-item-title-span'>search&nbsp;<BiSearch className='blogTwo-content-item-title-span-icon' /></span>
                                </h6>
                                <PiArrowSquareUpRightFill className='blogTwo-content-item-link'/>
                            </li>
                        </Link>
                        <Link href="/">
                        <li className="blogTwo-content-item">
                            <h6 className="blogTwo-content-item-title">
                                fast elimination of&nbsp;
                                <span className='blogTwo-content-item-title-span'>errors&nbsp;<BiErrorCircle className='blogTwo-content-item-title-span-icon' /></span>
                            </h6>
                            <PiArrowSquareUpRightFill className='blogTwo-content-item-link'/>
                        </li>
                        </Link>
                        <Link href="/">
                        <li className="blogTwo-content-item">
                            <h6 className="blogTwo-content-item-title">
                                the ability to optimize written&nbsp;
                                <span className='blogTwo-content-item-title-span'>codes&nbsp;<GoCodeSquare className='blogTwo-content-item-title-span-icon' /></span>
                            </h6>
                            <PiArrowSquareUpRightFill className='blogTwo-content-item-link'/>
                        </li>
                        </Link>
                        <Link href="/">
                        <li className="blogTwo-content-item">
                            <h6 className="blogTwo-content-item-title">
                                working with website&nbsp;
                                <span className='blogTwo-content-item-title-span'>backend&nbsp;<AiOutlineCodepen className='blogTwo-content-item-title-span-icon' /></span>
                            </h6>
                            <PiArrowSquareUpRightFill className='blogTwo-content-item-link'/>
                        </li>
                        </Link>
                        <Link href="/">
                        <li className="blogTwo-content-item">
                            <h6 className="blogTwo-content-item-title">
                                a set of multithreaded&nbsp;
                                <span className='blogTwo-content-item-title-span'>libraries&nbsp;<MdOutlineLocalLibrary className='blogTwo-content-item-title-span-icon' /></span>
                            </h6>
                            <PiArrowSquareUpRightFill className='blogTwo-content-item-link'/>
                        </li>
                        </Link>
                        <Link href="/">
                        <li className="blogTwo-content-item">
                            <h6 className="blogTwo-content-item-title">
                                advantage of working with<span className='blogTwo-content-item-title-span'>&nbsp;css&nbsp;</span>frameworks&nbsp;
                                <span className='blogTwo-content-item-title-span'><RiCss3Line className='blogTwo-content-item-title-span-icon' /></span>
                            </h6>
                            <PiArrowSquareUpRightFill className='blogTwo-content-item-link'/>
                        </li>
                        </Link>
                        <Link href="/">
                        <li className="blogTwo-content-item">
                            <h6 className="blogTwo-content-item-title">
                                <span className='blogTwo-content-item-title-span'>javascript&nbsp;</span>
                                frameworks and their properties&nbsp;
                                <span className='blogTwo-content-item-title-span'><FaPhoenixFramework className='blogTwo-content-item-title-span-icon' /></span>
                                &nbsp;
                            </h6>
                            <PiArrowSquareUpRightFill className='blogTwo-content-item-link'/>
                        </li>
                        </Link>
                        <Link href="/">
                        <li className="blogTwo-content-item">
                            <h6 className="blogTwo-content-item-title">
                                Types of
                                <span className='blogTwo-content-item-title-span'>&nbsp;API</span>
                                s and how to use them&nbsp;
                                <span className='blogTwo-content-item-title-span'><MdOutlineApi className='blogTwo-content-item-title-span-icon' /></span>
                                &nbsp;
                            </h6>
                            <PiArrowSquareUpRightFill className='blogTwo-content-item-link'/>
                        </li>
                        </Link>
                    </ul>
                </div>

            </section>
        </React.Fragment>
    )
}