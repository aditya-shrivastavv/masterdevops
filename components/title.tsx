import React from 'react'
import Script from 'next/script'

const title = [
  {
    letter: 'M',
    color: '#FF00CC',
  },
  {
    letter: 'A',
    color: '#50BFE6',
  },
  {
    letter: 'S',
    color: '#FF9933',
  },
  {
    letter: 'T',
    color: '#66FF66',
  },
  {
    letter: 'E',
    color: '#FF355E',
  },
  {
    letter: 'R',
    color: '#2243B6',
  },
  {
    letter: 'D',
    color: '#A7F432',
  },
  {
    letter: 'E',
    color: '#FF5470',
  },
  {
    letter: 'V',
    color: '#E936A7',
  },
  {
    letter: 'O',
    color: '#0A7E8C',
  },
  {
    letter: 'P',
    color: '#D98695',
  },
  {
    letter: 'S',
    color: '#FFFF31',
  },
]

const Title = () => {
  return (
    <>
      <Script src="https://bennettfeely.com/ztext/js/ztext.min.js"></Script>

      <div className="flex justify-center">
        {title.map((letter) => (
          <span
            key={letter.color}
            data-z
            data-z-layers="10"
            data-z-depth="2rem"
            data-z-event="pointer"
            data-z-eventRotation="45deg"
            data-z-eventDirection="default"
            className={`font-bold mx-[2px] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}
            style={{
              color: letter.color,
            }}
          >
            {letter.letter}
          </span>
        ))}
      </div>
    </>
  )
}

export default Title
