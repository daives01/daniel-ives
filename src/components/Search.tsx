import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import React from "react"
import { Button } from "./ui/button"
import { commandOptions } from "./CommandOptions"
import * as allIcons from "@tabler/icons-react"


export default function Search() {
    const [open, setOpen] = React.useState(false)

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
            <div className="w-full flex-1 md:w-auto md:flex-none">
                <Button className="h-12 md:h-8 w-full md:w-40 lg:w-64 justify-between text-muted-foreground rounded-[0.5rem] bg-background" variant="outline" onClick={() => setOpen(true)}>
                    <span className="inline-flex">Search</span>
                    <kbd className="text-muted-foreground hidden md:inline"><span className="text-xs">⌘</span>K</kbd>
                </Button>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search" />
                {commandList()}
            </CommandDialog>
        </>
    )
}