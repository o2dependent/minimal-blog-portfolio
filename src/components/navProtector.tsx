import React from "react"

type I_Type = "main" | "accent"

type I_NavProtectorProps = { type: I_Type }

export default function NavProtector({ type }: I_NavProtectorProps) {
  // --- functions ---
  const typeSwitch = () => {
    switch (type) {
      case "main":
        return (
          <div className="bg-gray-200 dark:bg-gray-900  w-full sticky -top-px	 h-15 z-10"></div>
        )
      case "accent":
        return (
          <div className="bg-white dark:bg-gray-800 w-full sticky -top-px h-15 z-10"></div>
        )
    }
  }

  return <>{typeSwitch()}</>
}
