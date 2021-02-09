import React, { useState } from "react"
import NavProtector from "../components/navProtector"
import SEO from "../components/seo"

// --- encode for netlify form ---
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  // --- hooks ---
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({ email: "", name: "", message: "" })

  // --- handle functions ---
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    if (formData.email === "" || formData.name === "") {
      setMessage("Please fill out E-Mail and Name")
    } else {
      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...formData,
          }),
        })
        setFormData({ email: "", name: "", message: "" })
        setMessage(
          "Thank you for reaching out I will get back to you as soon as possible!"
        )
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div className="container max-w-2xl mx-auto p-4 md:p-8 ">
      <SEO title="Contact" description="Send a message to Ethan Olsen." />
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
        onSubmit={handleSubmit}
        className="mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 place-content-center"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <p className="m-0">
          <label>
            Name
            <br />
            <input
              onChange={handleChange}
              className="w-full"
              type="text"
              name="name"
            />
          </label>
        </p>
        <p className="m-0">
          <label>
            Email
            <br />
            <input
              onChange={handleChange}
              className="w-full"
              type="email"
              name="email"
            />
          </label>
        </p>
        <p className="md:col-span-2 m-0">
          <label>
            Message
            <br />
            <textarea
              onChange={handleChange}
              className="w-full"
              name="message"
            ></textarea>
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
