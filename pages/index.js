import Head from 'next/head'
import HomeMain from '../components/HomeMain'



export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>MKHS</title>
        <meta name="description" content="MKHS" />
        <link rel="icon" href="/mkhs.png" />
      </Head>
  <HomeMain/>
    </div>
  )
}
