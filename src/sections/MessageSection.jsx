import React from 'react'

const MessageSection = () => {
  return (
    <section className='message-content'>
      <div className='container flex-center mx-auto py-28 relative'>
        <div className='h-full w-full'>
            <div className='msg-wrapper'>
                <h1 className='first-message'>
                    strip up your fearless past and
                </h1>
                <div className='msg-text-scroll'>
                    <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                        <h2 className='text-red-brown'>fuel up</h2>
                    </div>
                </div>
                <h1 className='second-message'>
                    your future with every gulp of Perfect Protein
                </h1>
            </div>
            <div className='flex-center md:mt-20 mt-10'>
                <div className='max-w-md px-10 flex-center overflow-hidden'>
                    <p>
                        Rev up your rebel spirit and feed the adventure of life with 
                        SPYLT, where youre one chug away form epic nostalgia and 
                        fearless fun.
                    </p>
                </div>

            </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection
