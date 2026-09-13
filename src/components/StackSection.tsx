import React, { useState } from 'react';
import {use} from 'react'
import type { iStack } from '../types/type';
import StackCard from './StackCard'
const fetchTechnologies = async():Promise<iStack[]> =>{
    const response =await fetch("/data.json");
    const data: iStack[] = await response.json()
    return data
}
const technologyPromise = fetchTechnologies()
const StackSection = () => {
    const technologies = use(technologyPromise)
    const [selectedStack, setSelectedStack] = useState<iStack[]>([])
    const addToStack = (technology:iStack)=>{
        setSelectedStack((currentStack)=>[
            ...currentStack, technology
        ])
    }
    return (
        
        <section>

        
        <div className='container mx-auto px-10'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {/* Technologies */}
        <div className='lg:col-span-2'>
        <h2 className="text-3xl font-bold">
  Explore the Technologies
</h2>

<p className="mt-2 text-gray-500">
  Discover the tools and technologies to build your perfect stack.
</p>
{
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {technologies.map((technology) => (
    <StackCard
      key={technology.id}
      technology={technology}
    />
  ))}
</div>
}     </div>
        {/* Your Stack */}
        <div className='lg:col-span-1'>
        <h2 className="text-2xl font-bold">
              Your Stack
            </h2>
        </div>
        </div>
        </div>
        </section>
    );
};

export default StackSection;