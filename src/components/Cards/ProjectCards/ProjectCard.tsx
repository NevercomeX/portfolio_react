// ProjectCard.tsx
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Project } from '@/types/ProyectTypes';

export default function ProjectCard({
  title,
  description,
  imageUrl,
  Technology,
}: Project) {
  const slug = title.toLowerCase().replace(/\s/g, '-');
  return (
    <>
      <li className='' key={title}>
        <Link
          href={`/projects/${slug}`}
          passHref
          prefetch={false}
          className='flex w-[22rem] h-[23rem] flex-col items-center rounded-md border-[1px] border-[#818181] text-center shadow-md text-white font-sans'
        >
          <figure className='relative h-[23rem] w-[22rem] overflow-hidden rounded-lg'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              loading='lazy'
              className=' rounded-md  top-0 left-0 px-4 pt-4 '
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              quality={50}
            />
          </figure>

          <article className='flex flex-col items-start p-4'>
            <div className='text-left font-bold '>
              <h1 className='text-lg md:text-xl '>{title}</h1>
            </div>
            <div className=' py-2 flex items-center gap-8 text-sm'>
              <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                <div className='flex flex-row items-center justify-center gap-2'>
                  {Technology.Icons.map((icon, index) => (
                    <React.Fragment key={`icon-${index}`}>
                      <Icon color='white' className=' h-6 w-6 ' icon={icon} />
                      {Technology.Icons.length > 1 &&
                      index !== Technology.Icons.length - 1 ? (
                        <p> | </p>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className='text-left py-2'>
              <p className='text-base'>{description}</p>
            </div>

            <div className='text-left py-2 hover:underline'>
              <p className='text-base'>See more →</p>
            </div>
          </article>
        </Link>
      </li>
    </>
  );
}
