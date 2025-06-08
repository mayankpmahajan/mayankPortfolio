import React from 'react'

const Navbar = () => {
  return (
    <main className='mt-16'>
       <section className='flex flex-row  justify-center gap-16 bg-[#1e2e12] text-[#f3fca0] p-4 font-alfa'>
        <div className='text-[156px] font-extrabold'>
            <h2>about</h2>
        </div>

        <div className='mt-16'> 
            <div className='border-1 rounded-4xl p-1 w-20 text-center ml-72'>resume</div>
            <div className='w-96 mt-24 text-lg'>Welcome to my world of visual storytelling. I am Hanz, a passionate photographer dedicated to freezing moments in time With a keen eye for detail a alove for authentic emotions</div>
        </div>
       </section>
    </main>
  )
}

export default Navbar