"use client";

import { motion } from "framer-motion";
import { Store, Package, Grid, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const stats = [
    { name: "Locales Activos", value: "24", icon: Store, trend: "+2" },
    { name: "Productos", value: "1,245", icon: Package, trend: "+12%" },
    { name: "Categorías", value: "12", icon: Grid, trend: "0" },
    { name: "Registros de Precio", value: "8,924", icon: DollarSign, trend: "+1k" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">Dashboard</h1>
        <p className="text-slate-400 mt-1">Bienvenido al panel de control de Cheaper.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">
                  {stat.name}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-indigo-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                <p className="text-xs text-indigo-400 mt-1">
                  {stat.trend} desde el mes pasado
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-slate-900 border-slate-800 col-span-1">
          <CardHeader>
            <CardTitle className="text-slate-100">Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-slate-400 h-32 flex items-center justify-center border border-dashed border-slate-800 rounded-lg bg-slate-950/50">
              Pronto: Gráficos de actualización de precios
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800 col-span-1">
          <CardHeader>
            <CardTitle className="text-slate-100">Productos Top Tendencia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-slate-400 h-32 flex items-center justify-center border border-dashed border-slate-800 rounded-lg bg-slate-950/50">
              Pronto: Lista de productos más guardados en favoritos
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
