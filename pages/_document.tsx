import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='h-[1200px]' style={{ backgroundColor: "#0f0e13", 
    backgroundImage: "radial-gradient(at 0 0,#100f15 0,transparent 50%),radial-gradient(at 50% 0,#2f3e6a 0,transparent 50%),radial-gradient(at 100% 0,#5a25a1 0,transparent 50%)" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
