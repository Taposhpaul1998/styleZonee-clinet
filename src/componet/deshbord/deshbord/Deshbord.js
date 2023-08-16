import React from 'react';
import { Outlet } from 'react-router-dom';
import DeshbordMenu from './DeshbordMenu';

const Deshbord = () => {
    return (
        <div className='py-10 bg-slate-100'>
            <div className='w-[1375px] mx-auto flex justify-between'>
                {/* deshbord menu  */}
                <DeshbordMenu />
                <div className='bg-white p-6 w-[1040px] rounded'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Deshbord;