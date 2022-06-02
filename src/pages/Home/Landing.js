import React from 'react';
import BuscetGirl from '../../assets/image/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div class="hero lg:h-[60vh]  bg-accent mt-16">
                <div class="hero-content flex flex-col lg:flex-row  ">
                    <div className='pr-0 lg:pr-32'>
                        <p>Best Quality</p>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh]'>
                        <img className='h-full' src={BuscetGirl} class="max-w-sm" alt='img' />
                    </div>
                </div>
            </div>
            <div className='bg-base-200 relative z-30 mx-20 mt-[-40px] p-5 rounded-2xl '>
                <h1 className='text-2xl mb-3'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
                <button className='btn btn-primary mt-5'>REQUEST A QUOTE</button>
            </div>
        </>
    );
};

export default Landing;