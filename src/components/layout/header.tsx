"use client";

import { Bell, Menu, Search, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
    return (
        <header className="h-16 bg-background/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-10 transition-colors">
            <div className="flex items-center flex-1">
                <Button variant="ghost" size="icon" className="md:hidden mr-2 text-slate-400 hover:text-primary">
                    <Menu className="w-5 h-5" />
                </Button>
                <div className="relative w-full max-w-md hidden md:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Search..."
                        className="w-full bg-black/20 border-white/5 pl-10 text-slate-200 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-all rounded-full"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-primary transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_var(--color-primary)]"></span>
                </Button>
                <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/20 transition-all shadow-[0_0_10px_rgba(var(--color-primary),0.1)]">
                    <UserCircle className="w-5 h-5 text-primary" />
                </div>
            </div>
        </header>
    );
}
