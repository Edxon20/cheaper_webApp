"use client";

import { Bell, Menu, Search, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
    return (
        <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center flex-1">
                <Button variant="ghost" size="icon" className="md:hidden mr-2 text-slate-400">
                    <Menu className="w-5 h-5" />
                </Button>
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                        placeholder="Buscar..."
                        className="w-full bg-slate-900 border-slate-800 pl-10 text-slate-200 focus-visible:ring-indigo-500"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-400">
                    <Bell className="w-5 h-5" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center cursor-pointer">
                    <UserCircle className="w-5 h-5 text-indigo-400" />
                </div>
            </div>
        </header>
    );
}
