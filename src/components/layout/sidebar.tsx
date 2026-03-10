"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Store,
    Grid,
    Package,
    Settings,
    Shield,
} from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Tiendas", href: "/tiendas", icon: Store },
    { name: "Categorías", href: "/categorias", icon: Grid },
    { name: "Productos", href: "/productos", icon: Package },
    { name: "Configuración", href: "/configuracion", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-slate-950 border-r border-slate-800 hidden md:flex flex-col">
            <div className="h-16 flex items-center px-6 border-b border-slate-800">
                <Shield className="w-6 h-6 text-indigo-500 mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Cheaper Admin
                </span>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                        <Link key={item.name} href={item.href} className="block relative">
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <div
                                className={`relative flex items-center px-3 py-3 rounded-lg transition-colors ${isActive
                                        ? "text-indigo-400"
                                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                <span className="font-medium">{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <div className="bg-slate-900 rounded-lg p-4 text-sm text-slate-400 text-center">
                    <p>Cheaper MVP</p>
                    <p className="text-xs mt-1 opacity-60">Admin V1.0</p>
                </div>
            </div>
        </aside>
    );
}
