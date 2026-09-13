import React from 'react';
import BannerImg from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="w-120 mx-8">
        <h1 className="text-5xl font-bold">
  <span className="block text-[#111827]">
    Build Your Ideal
  </span>

  <span className="block brand-gradient bg-clip-text text-transparent">
    Development Stack
  </span>
</h1>
<p className='my-5 text-gray-600 text-xl'>
    Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
</p>
<div className='flex gap-10 '>
    <button className="brand-gradient px-6 py-3 rounded-lg text-white">
  Explore technologies
</button>
    <button>Learn more</button>
</div>
            </div>
            <div>
        <img src={BannerImg} alt="BannerImg" />
            </div>
        </div>
    );
};

export default Banner;