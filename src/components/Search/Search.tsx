import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    Command,
} from "@/components/ui/command"
import React from "react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { commandOptions } from "./CommandOptions"
import * as allIcons from "@tabler/icons-react"
import { IconMenu2 } from "@tabler/icons-react"
import { useBreakpoint } from "../hooks/UseBreakpoint"


export default function Search() {
    const [open, setOpen] = React.useState(false)
    const { isAboveMd, md } = useBreakpoint("md")

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

    const commandList = () => {
        return (
            <CommandList>
                <CommandEmpty>No results found</CommandEmpty>
                {
                    commandOptions.map((section, i) => (
                        <CommandGroup className="pb-2" key={i} heading={section.title}>
                            {section.items.map((item, j) => (
                                <CommandItem key={j} value={item.title + item.keywords + section.title} onSelect={item.action}>
                                    {item.icon && allIcons[item.icon] && (
                                        <div className="pr-2">
                                            {React.createElement(allIcons[item.icon])}
                                        </div>
                                    )}
                                    <span>{item.title}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
            </CommandList>
        )
    }

    return (
        <>
            {isAboveMd ? (
                <>
            <Button className="h-12 md:h-8 w-auto md:w-40 lg:w-64 justify-between relative rounded-[0.5rem] bg-background inline-flex" variant="outline" onClick={() => setOpen(true)}>
                <span className="inline-flex text-muted-foreground">Search</span>
                <kbd className="pointer-events-none hidden h-5 absolute top-[0.3rem] right-[0.3rem] select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
                    <CommandDialog open={open} onOpenChange={setOpen}>
                        <CommandInput placeholder="Search" />
                        {commandList()}
                    </CommandDialog>
                </>
            ) : (
                <Popover>
                    <PopoverTrigger asChild>
                    <IconMenu2/>
                    </PopoverTrigger>
                    <PopoverContent className="w-screen">
                        <Command className="w-full">
                            <CommandInput placeholder="Search" />
                            {commandList()}
                        </Command></PopoverContent>
                </Popover>
            )}

        </>
    )
}