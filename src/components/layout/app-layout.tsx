"use client";

import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-slate-900 text-slate-200 overflow-hidden font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    <div className="mx-auto max-w-6xl w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
