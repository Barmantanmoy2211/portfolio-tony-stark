import React from 'react'
import Section from './common/Section'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import contact from "../assets/mobile.png"

const Contect = () => {

    const SOCIAL = [
        {
        id:1,
        link:"https://twitter.com",
        icon: <FaTwitter />
    },
        {
        id:2,
        link:"https://facebook.com",
        icon: <FaFacebook />
    },
        {
        id:3,
        link:"https://linkedin.com",
        icon: <FaLinkedin />
    },
]
  return (
    <Section title='Contact 📞' 
    subtitle='These are the ways you can get in touch with me, Hope to hear from you soon :)'>
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div>
                <img src={contact} alt="contect info" className='w-32 h-32' />
            </div>
            <div>
                <p className='max-w-x5 md:max-w-lg font-extralight'>
                    I am open talk regarding freelancing or full-time oppertunities. Fell free to contact me your perfered medium
                </p>
            </div>
            <div className='flex w-full items-center justify-evenly text-3
            '>
                {SOCIAL.map(({id, link, icon})=>(
                    <a href={link} target='_blank' rel="noopner noreferrer" className='duration-200 ease-in-out hover:text-rose-600'>{icon}</a>
                ))}
            </div>

            {/* buttom form */}
            <div className='p-8 
            text-left 
            w-full 
            flex 
            items-center 
            justify-center
            '
            >
                <form action="https://getform.io/f/5c808cb0-2d52-41d1-88d0-be8d0eaa6d1c" method="POST">
                    <div className='gap-4 
                    w-full
                    '
                    >
                        <div className='flex 
                        flex-col
                        '
                        >
                            <label className='
                            capitalize 
                            text-sm 
                            py-2 
                            font-extralight
                            '
                            >
                                name
                                </label>
                            <input 
                            type="text" 
                            name="name" 
                            className='
                            border-2 
                            rounded-lg 
                            p-3 
                            flex 
                            focus:outline-none 
                            border-gray-400 
                            dark:text-white 
                            dark:bg-gray-900' />
                        </div>
                        <div className='
                        flex 
                        flex-col 
                        my-2
                        '
                        >
                            <label className='
                            capitalize 
                            text-sm 
                            py-2 
                            font-extralight
                            '
                            >
                                Phone
                                </label>
                            <input 
                            type="text" 
                            name="phone" 
                            className='
                            border-2 
                            rounded-lg 
                            p-3 
                            flex 
                            focus:outline-none 
                            border-gray-400 
                            dark:text-white 
                            dark:bg-gray-900' />
                        </div>
                        <div className='
                        flex 
                        flex-col 
                        my-2
                        '
                        >
                            <label className='
                            capitalize 
                            text-sm 
                            py-2 
                            font-extralight
                            '
                            >
                                email
                                </label>
                            <input 
                            type="text"
                            name="email" 
                            className='
                            border-2 
                            rounded-lg 
                            p-3 
                            flex 
                            focus:outline-none 
                            border-gray-400 
                            dark:text-white 
                            dark:bg-gray-900
                            ' />
                        </div>
                        <div className='
                        flex 
                        flex-col 
                        my-2
                        '
                        >
                            <label className='
                            capitalize 
                            text-sm 
                            py-2 
                            font-extralight
                            '
                            >
                                message
                                </label>
                            <textarea 
                            name="message" 
                            rows="10" 
                            className='
                            border-2 
                            rounded-lg 
                            p-3 
                            flex 
                            focus:outline-none 
                            border-gray-400 
                            dark:text-white 
                            dark:bg-gray-900
                            resize-none
                            '
                            ></textarea>
                            
                        </div>
                    </div>

                    <div className='
                    flex 
                    items-center 
                    justify-center
                    '
                    >
                        <button className='
                        my-5 
                        bg-gradient-to-r 
                        from-rose-600 
                        to-teal-500 
                        tetx-white 
                        px-6 
                        py-3 
                        uppercase 
                        rounded-md 
                        tracking-wider 
                        cursor-pointer 
                        hover:scale-105 
                        duration-200
                        '
                        >
                            Send Message
                            </button>
                    </div>
                </form>
            </div>
        </div>

    </Section>
  )
}

export default Contect
