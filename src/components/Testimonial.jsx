import React from 'react'
import Section from './common/Section'
import avatar from '../assets/avatar.png'

const Testimonial = () => {

    const TESTIMONIALS = [
        {
            id:1,
            image: avatar,
            name: "John Deo",
            comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio blanditiis totam odit minus sapiente, facilis placeat ab ipsum, assumenda officia repellat cum!"
        },
        {
            id:2,
            image: avatar,
            name: "Rahul Sharma",
            comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio blanditiis totam odit minus sapiente, facilis placeat ab ipsum, assumenda officia repellat cum!"
        },
        {
            id:3,
            image: avatar,
            name: "Harry Bhai",
            comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio blanditiis totam odit minus sapiente, facilis placeat ab ipsum, assumenda officia repellat cum!"
        },
    ]

  return (
    <Section title='Testimonial 💬' subtitle='This is what my other client have to say about me. I accept client from all round the world.'>

        <div className='max-w-xl flex flex-col gap-2'>
            {TESTIMONIALS.map(({id, image, name, comment})=>(
                    <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                        <div className='w-1/3'>
                            <img src={image} alt={name} 
                            className='w-20 h-20 object-cover object-top pt-2'/>
                        </div>
                        <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                            <h3 className='text-xl font-semibold'>{name}</h3>
                            <p className='text-sm font-extralight'>{comment}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    </Section>
  )
}

export default Testimonial
