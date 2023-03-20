import React from 'react';

interface Props {
  className?: string;
}

export const Waves: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width='1440'
      height='595'
      viewBox='0 0 1440 595'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
    >
      <path d='M-3 0H1443V595H-3V0Z' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_187_362'
            transform='scale(0.000321469 0.00078125)'
          />
        </pattern>
        <image
          id='image0_187_362'
          width='3112'
          height='1280'
        />
      </defs>
    </svg>
  );
};