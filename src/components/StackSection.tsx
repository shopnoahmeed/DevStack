import React, { useState } from 'react';
import {use} from 'react'
import type { iStack } from '../types/type';
import StackCard from './StackCard'
import { toast } from 'react-toastify';
const fetchTechnologies = async():Promise<iStack[]> =>{
    const response =await fetch("/data.json");
    const data: iStack[] = await response.json()
    return data
}
const technologyPromise = fetchTechnologies()
const StackSection = () => {
    const technologies = use(technologyPromise)
    const [selectedStack, setSelectedStack] = useState<iStack[]>([])
    const addToStack = (technology: iStack) => {
  const alreadyAdded = selectedStack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setSelectedStack((currentStack) => [
    ...currentStack,
    technology
  ]);

  toast.success(`${technology.name} added to your stack!`);
};
    const removeFromStack = (id: number) => {
  const technology = selectedStack.find(
    (item) => item.id === id
  );

  setSelectedStack((currentStack) =>
    currentStack.filter((technology) => technology.id !== id)
  );

  if (technology) {
    toast.info(`${technology.name} removed from your stack!`);
  }
};
  const removeAll = () => {
  if (selectedStack.length === 0) return;

  setSelectedStack([]);

  toast.info('All technologies removed from your stack!');
};
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
      onAddToStack={addToStack}
      isAdded={selectedStack.some((item)=> item.id === technology.id)}
    />
  ))}
</div>
}     </div>
        {/* Your Stack */}
        {/* Your Stack */}
<div className="lg:col-span-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

  {/* Header */}
  <div>
    <h2 className="text-2xl font-bold text-slate-900">
      Your Stack
    </h2>

    <p className="mt-1 text-lg text-slate-400">
      {selectedStack.length}{" "}
      {selectedStack.length === 1 ? "Technology" : "Technologies"} Selected
    </p>
  </div>

  {/* Selected Technologies */}
  <div className="mt-6 space-y-2">
    {selectedStack.length === 0 ? (
      <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-5 py-10 text-center">
        <p className="text-sm font-medium text-slate-500">
          Your stack is empty
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Add technologies to build your stack.
        </p>
      </div>
    ) : (
      selectedStack.map((technology) => (
        <div
          key={technology.id}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4"
        >

          {/* Icon + Information */}
          <div className="flex items-center gap-3">

            <img
              src={technology.icon}
              alt={technology.name}
              className="h-10 w-10 object-contain"
            />

            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {technology.name}
              </h3>

              <p className="text-[11px] text-slate-400">
                {technology.category}
              </p>
            </div>

          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => removeFromStack(technology.id)}
            className="flex h-8 w-8 items-center justify-center text-2xl font-light text-slate-400 transition hover:text-slate-700"
          >
            ×
          </button>

        </div>
      ))
    )}
  </div>

  {/* Remove All */}
  <button
    type="button"
    onClick={removeAll}
    disabled={selectedStack.length === 0}
    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-red-300 py-3 text-base font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
  >
    {/* Trash icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 7h12M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7m-7 0 .7 12.2A1.5 1.5 0 0010.2 20h3.6a1.5 1.5 0 001.5-1.3L16 7M10 10v6m4-6v6"
      />
    </svg>

    Remove All
  </button>

</div>
        </div>
        </div>
        </section>
    );
};

export default StackSection;