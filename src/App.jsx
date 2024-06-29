import './App.css'

const App = () => {
  return (
    <>
      {/* medium */}
      <main className='crop-circle-container hidden md:flex lg:hidden flex-col items-center w-full h-full'>
        <article className='circle circle1-md flex items-center justify-center'>Text</article>
        <article className='rectangle rectangle1-md flex items-center justify-center'>Text</article>
        <article className='circle circle2-md flex items-center justify-center'>Text</article>
        <article className='rectangle rectangle2-md flex items-center justify-center'>Text</article>
        <article className='circle circle3-md flex items-center justify-center'>Text</article>
        <article className='rectangle rectangle3-md flex items-center justify-center'>Text</article>
        <article className='circle circle4-md flex items-center justify-center'>Text</article>
        <article className='rectangle rectangle4-md flex items-center justify-center'>Text</article>
        <section className='circle5-container-md flex justify-center w-full h-full'>
          <article className='line line2-md'>Text</article>
          <article className='circle circle5-md flex items-center justify-center'>Text</article>
          <article className='line line3-md'>Text</article>
        </section>
        <section className='line-container-md flex'>
          <article className='line line4-md'>Text</article>
          <article className='line line5-md'>Text</article>
          <article className='line line6-md'>Text</article>
        </section>
      </main>
      {/* large */}
      <main className='crop-circle-container flex flex-col items-center w-full h-full'>
        {/* <article className='circle circle1 flex items-center justify-center'>Text</article>
        <article className='rectangle rectangle1 flex items-center justify-center'>Text</article> */}
        <article className='circle circle2 flex items-center justify-center mb-40'>Text</article>
        <article className='rectangle rectangle2 flex items-center justify-center'>Text</article>
        <article className='circle circle3 flex items-center justify-center mb-96'>Text</article>
        <article className='rectangle rectangle3 flex items-center justify-center'>Text</article>
        <section className='circle5-container flex justify-center w-full h-full'>
          {/* <article className='line line2'>Text</article> */}
          <article className='circle circle5 flex items-center justify-center'>Text</article>
          {/* <article className='line line3'>Text</article> */}
        </section>
        {/* <section className='line-container flex'>
          <article className='line line4'>Text</article>
          <article className='line line5'>Text</article>
          <article className='line line6'>Text</article>
        </section> */}
        {/* <article className='rectangle rectangle4 flex items-center justify-center'>Text</article>
        <article className='circle circle4 flex items-center justify-center'>Text</article> */}
      </main>
    </>
  )
}

export default App