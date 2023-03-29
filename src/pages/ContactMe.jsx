import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import ScrollTop from '../components/ScrollTop';

import { pageAnimation } from '../utils/animation';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const emailHandler = (e) => {
    e.preventDefault();
    window.open(
      `mailto:test.mailer.0080@gmail?subject=${subject}&body=${name}: ${message}`
    );
    setName('');
    setSubject('');
    setMessage('');
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <ContactStyle>
        <h1>Contact Me</h1>
        <div className='contact-wrapper'>
          <form onSubmit={emailHandler}>
            <input
              type='text'
              className='form-control'
              value={name}
              placeholder='NAME'
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type='text'
              className='form-control'
              value={subject}
              placeholder='SUBJECT'
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <textarea
              className='form-control'
              rows='10'
              placeholder='MESSAGE'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required></textarea>

            <button id='submit' type='submit'>
              <i className='ri-send-plane-fill'></i> &nbsp;SEND
            </button>
          </form>
          <div className='direct-contact-container'>
            <ul className='contact-list'>
              <li className='list-item'>
                <i className='ri-map-pin-2-fill'>
                  <span className='contact-text'>Pune, Maharashtra</span>
                </i>
              </li>

              <li className='list-item'>
                <i className='ri-phone-fill'>
                  <span className='contact-text'>
                    <a
                      href='https://wa.me/919623025044'
                      target='_blank'
                      rel='noreferrer'
                      title='Give me a call'>
                      (+91) 9623025044
                    </a>
                  </span>
                </i>
              </li>

              <li className='list-item'>
                <i className='ri-mail-fill'>
                  <span className='contact-text'>
                    <a
                      href='mailto:samvitaskarkal@gmail.com'
                      target='_blank'
                      rel='noreferrer'
                      title='Send me an email'>
                      samvitaskarkal@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul className='social-media-list'>
              <li>
                <a
                  href='https://github.com/SamvitaKarkal'
                  target='_blank'
                  className='contact-icon'
                  rel='noreferrer'>
                  <i className='ri-github-fill'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/samvita-karkal-354628168/'
                  target='_blank'
                  className='contact-icon'
                  rel='noreferrer'>
                  <i className='ri-linkedin-box-fill'></i>
                </a>
              </li>
            </ul>
            <hr />
            <div className='copyright'>&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </ContactStyle>
      <ScrollTop />
    </motion.div>
  );
};

const ContactStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
  overflow-y: hidden;
  overflow-x: hidden;
  h1 {
    text-align: center;
    padding: 40px 0;
    font-size: 60px;
    font-weight: 300;
    font-family: 'Courier New', Courier, monospace;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 6px;
  }

  .contact-wrapper {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  form {
    width: 500px;
    font-family: monospace;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin-right: 64px;
    @media screen and (max-width: 850px) {
      width: 80vw;
      margin: 0px;
    }
    @media screen and (min-width: 1024px) {
      width: 500px;
      margin-right: auto;
      padding-right: 24px;
    }

    button {
      margin-top: 24px;
      padding: 0.8rem !important;
      display: flex;
      justify-content: center;
      align-items: center;
      .ri-send-plane-fill {
        font-size: 14px;
        color: white;
      }
      &:hover {
        .ri-send-plane-fill {
          color: black;
        }
      }
    }
    .form-control,
    textarea {
      background-color: #000;
      color: #fff;
      letter-spacing: 1px;
    }
    input,
    textarea {
      padding: 12px;
      margin: 8px 0px;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      outline: none;
      border: 1px solid #dddddd;
      &:focus {
        box-shadow: 0 0 5px cyan;
        border: 1px solid cyan;
      }
    }
  }

  .direct-contact-container {
    margin-left: 64px;
    width: 400px;
    @media screen and (max-width: 850px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 24px;
      margin-left: 24%;
    }
    @media screen and (max-width: 320px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 24px;
      margin-left: 32%;
    }
  }

  .contact-list {
    list-style-type: none;
  }

  .list-item {
    line-height: 3;
    color: #aaa;
    i {
      font-size: 18px;
    }
  }

  .contact-text {
    font: 300 18px 'Lato', sans-serif;
    letter-spacing: 2px;
    color: #bbb;
    margin-left: 48px;
  }

  .contact-text a {
    color: #bbb;
    text-decoration: none;
    transition-duration: 0.2s;
  }

  .contact-text a:hover {
    color: #fff;
    text-decoration: none;
  }

  .social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    display: flex;
  }

  .social-media-list li a {
    color: #fff;
    text-decoration: none;
  }

  .social-media-list li {
    position: relative;
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 10px 24px 10px 3px;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .social-media-list li:hover {
    background-color: cyan;
    i {
      color: #fff;
    }
  }

  .copyright {
    font: 200 14px sans-serif;
    color: #fff;
    letter-spacing: 1px;
    text-align: left;
    margin-top: 24px;
  }

  hr {
    border-color: rgba(255, 255, 255, 0.6);
    width: 70%;
    margin: 12px 0px;
    @media screen and (max-width: 850px) {
      width: 80%;
    }
    @media screen and (max-width: 320px) {
      width: 70%;
    }
  }
`;

export default ContactMe;
