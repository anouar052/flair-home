"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { useTheme } from "./theme"
import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const { isDark } = useTheme()
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
          isDark ? "bg-white/20" : "bg-black/20"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
            isDark ? "bg-white" : "bg-black"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cn(
            "block size-5 shrink-0 rounded-full border-2 shadow-lg transition-all hover:scale-110 focus:outline-hidden focus:ring-2 disabled:pointer-events-none disabled:opacity-50",
            isDark 
              ? "border-white bg-white hover:ring-white/30 focus:ring-white/30" 
              : "border-black bg-white hover:ring-black/30 focus:ring-black/30"
          )}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
