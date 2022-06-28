import React from 'react';
import { Logo } from './Logo';

export function Header() {
  return (
    <div  className='flex flex-row'>
      <Logo/><p className='text-blue-500 text-5xl'>TO<span className='text-purple-500'>DO</span></p>
    </div>
  );
}

