"use client";
import { CoinsIcon, HomeIcon, Layers2Icon, MenuIcon, ShieldCheckIcon } from 'lucide-react';
import React, { useState } from 'react';
import Logo from './logo';
import Link from "next/link";
import { Button, buttonVariants } from './ui/button';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const routes = [
    {
        href: "/", // Fixed: Use "/" for the home route
        label: "Home",
        icon: HomeIcon
    },
    {
        href: "workflows",
        label: "Workflows",
        icon: Layers2Icon
    },
    {
        href: "credentials",
        label: "Credentials",
        icon: ShieldCheckIcon
    },
    {
        href: "billing",
        label: "Billing",
        icon: CoinsIcon
    }
];

function DesktopSidebar() {
    const pathname = usePathname();

    // Determine the active route
    const activeRoute = routes.find(route => {
        if (route.href === "/") {
            return pathname === "/"; // Handle home route separately
        }
        return pathname.includes(route.href);
    }) || routes[0];

    return (
        <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-flow bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
            {/* Logo Section */}
            <div className="flex items-center gap-2 border-b-[1px] border-separate p-4">
                <Logo />
            </div>

            {/* Credits Section */}
            <div className="p-4 text-sm font-medium text-muted-foreground">
                Todo Credits
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-2 gap-1">
                {routes.map(route => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={buttonVariants({
                            variant: activeRoute.href === route.href ? "sidebarActiveItem" : "sidebarItem",
                            className: "flex items-center gap-3 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        })}
                        aria-current={activeRoute.href === route.href ? "page" : undefined}
                    >
                        <route.icon size={20} aria-hidden="true" />
                        <span>{route.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}

function MobileSidebar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Determine the active route
    const activeRoute = routes.find(route => {
        if (route.href === "/") {
            return pathname === "/"; // Handle home route separately
        }
        return pathname.includes(route.href);
    }) || routes[0];
    
    return (
        <div className='md:hidden block border-separate bg-background'>
            <nav className="container flex items-center justify-between pax-8">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant={"ghost"} size={"icon"} aria-label="Open menu">
                            <MenuIcon/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[280px] sm:w-[300px] space-y-4" side={"left"}>
                        <div className="flex items-center gap-2 border-b-[1px] border-separate p-4">
                            <Logo />
                        </div>
                        <div className='flex flex-col gap-1'>
                            {routes.map(route => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={buttonVariants({
                                        variant: activeRoute.href === route.href ? "sidebarActiveItem" : "sidebarItem"
                                    })}
                                    onClick={() => setOpen(false)}
                                >
                                    <route.icon size={20} />
                                    {route.label}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
}

// Export components correctly
export { DesktopSidebar, MobileSidebar };