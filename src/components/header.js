import { Link } from "gatsby"
import { doc } from "prettier"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import useSound from "use-sound"
import darkPop from "../sounds/darkPop.wav"
import lightPop from "../sounds/lightPop.wav"

const Header = ({ siteTitle }) => {
  // --- hooks ---
  // useSound
  const [playDark] = useSound(darkPop, { volume: 0.25 })
  const [playLight] = useSound(lightPop, { volume: 0.25 })
  // state
  const [isNavOpen, setIsNavOpen] = useState(false)

  // check for dark mode
  useEffect(() => {
    if (
      localStorage.getItem("dark") === "dark" ||
      (localStorage.getItem("dark") !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark")
    }
  }, [])
  // --- functions ---
  const toggleDarkMode = () => {
    const isBodyDark = document.body.classList.contains("dark")
    document.body.classList.toggle("dark")
    if (isBodyDark) {
      localStorage.setItem("dark", "light")
      playLight()
    } else {
      localStorage.setItem("dark", "dark")
      playDark()
    }
  }

  return (
    <header className="w-full sticky z-20 top-0 transition-colors h-15 bg-none md:bg-gray-200 md:dark:bg-gray-900">
      <nav className="hidden container h-full mx-auto md:flex justify-between px-4">
        <div className="flex h-full items-end gap-x-4">
          <h2 className="hover:border-b-1 border-b-0 border-gray-500 text-2xl font-normal m-0 flex items-center mb-3">
            <Link to="/">Ethan Olsen</Link>
          </h2>
          <h3 className="hover:border-b-1 border-b-0 border-gray-500 text-lg font-normal m-0 flex items-center mb-3">
            <Link to="/posts">Posts</Link>
          </h3>
          <h3 className="hover:border-b-1 border-b-0 border-gray-500 text-lg font-normal m-0 flex items-center mb-3">
            <Link to="/projects">Projects</Link>
          </h3>
        </div>
        <div className="text-lg flex h-full items-center gap-x-4">
          <button
            className="dark:hidden flex items-center justify-center"
            onClick={toggleDarkMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
            </svg>
          </button>
          <button
            className="dark:flex hidden items-center justify-center"
            onClick={toggleDarkMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 12c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5 5 2.238 5 5zm-5-7c.34 0 .672.033 1 .08v-2.08h-2v2.08c.328-.047.66-.08 1-.08zm-4.184 1.401l-1.472-1.473-1.415 1.415 1.473 1.473c.402-.537.878-1.013 1.414-1.415zm9.782 1.414l1.473-1.473-1.414-1.414-1.473 1.473c.537.402 1.012.878 1.414 1.414zm-5.598 11.185c-.34 0-.672-.033-1-.08v2.08h2v-2.08c-.328.047-.66.08-1 .08zm4.185-1.402l1.473 1.473 1.415-1.415-1.473-1.472c-.403.536-.879 1.012-1.415 1.414zm-11.185-5.598c0-.34.033-.672.08-1h-2.08v2h2.08c-.047-.328-.08-.66-.08-1zm13.92-1c.047.328.08.66.08 1s-.033.672-.08 1h2.08v-2h-2.08zm-12.519 5.184l-1.473 1.473 1.414 1.414 1.473-1.473c-.536-.402-1.012-.877-1.414-1.414z" />
            </svg>
          </button>
          <button className="max-h-10 h-full transition-colors dark:text-gray-900 text-gray-200 font-medium rounded bg-red-500 dark:bg-blue-400 w-23">
            <Link to="contact">contact</Link>
          </button>
        </div>
      </nav>
      <div
        className={`flex md:hidden h-4 w-4 bottom-2 right-2 shadow-md rounded-full fixed bg-gray-200 dark:bg-gray-900 p-8`}
      ></div>
      <nav
        className={`flex md:hidden z-20 fixed top-0 left-0 w-full h-full transition-colors bg-gray-200 dark:bg-gray-900 p-8`}
        style={{
          clipPath: isNavOpen
            ? "circle(100% at 50% 50%)"
            : "circle(2rem at calc(100% - 2.5rem) calc(100% - 2.5rem))",
          transition: "clip-path 750ms ease",
        }}
      >
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="absolute origin-center transform translate-y-2/4 translate-x-2/4 bottom-10 right-10 h-10 w-10 rounded-full focus:outline-none"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 18 24"
          >
            <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
          </svg>
        </button>
        <div className="flex flex-col w-full gap-4">
          <button
            onClick={toggleDarkMode}
            className="h-12 w-full rounded bg-red-500 dark:bg-blue-400"
          ></button>
          <h2 className="flex align-center justify-center h-12 w-full rounded bg-gray-600">
            <Link to="/" className="text-center align-middle">
              Ethan Olsen
            </Link>
          </h2>
          <h3 className="flex align-center justify-center h-12 w-full rounded bg-gray-600">
            <Link to="/posts" className="text-center align-middle">
              Posts
            </Link>
          </h3>
          <h3 className="flex align-center justify-center h-12 w-full rounded bg-gray-600">
            <Link to="/projects" className="text-center align-middle">
              Projects
            </Link>
          </h3>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
