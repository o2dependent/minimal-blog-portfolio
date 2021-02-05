import React from "react"
import NavProtector from "../components/navProtector"

export default function contact() {
  return (
    <div className="container mx-auto">
      <NavProtector type="main" />
      <h1 className="text-4xl text-center mb-4">Contact</h1>
      <p className="max-w-md mx-auto text-center mb-1 text-gray-500 dark:text-gray-400">
        Thanks for taking the time to reach out!
      </p>
      <p className="max-w-md mx-auto text-center mb-1 text-gray-500 dark:text-gray-400">
        How can I help you today?
      </p>
      <form
        onSubmit={e => e.preventDefault()}
        className="mx-auto grid gap-4 p-4 md:p-8 grid-cols-1 md:grid-cols-2 place-content-center"
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
