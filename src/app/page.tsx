"use client";

import { motion } from "framer-motion";
import { Store, Package, Grid, DollarSign, TrendingUp, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { name: "Lun", local: 4000, exterior: 2400 },
  { name: "Mar", local: 3000, exterior: 1398 },
  { name: "Mié", local: 2000, exterior: 9800 },
  { name: "Jue", local: 2780, exterior: 3908 },
  { name: "Vie", local: 1890, exterior: 4800 },
  { name: "Sáb", local: 2390, exterior: 3800 },
  { name: "Dom", local: 3490, exterior: 4300 },
];

export default function Dashboard() {
  const stats = [
    { name: "Locales Activos", value: "24", icon: Store, trend: "+2" },
    { name: "Productos", value: "1,245", icon: Package, trend: "+12%" },
    { name: "Categorías", value: "12", icon: Grid, trend: "0" },
    { name: "Registros de Precio", value: "8,924", icon: DollarSign, trend: "+1k" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Dashboard</h1>
          <p className="text-slate-400 mt-1 font-medium flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            Visión general del ecosistema Cheaper en tiempo real
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse"></div>
            Sistema Operativo
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Card className="bg-card/40 backdrop-blur-xl border-white/5 relative overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 blur-2xl group-hover:opacity-30 transition-opacity">
                <stat.icon className="w-24 h-24 text-primary" />
              </div>
              <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                <CardTitle className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.name}
                </CardTitle>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_10px_var(--color-primary)]/20">
                  <stat.icon className="h-4 w-4 text-primary drop-shadow-[0_0_5px_var(--color-primary)]" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-black text-white drop-shadow-md">{stat.value}</div>
                <p className="text-xs font-medium text-emerald-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {stat.trend} este mes
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <motion.div
          className="col-span-7 lg:col-span-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="bg-card/40 backdrop-blur-xl border-white/5 h-full">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Fluctuación de Precios Generales
              </CardTitle>
              <CardDescription className="text-slate-400">
                Comparativa de precios locales vs productos exteriores en los últimos 7 días.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorLocal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorExterior" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                      dataKey="name"
                      stroke="#64748b"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis
                      stroke="#64748b"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(var(--color-primary), 0.2)'
                      }}
                      itemStyle={{ color: '#fff', fontWeight: 600 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="exterior"
                      stroke="var(--color-secondary)"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorExterior)"
                      activeDot={{ r: 6, fill: "var(--color-secondary)", stroke: "#fff", strokeWidth: 2 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="local"
                      stroke="var(--color-primary)"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorLocal)"
                      activeDot={{ r: 6, fill: "var(--color-primary)", stroke: "#fff", strokeWidth: 2, className: "drop-shadow-[0_0_8px_var(--color-primary)]" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="col-span-7 lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="bg-primary/5 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <CardHeader>
              <CardTitle className="text-white text-lg">Locales Destacados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 relative z-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 bg-black/20 p-3 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-[0_0_10px_var(--color-primary)]/40">
                      L{i}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Local {i}</p>
                      <p className="text-xs text-slate-400">140 productos actualizados</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
