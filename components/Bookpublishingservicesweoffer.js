import React from 'react'
import styles from '@/styles/Bookpublishingservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import bookediting from '../public/images/bookpublishingservices/book-editing.png'
import pubicon01 from '../public/images/bookpublishingservices/pub-icon01.png'
import pubicon02 from '../public/images/bookpublishingservices/pub-icon02.png'
import book from '../public/images/bookpublishingservices/book.png'


const Bookpublishingservicesweoffer = () => {
    const card =
        [

            {
                image: bookediting,
                title: (<> <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Amazon KDP</Link> </>),
                subTitle: "Amazon KDP",
                pra: (<> Dreaming of becoming an <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Amazon KDP</Link> published author? We're here to turn that dream into a reality! This service is ideal for creators seeking to publish their work with full autonomy. Our skilled team is prepared to guide you through every facet of the process. We offer expert resources and assistance, including tailored marketing and distribution strategies. With us, the journey of self-publication becomes less challenging and more exciting. You maintain complete control over your work, with the assurance that our support is just a step away. Trust us to help you navigate the exciting world of <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Amazon KDP</Link> publishing and let your story shine! </>)

            },

            {
                image: pubicon01,
                title: (<> <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Self-Publishing</Link> </>),
                subTitle: "Self-Publishing",
                pra: (<> If you are eager to share your creative masterpiece with the world, our <Link className='textdocationnone text-white hover' href="/book-publishing-services/">self publishing service</Link> is designed just for you. We are committed to standing by your side throughout the entire process, ensuring you feel supported, not swamped. Our expert team is equipped to offer you valuable resources and personalized assistance, encompassing areas like effective marketing and smart distribution. The beauty of <Link className='textdocationnone text-white hover' href="/book-publishing-services/">self publishing</Link> lies in retaining complete control of your work – and that is precisely what we promise. No interference, just your vision published exactly the way you envisioned it! </>)

            },

            {
                image: pubicon02,
                title: (<> <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Lulu Book Publishing</Link> </>),
                subTitle: "Lulu Book Publishing",
                pra: (<> Unleash your creativity with our <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Lulu Book Publishing</Link> service! This bespoke offering is ideal for those ready to bring their unique literary pieces to life. Our dedicated team of expert <Link className='textdocationnone text-white hover' href="/book-publishing-services/">lulu book publishers</Link> will be with you at every turn, providing valuable resources and personalized assistance including potent marketing and distribution strategies. Enjoy the convenience of self-publishing without the stress, as we alleviate the overwhelming responsibilities that come with it. With us, you're at the helm, making decisions about how your work should be presented to the world. Embrace your journey of self-publishing with confidence, knowing we're with you every step of the way! </>)

            },


            {
                image: book,
                title: (<> <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Ingramspark Publishing Services</Link> </>),
                subTitle: "Ingramspark Publishing Services",
                pra: (<> Dive into the world of <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Ingramspark Publishing Services</Link> with us! Perfect for budding authors eager to share their creativity with the world, we provide an end-to-end service that ensures your self-publishing journey is seamless and fulfilling. Our team stands ready to guide you through every stage of the process, offering critical resources and support, including tailored marketing and distribution strategies. With us, you're never alone in the vast self-publishing landscape. We pledge zero interference from third parties, providing you with the autonomy to publish your work exactly as you envision. Join us, and let's bring your literary vision to life! </>)

            },




        ]
    return (
        <>
            <div className={styles.comprehensive}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <h2 className="fw700 font50 text-white font-f t-center mb-3">The <Link className='textdocationnone text-white hover' href="/book-publishing-services/">Book Publishing Services</Link> We Provide!</h2>

                            <p className="font15 text-white font-f t-center textcolor mb-3">Texas Book Publishing proudly provides a comprehensive range of <Link className='textdocationnone text-white hover' href="/book-publishing-services/">book publishing services</Link>. From the initial manuscript evaluation to final proofreading, and including steps such as detailed editing, layout design, and cover art creation, we've got you covered. We also offer guidance through the often complex world of distribution, marketing, and copyright registration. Our commitment is to deliver a professional, seamless service that allows your unique voice to reach readers worldwide. Entrust your literary journey to our expert team.</p>

                        </Col>

                    </Row>

                    <Row className='mt-4'>
                        {card.map((item, i) => {
                            return (
                                <Col className={`${styles.post} col-md-3`} key={i}>


                                    <div className={styles.flipcard}>
                                        <div className={styles.flipcardinner}>
                                            <div className={`${styles.flipcardfront}  ${styles.flipcardfront1}`}>
                                                <Image loading="lazy" width={80} height={80} className='img-fluid' src={item.image} alt="book_writing_cube"></Image>
                                                <h3>{item.subTitle}</h3>
                                            </div>
                                            <div className={styles.flipcardback}>
                                                <h3 className='text-white'>{item.title}</h3>
                                                <p className='text-white'>{item.pra}</p>

                                            </div>
                                        </div>
                                    </div>


                                </Col>
                            )
                        })}




                    </Row>

                </Container>

            </div>
        </>

    )
}

export default Bookpublishingservicesweoffer