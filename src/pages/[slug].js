import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Blogdetails.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Blogclientssays from '../../components/Blogclientssays'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
const Slug = () => {

    const router = useRouter()
    const slug1 = router.query.slug

    const [show, setshow] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`https://texasbookpublishing.com/wp-json/wp/v2/posts?_embed&slug=${slug1}`);
            const data = await response.json();
           
            setPosts(data);
            setshow(false);
        };
      
        fetchData();
    }, []);
 

    return (
        <>

            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
                <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
                <link rel="profile" href="http://gmpg.org/xfn/11" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <title>The Role Of Amazon KDP In Multilingual Book Publishing Services</title>
                <meta name="description" content="In this blog, we will explore the role of Amazon KDP Global in enhancing publishing reach through multilingual book publishing services" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="The Role Of Amazon KDP In Multilingual Book Publishing Services" />
                <meta property="og:description" content="In this blog, we will explore the role of Amazon KDP Global in enhancing publishing reach through multilingual book publishing services" />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="Book Writing" />
                <meta property="article:published_time" content="2023-05-15T12:40:22+00:00" />
                <meta property="article:modified_time" content="2023-05-15T13:43:41+00:00" />
                <meta property="og:image" content="" />
                <meta property="og:image:width" content="1400" />
                <meta property="og:image:height" content="800" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="author" content="Texas Book Publishing" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="Texas Book Publishing" />
                <meta name="twitter:label2" content="Est. reading time" />
                <meta name="twitter:data2" content="13 minutes" />
                <link rel='icon' href='/favicon.svg' />
            </Head>

            <div className={styles.blogdetails}>
                <div className={styles.blogbg}>
                    <Container>
                        <Row>
                            <Col className={`${styles.above} col-md-12`}>
                                <Link className='textdocationnone' href='#'> <h2 className='color-blue fw700 font50 t-center font-f'> {slug1} </h2> </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container className='dataset'>
                    <Row>

                    {show ?
                            <h1 className="font50 fw700 color-blue t-center font-f">Loading ...</h1>
                            :
                            ''
                        }

                    {posts.map((item, i) =>
                          
                          <Col md={12} key={i}>
                              <div className={styles.bloglist}>
                                  {/* <Image loading="lazy" width={1000} height={300} src={item._embedded['wp:featuredmedia']['0'].source_url} loader={imageLoader} className='img-fluid' alt="book_writing_cube" /> */}
                                  <div className={styles.cardbodylist}>
                                  {/* <h3>{item.title.rendered}</h3> */}
                                  <div dangerouslySetInnerHTML={{__html: item.content.rendered}}>
                                        
                                  </div>
                                  </div>
                              </div>
                          </Col>
                      )}


                        {/* <Col md={8}>

                            <div className='d-flex gap-2'>
                                <Image loading="lazy" src={sideicon} alt="book_writing_cube" width="25" height="25" />
                                <p className='fw500 font18 colortextgrey font-f'> By BWC Team in 2023</p>
                            </div>

                            <div>
                                <Image loading="lazy" src={blogimage4} alt='Texas Book Publishing' className='img-fluid' />
                            </div>

                            <p className='textcolor mt-3  font15 font-f'>The publishing landscape is more competitive than ever, so authors need to have knowledge about getting their books seen. Traditional methods like print-on-demand are becoming less effective as the digital marketplace evolves, creating a greater demand for modern strategies that get your book noticed in the growing pool of titles on <Link className='textdocationnone hover color-blue' href='#'>Kindle Direct Publishing</Link> (KDP) platforms.</p>

                            <p className='textcolor mt-3  font15 font-f'>If you're looking to rise above this competition, you have landed in the right place. This blog post explores the power of Amazon's targeted tools for book advertisement and strategies to increase visibility and elevate your eBooks into bestseller status.</p>

                            <h2 className='font30 fw700 colortextgrey font-f' id="1">Understanding the Importance of
                                <Link className='textdocationnone colortextgrey hover' href="#"> KDP Advertising </Link>
                                for Your Book
                            </h2>

                            <p className='textcolor mt-3  font15 font-f'>When it comes to Amazon book marketing, KDP Advertising is an essential component of success. By creating a sponsored ads campaign, authors can promote their books on Amazon and various other channels to reach more readers and increase sales.</p>

                            <p className='textcolor mt-3  font15 font-f'>KDP Advertising allows you to target potential customers based on their interests and demographics, which gives your book the best chance of reaching its desired audience. Furthermore, Amazon's powerful algorithms ensure that your book is shown to the right people at the right time, making it more likely for readers to purchase it.</p>

                            <p className='textcolor mt-3  font15 font-f'>These benefits help make KDP Advertising an invaluable tool for authors who want to maximize their Amazon book advertising success.</p>

                            <h2 className='font30 fw700 colortextgrey font-f' id="2">
                                Harnessing the Power of Amazon's Targeted Advertising Tools
                            </h2>

                            <p className='textcolor mt-3  font15 font-f'>
                                Amazon is one of the largest and powerful online retail sites, with millions of customers searching for products daily. Amazon's targeted advertising tools are a great way to reach potential customers and boost sales for your Amazon book promotion.
                            </p>
                            <p className='textcolor mt-3  font15 font-f'>Here are five tips for capitalizing on the power of Amazon's targeted advertising tools:</p>

                            <h2 className='font30 fw700 colortextgrey font-f' id="2">
                                Maximizing Your Book's Visibility through KDP Select and Free Book Promotions
                            </h2>

                            <p className='textcolor mt-3  font15 font-f'>
                                Amazon is one of the largest and powerful online retail sites, with millions of customers searching for products daily. Amazon's targeted advertising tools are a great way to reach potential customers and boost sales for your Amazon book promotion.
                            </p>
                            <p className='textcolor mt-3  font15 font-f'>Here are five tips for capitalizing on the power of Amazon's targeted advertising tools:</p>

                            <h2 className='font30 fw700 colortextgrey font-f' id="2">
                                Measuring and Optimizing Your Book's KDP Promotion Results for Continued Success
                            </h2>

                            <p className='textcolor mt-3  font15 font-f'>
                                Amazon is one of the largest and powerful online retail sites, with millions of customers searching for products daily. Amazon's targeted advertising tools are a great way to reach potential customers and boost sales for your Amazon book promotion.
                            </p>
                            <p className='textcolor mt-3  font15 font-f'>Here are five tips for capitalizing on the power of Amazon's targeted advertising tools:</p>

                            <h2 className='font30 fw700 colortextgrey font-f' id="2">
                                Offer Excerpts
                            </h2>

                            <p className='textcolor mt-3  font15 font-f'>
                                Amazon is one of the largest and powerful online retail sites, with millions of customers searching for products daily. Amazon's targeted advertising tools are a great way to reach potential customers and boost sales for your Amazon book promotion.
                            </p>
                            <p className='textcolor mt-3  font15 font-f'>Here are five tips for capitalizing on the power of Amazon's targeted advertising tools:</p>

                            <h2 className='font30 fw700 colortextgrey font-f' id="2">
                                Participate In Online Forums
                            </h2>

                            <p className='textcolor mt-3  font15 font-f'>
                                Amazon is one of the largest and powerful online retail sites, with millions of customers searching for products daily. Amazon's targeted advertising tools are a great way to reach potential customers and boost sales for your Amazon book promotion.
                            </p>
                            <p className='textcolor mt-3  font15 font-f'>Here are five tips for capitalizing on the power of Amazon's targeted advertising tools:</p>


                        </Col> */}
                        {/* <Col md={4}>

                            <div>
                                <h4 className={styles.tableofcontent}>Table of Contents</h4>
                                <div>
                                    <ul className={styles.understand}>
                                        <li> <h6><Link href="#1">Understanding the Importance of KDP Advertising for Your Book</Link></h6></li>
                                        <li> <h6> <Link href="#2">Harnessing the Power of Amazon's Targeted Advertising Tools</Link></h6></li>
                                        <li> <h6> <Link href="#3">Maximizing Your Book's Visibility through KDP Select and Free Book Promotions</Link></h6></li>
                                        <li> <h6> <Link href="#4">Take Advantage Of Free Promotion Days</Link></h6></li>
                                        <li> <h6> <Link href="#5">Measuring and Optimizing Your Book's KDP Promotion Results for Continued Success</Link></h6></li>
                                    </ul>
                                </div>
                            </div>


                            <Freequote
                                formsaspire='blogformsaspire'
                            />

                        </Col> */}
                    </Row>
                </Container>

                <Blogclientssays />

            </div>

        </>
    )
}

export default Slug