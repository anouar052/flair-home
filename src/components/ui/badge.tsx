import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        filter:
          "relative px-4 py-2.5 rounded-lg text-sm border-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

// Filter Badge with remove button
function FilterBadge({
  children,
  onRemove,
  className,
  isDark,
  ...props
}: React.ComponentProps<"div"> & {
  onRemove: () => void
  isDark: boolean
}) {
  return (
    <div
      className={cn(
        "relative px-2 py-1 rounded-full justify-center text-center text-sm border-2 inline-flex items-center",
        isDark ? "border-white/10 bg-white/10 text-white/90" : "border-black/10 bg-black/5 text-black/90",
        className
      )}
      {...props}
    >
      <span className="px-2 text-center">{children}</span>
      <button 
        onClick={onRemove} 
        className={cn(
          "absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium transition-all hover:scale-110",
          isDark 
            ? "bg-white text-black/70 hover:bg-black/30 hover:text-white border border-black/10" 
            : "bg-black text-white/70 hover:bg-white/30 hover:text-black border border-white/10"
        )}
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  )
}

export { Badge, badgeVariants, FilterBadge }
