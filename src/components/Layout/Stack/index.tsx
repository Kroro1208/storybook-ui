import { cn } from "@/utils";
import { Box, type BoxProps } from "../Box";

type StackProps = BoxProps;

export const Stack = ({className, ...props}: StackProps) => {
    return (
        <Box className={cn("flex flex-col items-start, clasName")} {...props}/>
    )
}