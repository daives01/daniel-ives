import { IconBrandGithub } from "@tabler/icons-react"

type SearchItem = {
    title: string
    icon?: string 
    keywords: string[] | null
    action: () => void
}

type SearchSection = {
    title: string
    items: SearchItem[]

}

export type SearchList = {
    sections: SearchSection[]
}

const navigate = (href: string) => {
    // create and click a link
    const a = document.createElement("a")
    a.href = href
    a.click()
}


const pages: SearchSection = {
    title: "Pages",
    items: [
        {
            title: "Home",
            icon: "IconHome",
            keywords: ["home", "main", "nav"],
            action: () => {
                navigate("/")
            },
        },
        {
            title: "About",
            icon: "IconUserCircle",
            keywords: ["about", "bio", "who"],
            action: () => {
                navigate("/about")
            },
        },
        {
            title: "Work",
            icon: "IconBriefcase2",
            keywords: ["work", "projects", "portfolio"],
            action: () => {
                navigate("/work")
            },
        }
    ],
}

const socials: SearchSection = {
    title: "Socials",
    items: [
        {
            title: "GitHub",
            icon: "IconBrandGithub",
            keywords: ["github", "code", "git"],
            action: () => {
                navigate("https://github.com/daives01")
            },
        },
        {
            title: "LinkedIn",
            icon: "IconBrandLinkedin",
            keywords: ["linkedin", "job", "work"],
            action: () => {
                navigate("https://linkedin.com/in/daniel-benjamin-ives")
            },
        },
    ],
}

const liveProjects: SearchSection = {
    title: "Live Projects",
    items: [
        {
            title: "Coffee Calculator",
            icon: "IconMug",
            keywords: [],
            action: () => {
                navigate("https://coffee-calculator.daniel-ives.com")
            },
        },
    ]
}

export const commandOptions: SearchSection[] = [pages, socials, liveProjects]
