import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

const ContactForm = ({ func }) => {

  const ContactFormSubmission = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(e.currentTarget) {
      let values: { [key: string]: FormDataEntryValue } = {};
      const form = new FormData(e.currentTarget);
      for(var pair of form.entries()) {
          values[pair[0]] = pair[1];
      }
      e.currentTarget.reset();
      await func(values);
      toast.success("Thanks for connecting!!")
    }
  }

  return (
    <div className="isolate bg-transparent">
      <form onSubmit={(e) => ContactFormSubmission(e)} className="mx-auto max-w-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur p-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-white/70 mb-2">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/60 shadow-sm backdrop-blur focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-white/70 mb-2">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/60 shadow-sm backdrop-blur focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-white/70 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/60 shadow-sm backdrop-blur focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-white/70 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/60 shadow-sm backdrop-blur focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
              defaultValue={''}
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-lg bg-white/20 border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md backdrop-blur hover:bg-indigo-500/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm