import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl text-blue-500 font-bold">
          Welcome to <a href="https://nextjs.org">Next.js with Tailwind CSS!</a>
        </h1>
      </main>
    </div>
  )
}
