"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[14rem] md:auto-rows-[18rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col rounded-xl justify-between space-y-4 p-0 shadow-input transition duration-200 hover:shadow-xl overflow-hidden",
        "bg-white dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {children ? (
        children
      ) : (
        <>
          {header}
          <div className="p-4 transition duration-200 group-hover/bento:translate-x-2">
            {icon}
            {title && (
              <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">{title}</div>
            )}
            {description && (
              <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">{description}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}


