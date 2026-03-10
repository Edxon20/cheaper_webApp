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
        <aside className="w-64 bg-card/40 backdrop-blur-xl border-r border-white/5 hidden md:flex flex-col relative z-20">
            <div className="h-16 flex items-center px-6 border-b border-white/5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 mr-3 shadow-[0_0_15px_var(--color-primary)]/50">
                    <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Cheaper
                </span>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1">
                <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Dashboard</p>

                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                        <Link key={item.name} href={item.href} className="block relative">
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="absolute inset-0 bg-primary/10 border-l-2 border-primary rounded-r-lg"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            <div
                                className={`relative flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                    ? "text-primary font-medium"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? "text-primary drop-shadow-[0_0_8px_var(--color-primary)]" : "text-slate-500"}`} />
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 rounded-2xl p-4 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-sm font-medium text-white drop-shadow-md">Cheaper MVP</p>
                    <p className="text-xs mt-1 text-slate-300">Admin V1.0</p>
                    <div className="mt-3 w-12 h-1 bg-primary/50 mx-auto rounded-full shadow-[0_0_10px_var(--color-primary)]"></div>
                </div>
            </div>
        </aside>
    );
}
