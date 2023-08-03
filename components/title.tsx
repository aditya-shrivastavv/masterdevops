import React from 'react'
import Ztext from 'react-ztext'

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
  return title.map((letter) => (
    <Ztext
      depth="2rem"
      direction="both"
      event="pointer"
      eventDirection="default"
      eventRotation="30deg"
      fade={false}
      layers={10}
      perspective="none"
      style={{
        fontSize: '6.2rem',
        fontWeight: 'bold',
        marginInline: '2px',
        color: letter.color,
      }}
    >
      {letter.letter}
    </Ztext>
  ))
}

export default Title
