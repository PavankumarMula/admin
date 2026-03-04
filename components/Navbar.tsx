'use client'

import { ComputerIcon, LogOutIcon, Moon, MoonStarIcon, SunIcon, User } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "./ui/sidebar"

export const Navbar = () => {
    const {setTheme} = useTheme();
    return (
        <nav className=" p-4 flex items-center justify-between">
            {/* LEFT SIDE  */}
           <SidebarTrigger/>
            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
                <Link href='/'>DASHBOARD</Link>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Moon cursor='pointer'/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={()=>setTheme('dark')}><MoonStarIcon/>Dark</DropdownMenuItem>
                             <DropdownMenuItem onClick={()=>setTheme('light')}><SunIcon/>light</DropdownMenuItem>
                               <DropdownMenuItem onClick={()=>setTheme('system')}><ComputerIcon/>system</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>PM</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                             <DropdownMenuSeparator />
                            <DropdownMenuItem><User/>Profile</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive"><LogOutIcon/>Logout</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
               
            </div>
        </nav>
    )
}
