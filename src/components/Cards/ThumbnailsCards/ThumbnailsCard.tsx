import Image from 'next/image';
import React from 'react';

import { thumbnail } from '@/types/ThumbnailsTypes'; // Asegúrate de que el tipo 'thumbnail' esté adaptado a tus datos
import { title } from 'process';

export default function ThumbnailsCard({ imageUrl }: thumbnail) {
  return (
    <li className='' key={title}>
      <figure className='relative overflow-hidden rounded-lg'>
        <Image
          src={imageUrl} // Usa el URL del thumbnail
          alt={title}
          width={1080} // Define el ancho base
          height={720} // Define la altura base
          layout='responsive' // Hace que la imagen sea responsive
          loading='lazy'
          className='rounded-md object-cover' // Asegura que la imagen mantenga su proporción y se adapte al contenedor
          quality={75} // Mantén la calidad alta
          placeholder='blur' // Añade el placeholder
          blurDataURL='/path-to-low-res-image.jpg' // Si tienes una imagen de baja resolución
        />
      </figure>
    </li>
  );
}
