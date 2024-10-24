import React from 'react';

const Title = ({title, des}) => {
    return (
        <div className='flex flex-col gap-4 mb-14 font-titlefont'>
            <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>{title}</h3>
            <h1 className='md:text-5xl text-3xl text-gray-200 font-bold capitalize'>{des}</h1>
        </div>
    );
};

export default Title;