import React from 'react'
import Title from './title'
import Link from 'next/link'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className="h-[600px]">
      <div className="w-full h-[600px] bg-[url('/sssurf.svg')] bg-no-repeat bg-bottom bg-contain absolute left-0">
        <section className="my-6">
          <Title />
        </section>
        <section className="flex justify-center mt-16">
          <Link
            href={'/learn/introduction'}
            className="bg-blue-600 text-gray-100 px-4 py-2 rounded-xl text-lg"
          >
            Start Learning ↗️
          </Link>
        </section>
        <div></div>
      </div>
    </div>
  )
}

export default Index
