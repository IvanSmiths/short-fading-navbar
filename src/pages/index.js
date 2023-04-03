import Navbar from '@/components/Navbar'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <Navbar />
      <div className='hero'>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero commodi consequatur numquam quis explicabo corrupti nostrum voluptate a deserunt alias!</p>
        <span>Click me</span>
      </div>
      <p className='big'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloribus rem optio odio ab, obcaecati quam velit! Neque aliquam eius illo, incidunt suscipit tenetur placeat nisi et nobis, aspernatur culpa magni saepe. Maiores esse earum quibusdam quos eum quod magnam illo maxime? Dolores velit culpa officia. Iusto minima voluptates, omnis fugiat dolorum quae consequuntur expedita nostrum quis illo impedit architecto?</p>
    </main>
  )
}
