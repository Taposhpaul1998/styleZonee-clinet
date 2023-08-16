import React from 'react';
import ReactLoading from 'react-loading'
const Loading = () => {
    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-white bg-opacity-20  z-10 flex items-center justify-center'>
            <div className='absolute z-20 w-60 rounded py-2 pr-2'>
                <div className='flex items-center justify-center'>
                    <ReactLoading type={'spin'} color={'#3498DB'} height={'20%'} width={'20%'} />
                </div>
            </div>
        </div>

    );
};

export default Loading;