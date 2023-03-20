import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <>
      <div
        className='relative flex content-center items-center justify-center pt-16 pb-32'
        style={{
          minHeight: '100vh',
        }}
      >
        <div
          id='hero'
          className=' absolute top-0 h-full w-full bg-cover bg-center'
          style={{
            backgroundImage:
              "url('https://weblium.com/blog/wp-content/uploads/2019/09/photo-1533135091724-62cc5402aa20.jpeg')",
          }}
        >
          <span
            id='blackOverlay'
            className='absolute h-full w-full bg-black opacity-25'
          ></span>
        </div>
        <div className='container relative mx-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='ml-auto mr-auto w-full px-4 text-center lg:w-6/12'>
              <div className='flex flex-col items-center text-center lg:flex lg:flex-row lg:space-x-10'>
                <Image
                  src='/assets/img/8bitpix.png'
                  className='bg-black-50 rounded-full border-solid border-green-800 shadow-2xl backdrop-blur-sm backdrop-brightness-50'
                  alt=''
                  width='200'
                  height='200'
                />

                <div className='lg:text-left   '>
                  <h1 className='font-mono text-6xl font-semibold text-white '>
                    LUIS
                  </h1>{' '}
                  <h1 className='font-mono text-6xl font-semibold text-white '>
                    CUEVA
                    <span className='box'>S</span>
                  </h1>
                  <div className='pt-2'>
                    <p className=' text-bold font-mono text-xl  text-gray-300 '>
                      <Typewriter
                        options={{
                          strings: [
                            'Full Stack Developer',
                            'DevOps Engineer',
                            'Cloud Engineer',
                            'Software Engineer',
                            'Web Developer',
                            'Chemical Engineer',
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                        }}
                      />
                    </p>
                    <p className='text-md font-mono text-gray-300 '>
                      Always learning new technologies. 💻
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='pointer-events-none absolute top-auto bottom-0 left-0 right-0 w-full overflow-hidden'
          style={{ height: '70px' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          ></svg>
        </div>
      </div>
    </>
  );
};
export default Header;