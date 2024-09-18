import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentProps } from "react"

const buttonStyle = cva([
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disable:cursor-not-allowed"
    ],
    {
        variants: {
            variant: {
                solid: "",
                outline: "border-2",
                ghost: "transition-colors duration-300"
            },
            size: {
                sm: "px-4 py-2 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-4 py-2 text-lg",
            },
            colorscheme: {
                primary: "text-white"
            }
        },
        compoundVariants: [
            {
              variant: "solid",
              colorscheme: "primary",
              className: "bg-primary-500 hover:bg-primary-600",
            },
            {
              variant: "outline",
              colorscheme: "primary",
              className:
                "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
            },
            {
              variant: "ghost",
              colorscheme: "primary",
              className: "text-primary-600 bg-transparent hover:bg-primary-100",
            },
          ],
          defaultVariants: {
            variant: "solid",
            size: "md",
            colorscheme: "primary",
          },
    }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyle>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonStyle({variant, size, colorscheme}))} {...props} />
    )

})

export default Button
