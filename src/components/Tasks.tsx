import React, { useState } from 'react';

export function Tasks() {
  const [ tasks, setTasks] = useState([]);
  return (
    <div className='bg-gray-600 h-full flex items-center justify-center'>
      <div className=' w-[736px]'>
        <p className='text-blue-500 font-bold font-inter text-sm'>Tarefas criadas <span>{tasks.length}</span></p>
      </div>
    </div>
  );
}

