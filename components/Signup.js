import React from 'react'
import styles from '@/styles/Signup.module.css'
import { useState } from "react";
import Router from 'next/router'
import axios from "axios";

const Signup = (props) => {

  const [score, setScore] = useState('Best time to jump on a quick call:');

  const handleSubmit = async (event) => {

    event.preventDefault()


    const data = {
      first: event.target.first.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    }



    const JSONdata = JSON.stringify(data)

    setScore('Wating For Send Data');

    axios.post("https://jsonplaceholder.typicode.com/posts", JSONdata)
      .then((response) => {
        setScore('Thank You');
        console.log(response.data);
      });

    const { pathname } = Router
    if (pathname == pathname) {
      Router.push('/thank-you')
    }

  }


  return (
    <div className={`${styles[props.bannershome]} ${styles[props.form]}`}>
        <h4 className={styles.getup}> <em className='color-blue font25'>Can't Reach Us?</em> </h4>
        <p className='font-f t-center'> <em>Drop your details, and we'll soon respond to your inquiry!</em> </p>
      <form onSubmit={handleSubmit}>
        <input type="text" className={styles.nametext} required name="first" placeholder="Full Name:" />
        <input type="email" className={styles.nametext} required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email Address:" />
        <input type="number" className={styles.nametext} required name="phone" placeholder="Phone Number:" />
        <textarea required className={styles.textareanew} name="message" cols="40" rows="10" placeholder="Your project brief:"></textarea>
        <button className={styles.freebtn} type="submit">{score} </button>
      </form>
    </div>
  )


}

export default Signup