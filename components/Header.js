import React, { useState } from 'react'
import styles from '@/styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import logo from '../public/images/logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaLocationArrow } from 'react-icons/fa';
import Sticky from '../components/Sticky';
import headericon1 from '../public/images/headericon/1.png'
import headericon2 from '../public/images/headericon/2.png'
import headericon3 from '../public/images/headericon/3.png'
import headericon4 from '../public/images/headericon/4.png'
import headericon5 from '../public/images/headericon/5.png'
import headericon6 from '../public/images/headericon/6.png'
import headericon7 from '../public/images/headericon/7.png'
import headericon9 from '../public/images/headericon/9.png'
import headericon10 from '../public/images/headericon/10.png'
import Modal from 'react-bootstrap/Modal';
import Getstarted from './Getstarted'

import { useRouter } from "next/router";

const Header = () => {

  const [click, setclick] = useState(false);

  function toggle() {

    setclick((prevState) => !prevState);


  }

  const [show, setShow] = useState(false);

  function modal(e) { e.preventDefault(); setShow(true); }
  function closemodal() { setShow(false); }


  const router = useRouter();



  return (
    <>

      <header className={router.pathname == '/illustration' || router.pathname == '/ghostwriting-services2' || router.pathname == '/audiobookproduction' || router.pathname == '/ourportfolio' || router.pathname == '/portfoliobookediting' || router.pathname == '/portfoliobookmarketing' || router.pathname == '/portfoliobookwriting' || router.pathname == '/portfoliobookpublishing' ? styles.headerblue : styles.headerhome}>
        <Navbar expand="lg" className={styles.navBar}>
          <Container className={styles.headerContainer}>

            <Link href="/"><Image loading="lazy" className={styles.logonew} src={logo} alt='logo'></Image> </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.navalign}>
              <ul className={styles.align_menu}>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/">Home</Link></li>
                <li onClick={toggle} className={`${styles.navlinks} ${styles.serviceshover}`}><Link className={styles.menulinks} href="">Services <IoMdArrowDropdown size={12} /></Link>
                  <Row className={click ? `${styles.megamenu} ${styles.active}` : `${styles.megamenu}`}>
                    <Col md={4}>
                      <ul className={`${styles.border}`} >
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon1} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/book-publishing-services">Book Publishing Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon2} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/book-promotion-services">Book Promotion Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon3} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/book-writing-services">Book Writing Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon4} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/book-editing-services">Book Editing Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon5} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/book-marketing-services">Book Marketing Services</Link>
                          </div>
                        </li>
                      </ul>
                    </Col>
                    <Col md={4}>
                      <ul className={`${styles.border}`} >
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon10} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/illustration">Illustration</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon10} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/digital-marketing-services">Digital Marketing</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon10} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/book-trailer-services">Book Trailer Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon6} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/book-proofreading-services">Proofreading Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon9} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/ebook-writing-services">Ebook Writing Services</Link>
                          </div>
                        </li>
                      </ul>
                    </Col>
                    <Col md={4}>
                      <ul className={`${styles.border} ${styles.lastCol}`} >
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon10} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/audiobookproduction">Audio book production </Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon3} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/ghostwriting-services">Ghostwriting Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon7} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/book-formatting-services">Book Formatting Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon5} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/web-content-writing-services">Web Content Writing Services</Link>
                          </div>
                        </li>
                        <li className={`${styles.navlinks} ${styles.megaLinks}`}>
                          <Image loading="lazy" alt="Texas Book Publishing" src={headericon2} className='img-fluid'></Image>
                          <div className={styles.megaDiv}>
                            <Link className={styles.menulinks} href="/business-plan-writing-services">Business Plan Writing Services</Link>
                          </div>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/pricing">Pricing</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/ourportfolio"> Our Portfolio</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/blogs">Blogs</Link></li>
                <li className={styles.navlinks}><Link className={styles.menulinks} href="/contact">Contact us</Link></li>
              </ul>

              <ul className={styles.align_menu}>


                <li className={`${styles.navlinks} ${styles.headertel}`}>

                  <Link className={`${styles.headerbtncolor} ${styles.headericon}`} href="tel:(213) 289 3888">

                    <BsFillTelephoneFill className={styles.valuenum} size={12} /> (213) 289 3888 </Link>

                </li>


                <li onClick={modal} className={`${styles.navlinks} ${styles.headertel} ${styles.headerbtnspacing}`}><Link className={styles.headerbtncolor} href="">Get A Quote</Link></li>

              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>

      <Sticky />


      <Modal show={show} centered onHide={closemodal} className='getmodal'>
        <Modal.Body> <Getstarted /> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>

      </Modal>


    </>
  )
}

export default Header