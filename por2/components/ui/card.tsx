"use client"
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  const bounds = React.useRef<DOMRect | null>(null)

  return (
    <div
      onMouseLeave={(event) => {bounds.current = null}}
      onMouseEnter={(event) => {
        bounds.current = event.currentTarget.getBoundingClientRect();
      }}
      onMouseMove={(event) => {
        if(!bounds.current) return;
        // get coordinates
        const x = event.clientX - bounds.current.left;
        const y = event.clientY - bounds.current.top;

        // get percentages to 'normalize' card rotations
        const xPercent = x / bounds.current.width;
        const yPercent = y / bounds.current.height;

        const xRot = (xPercent - 0.5) * 20;
        const yRot = (0.5 - yPercent) * 20;

        console.table({yRot, xRot});

        // swap variables used because axes != mvmt
        event.currentTarget.style.setProperty("--x-rotation", `${yRot}deg`);
        event.currentTarget.style.setProperty("--y-rotation", `${xRot}deg`);
      }}
      data-slot="card"
      className={cn(
        // border-1 maybe idk
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 py-6 shadow-sm transition-colors duration-400 ease-in-out hover:border-blue-300 hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-2xl", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
