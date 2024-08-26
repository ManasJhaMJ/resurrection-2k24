import React from 'react'

function ContactUs() {
  return (
    <section className='flex flex-wrap justify-center items-center my-10 px-4'>
      <div className=' flex flex-col items-center'>
        <h2 className='w-fit text-center text-6xl m-0 font-bold text-[#dcca87]'>Contact Us</h2>
        <p className='hidden md:block pb-6 text-center w-[80%]'>Want to sponsor us? Have Queries or Enquires? Want to have a chat about the events? Let us know.</p>
      </div>
      <form action="mailto:" className="space-y-8 mx-auto w-80">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#f5efdb] dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Email" required />

        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
          <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-500 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#f5efdb] dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
          <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-500 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#f5efdb] dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-[#f5efdb] sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
    </section>
  )
}

export default ContactUs