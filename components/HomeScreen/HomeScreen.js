import React, { useEffect, useState } from 'react'
import styles from './HomeScreen.module.css'
import axios from 'axios'

const HomeScreen = () => {
  const [name, setName] = useState('')
  const [fSem, setFSem] = useState('')
  const [sSem, setSSem] = useState('')
  const [tSem, setTSem] = useState('')
  const errorMessage =
    global && global.document && global.document.getElementById('errorMessage')
  const submitEventHandler = async (e) => {
    if (name && fSem && sSem && tSem) {
      e.preventDefault()
      const s1 = Number(fSem) * 30
      const s2 = Number(sSem) * 30
      const s3 = Number(tSem) * 21

      const val = (s1 + s2 + s3) / 81

      const result = val.toFixed(2)

      errorMessage.innerText = `Your CGAP is ${result}`
      errorMessage.className = 'pass'
      errorMessage.style.color = 'blue'
      const data = await axios.post(
        'https://cgpafinderproject.herokuapp.com/',
        {
          name: name,
          cgpa: result,
        }
      )
      setName('')
      setFSem('')
      setSSem('')
      setTSem('')
    } else {
      e.preventDefault()
      console.log('please enter any thing')
      errorMessage.className = 'error'
      errorMessage.style.color = 'red'
      console.log(errorMessage)
    }
  }
  return (
    <>
      <div className={styles.errorMessageContainer}>
        <span className={styles.errorMessage} id='errorMessage'>
          Please Enter All The Fields
        </span>
      </div>
      <main className={styles.container}>
        <section className={styles.bookImageContainer}>
          <img
            className={styles.bookImage}
            src='/img/img1.jpg'
            alt='book image'
          />
        </section>
        <section className={styles.infoContainer}>
          <p>
            A Simple Way to find the <span>cgpa</span>
          </p>
          <div className={styles.formDiv}>
            <form>
              <input
                type='text'
                placeholder='Enter Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='number'
                placeholder='Enter First Sem SGPA'
                value={fSem}
                onChange={(e) => setFSem(e.target.value)}
              />
              <input
                type='number'
                placeholder='Enter Second Sem SGPA'
                value={sSem}
                onChange={(e) => setSSem(e.target.value)}
              />
              <input
                type='number'
                placeholder='Enter Third Sem SGPA'
                value={tSem}
                onChange={(e) => setTSem(e.target.value)}
              />
              <button type='submit' onClick={submitEventHandler}>
                Check The CGPA
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomeScreen
