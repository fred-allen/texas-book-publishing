import React from 'react'
import Banner from '../../components/Banner'
import Bloglisting from '../../components/Bloglisting'
import Head from 'next/head'

const Blogs = () => {

  const blogsHead = <h1 className='font50 fw700 color-blue'>Blogs</h1>

  

  const bannertext = [
    {
      title: blogsHead,
      alignclass: 'blogbanclass',
      aboutbanners: 'blogsbanner',
    }
  ]

  const schema = { 
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Texas Book Publishing",
    "url": "https://texasbookpublishing.com/blogs/",
    "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "sameAs": [
      "https://texasbookpublishing.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ]
  }
  const schema1 = { 
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "bookwritingexperts",
    "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "@id": "",
    "url": "https://texasbookpublishing.com/blogs/",
    "telephone": "2132893888",
    "priceRange": "$99",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "445 S Figueroa St",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90071",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0536155,
      "longitude": -118.2568651
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://texasbookpublishing.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ] 
  }
  const schema2 = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "book writing services book writing company book writers affordable book writing services",
    "description": "book writing services book writing company book writers affordable book writing services book writing services book writing company book writers affordable book writing services",
    "provider": {
      "@type": "Organization",
      "name": "book writing services book writing company book writers affordable book writing services",
      "url": "https://texasbookpublishing.com/"
    },
    "serviceType": ["book writing services book writing company book writers affordable book writing services"],
    "areaServed": {
      "@type": "country",
      "name": "us"
    }
   }

  return (
    <>

      <Head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <title>Blogs - Book Writing</title>
        <link rel="canonical" href="/blogs" />
        <link rel="next" href="/blogs" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blogs - Book Writing" />
        <meta property="og:url" content="/blogs" />
        <meta property="og:site_name" content="Book Writing" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" />
      

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
        />

      </Head>

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          alignclass={item.alignclass}
          bannershome={item.aboutbanners}
        />
      )}


      <Bloglisting />



    </>
  )
}

export default Blogs