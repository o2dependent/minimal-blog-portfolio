import React, { useState } from "react"
import styled from "styled-components"
import NavProtector from "../components/navProtector"
import SEO from "../components/seo"
import colors from "../helpers/colors"
import mixins from "../helpers/mixins"

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
    <Container>
      <SEO title="Contact" description="Send a message to Ethan Olsen." />
      {message !== "" && <Alert>{message}</Alert>}
      <NavProtector type="main" />
      <Title>Contact</Title>
      <Text>Thanks for taking the time to reach out!</Text>
      <Text>
        Let me know what you are thinking and I'll get back to you soon.
      </Text>
      <Form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <OneWide>
          <label>
            Name
            <br />
            <Input onChange={handleChange} type="text" name="name" />
          </label>
        </OneWide>
        <OneWide>
          <label>
            Email
            <br />
            <Input onChange={handleChange} type="email" name="email" />
          </label>
        </OneWide>
        <TwoWide>
          <label>
            Message
            <br />
            <TextArea onChange={handleChange} name="message"></TextArea>
          </label>
        </TwoWide>
        <TwoWide>
          <Button type="submit">Send</Button>
        </TwoWide>
      </Form>
    </Container>
  )
}

// --- styled components ---
const Container = styled.div`
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 2rem;
  }
`

const Title = styled.h1`
  font-size: 2.25rem /* 36px */;
  line-height: 2.5rem /* 40px */;
  text-align: center;
  margin-bottom: 1rem;
`

const Text = styled.p`
  margin: 0 auto;
  text-align: center;
  color: ${colors.gray[400]};
`

const Form = styled.form`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  place-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const OneWide = styled.p`
  margin: 0;
`

const TwoWide = styled.p`
  margin: 0;
  @media (min-width: 768px) {
    grid-column: span 2 / span 2;
  }
`

const Button = styled.button`
  height: 3rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 0.25rem;
  color: ${colors.gray[200]};
  background-color: ${colors.main.light};

  .dark & {
    background-color: ${colors.main.dark};
    color: ${colors.gray[900]};
  }
`

const Input = styled.input`
  width: 100%;
`

const TextArea = styled.textarea`
  width: 100%;
`

const Alert = styled.p`
  border-radius: 0.25rem;
  padding: 1rem;
  background-color: ${colors.main.light};
  font-weight: 500;
  color: ${colors.gray[200]};

  .dark & {
    background-color: ${colors.main.dark};
    color: ${colors.gray[900]};
  }
`
