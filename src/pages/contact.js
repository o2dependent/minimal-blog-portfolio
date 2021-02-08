import React, { useState } from "react"
import NavProtector from "../components/navProtector"
import SEO from "../components/seo"

export default function Contact() {
  // --- hooks ---
  const [message, setMessage] = useState("")

  return (
    <div className="container max-w-2xl mx-auto p-4 md:p-8 ">
      <SEO title='Contact' description='Send a message to Ethan Olsen.' />
      {message !== "" && (
        <p className="rounded p-4 bg-red-500 dark:bg-blue-400">{message}</p>
      )}
      <NavProtector type="main" />
      <h1 className="text-4xl text-center mb-4">Contact</h1>
      <p className="mx-auto text-center mb-1 text-gray-500 dark:text-gray-400">
        Thanks for taking the time to reach out!
      </p>
      <p className="mx-auto text-center mb-1 text-gray-500 dark:text-gray-400">
        How can I help you today?
      </p>
      <form
        onSubmit={e => {
          e.preventDefault()
          setMessage(
            "Thank you for the message I will be to you as soon as possible!"
          )
        }}
        className="mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 place-content-center"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <p className="m-0">
          <label>
            Name
            <br />
            <input className="w-full" type="text" name="name" />
          </label>
        </p>
        <p className="m-0">
          <label>
            Email
            <br />
            <input className="w-full" type="email" name="email" />
          </label>
        </p>
        <p className="md:col-span-2 m-0">
          <label>
            Message
            <br />
            <textarea className="w-full" name="message"></textarea>
          </label>
        </p>
        <p className="md:col-span-2">
          <button
            className="h-12 w-full dark:text-gray-900 text-gray-200 font-medium rounded bg-red-500 dark:bg-blue-400"
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
    </div>
  )
}
