import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Blog.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';


const Bloglisting = () => {

    const [posts, setPosts] = useState([]);

    const [show, setshow] = useState(true);




    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch('https://texasbookpublishing.com/wp-json/wp/v2/posts?_embed&per_page=10');
            const data = await response.json();
            setPosts(data);
            setshow(false);

        };

        fetchData();
    }, []);

    console.log(posts[1]);

    const imageLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    console.log(imageLoader);
    return (
        <>
            <div className={styles.bloglisting}>

                <Container>
                    <Row className='gy-4'>

                        {show ?
                            <h1 className="font50 fw700 color-blue t-center font-f">Loading ...</h1>
                            :
                            ''
                        }
                        {posts.map((item, i) =>

                            <Col md={4} key={i}>



                                <div className={styles.bloglist}>
                                    <Image loading="lazy" width={1000} height={300} src={item._embedded['wp:featuredmedia']['0'].source_url} loader={imageLoader} className='img-fluid' alt="book_writing_cube" />
                                    <div className={styles.cardbodylist}>
                                        <h3><Link href={`/${item.slug}`} className="mt-3 font-f color-black textdocationnone hover">{item.title.rendered}</Link></h3>
                                        <Link href={`/${item.slug}`} className={`${styles.blogbtn} mt-3`}>Continue Reading »</Link>
                                    </div>
                                </div>
                            </Col>
                        )}

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Bloglisting