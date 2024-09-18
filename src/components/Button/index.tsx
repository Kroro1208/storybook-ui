import type { ComponentProps } from "react"

type ButtonProps = ComponentProps<"button">;

const Button = ({...props }: ButtonProps) => {
  return (
    <button className="px-4 py-2 rounded-full bg-green-500 text-white" {...props} />
  )
}

export default Button
