"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

export function SearchConsole() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")

  // Get initial search query from URL if it exists
  React.useEffect(() => {
    const searchQuery = searchParams.get("q")
    if (searchQuery) {
      setQuery(searchQuery)
    }
  }, [searchParams])

  // Handle keyboard shortcut to open search console
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard"))}>
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/settings"))}>
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/projects"))}>
              <span>Projects</span>
              <CommandShortcut>⇧P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Recent Searches">
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  setQuery("analytics")
                  router.push("/search?q=analytics")
                })
              }
            >
              <span>analytics</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  setQuery("deployment")
                  router.push("/search?q=deployment")
                })
              }
            >
              <span>deployment</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  setQuery("documentation")
                  router.push("/search?q=documentation")
                })
              }
            >
              <span>documentation</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

