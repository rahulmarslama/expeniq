import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { User2, ArrowDownLeft, ChevronDown, Home, Wallet, FolderOpen, PiggyBank, CreditCard } from "lucide-react"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupContent, SidebarGroupLabel, SidebarGroupAction } from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

export function AppSidebar() {
    const menuItems = [
        {
            title: "Transactions",
            icon: CreditCard,
            url: "/transactions",
        },
        {
            title: "Budget",
            icon: PiggyBank,
            url: "/budget",
        },
        {
            title: "Category",
            icon: FolderOpen,
            url: "/category",
        },
    ]
    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader className="py-6 rounded-lg">
                <SidebarMenu className="gap-6">
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Link to={"/"} className="flex items-center gap-3 py-2">
                                <Wallet className="text-blue-400" />
                                <div>
                                    <span className="font-bold text-white">Expendiq</span>
                                    <p className="text-xs text-gray-400">Manage your budget</p>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="mt-3">
                <SidebarGroup>
                    <SidebarMenu className="gap-2">
                        {menuItems.map((menu) => (
                            <SidebarMenuItem key={menu.title}>
                                <SidebarMenuButton asChild>
                                    <Link to={menu.url} className="py-2">
                                        <menu.icon />
                                        <span>{menu.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <User2 /> Admin
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}