import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
}

export function Button({ className = "", variant = "default", size = "default", children, ...props }: ButtonProps) {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none"

  // Variant styles
  const variantStyles = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-500 text-white hover:bg-purple-500/20",
    ghost: "text-white hover:bg-white/10",
    link: "text-purple-500 underline-offset-4 hover:underline",
  }

  // Size styles
  const sizeStyles = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-xs",
    lg: "h-11 px-8 text-base",
    icon: "h-10 w-10",
  }

  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
    
  )
}

export { Button as default }