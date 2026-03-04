"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import {
  Home,
  Search,
  Calendar,
  Settings,
  User,
  User2,
  LogOutIcon,
  ChevronUp,
  Inbox
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const sideItems = [
  {
    id: "home",
    url: "/",
    label: "Home",
    icon: Home,
  },
  {
    id: "search",
    url: "/search",
    label: "Search",
    icon: Search,
  },
  {
    id: "inbox",
    url: "/inbox",
    label: "Inbox",
    icon: Inbox,
  },
  {
    id: "calendar",
    url: "/calendar",
    label: "Calendar",
    icon: Calendar,
  },
  {
    id: "settings",
    url: "/settings",
    label: "Settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" side="left">

      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <span className="font-semibold">Admin Panel</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      {/* CONTENT */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarMenu>
            {sideItems.map((item) => {
              const Icon = item.icon
              const active = pathname === item.url

              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={active}
                  >
                    <Link href={item.url}>
                      <Icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>

        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>

        <SidebarMenu>
          <SidebarMenuItem>

            <DropdownMenu>

              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User />
                  <span>John Doe</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent side="top" align="start">

                <DropdownMenuItem>
                  <User2 />
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem className="text-red-600">
                  <LogOutIcon />
                  Logout
                </DropdownMenuItem>

              </DropdownMenuContent>

            </DropdownMenu>

          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarFooter>

    </Sidebar>
  )
}