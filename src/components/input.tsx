import React from 'react';
import { PlusCircle } from "phosphor-react";

export function Input() {
  return (
    <div className='max-w-[736px] flex justify-center items-center gap-8 bg-gray-600 m-auto'>
      <input
      className='py-4 px-4 bg-gray-500 rounded  -mt-8  w-full'
      placeholder='Adicione uma nova tarefa'
      type="text" />
      <button className='bg-blue-700 rounded flex flex-row justify-center items-center p-4 text-white-200  -mt-8'>
        Criar <span className=' ml-2'> <PlusCircle/> </span> 
      </button>
    </div>
  );
}
