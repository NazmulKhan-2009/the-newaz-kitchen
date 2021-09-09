import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Newaz Kitchen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>That is Home Page</h1>
      <Link href="/admin"><a>Admin Content</a></Link>
      

    </div>
  )
}
