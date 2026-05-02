"use client";

import { useState } from "react";
import {
  CalendarCheck,
  Cpu,
  Wrench,
  Zap,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  const whatsappNumber = "595975430489";

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    modelo: "",
    serial: "",
    servicio: "Diagnóstico",
    fecha: "",
    detalle: "",
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function enviarWhatsApp() {
    const mensaje =
      `Hola, quiero agendar una revisión técnica.%0A%0A` +
      `Nombre: ${form.nombre}%0A` +
      `Teléfono: ${form.telefono}%0A` +
      `Email: ${form.email}%0A` +
      `Modelo de máquina: ${form.modelo}%0A` +
      `Serial: ${form.serial}%0A` +
      `Servicio: ${form.servicio}%0A` +
      `Fecha deseada: ${form.fecha}%0A` +
      `Detalle: ${form.detalle}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, "_blank");
  }

  const servicios = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Diagnóstico de máquinas",
      desc: "Revisión técnica de equipos de minería, controladoras, hashboards, sensores y rendimiento.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Reparación de PSU",
      desc: "Diagnóstico y reparación de fuentes de poder para máquinas de minería.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Reparación de hashboards",
      desc: "Revisión de chips, líneas de voltaje, componentes dañados y problemas de temperatura.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Mantenimiento preventivo",
      desc: "Limpieza, revisión térmica, ventilación y mantenimiento para evitar fallas futuras.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-sky-700">
              CRYPTOIBER
            </h1>
            <p className="text-xs text-slate-500">Servicio técnico para minería</p>
          </div>

          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <a href="#servicios" className="hover:text-sky-700">Servicios</a>
            <a href="#proceso" className="hover:text-sky-700">Proceso</a>
            <a href="#citas" className="hover:text-sky-700">Agendar cita</a>
            <a href="#contacto" className="hover:text-sky-700">Contacto</a>
          </nav>

          <a href="#citas" className="rounded-full bg-sky-700 px-5 py-2 text-sm font-bold text-white hover:bg-sky-800">
            Agendar
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-sky-100 via-white to-blue-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 w-fit rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
              Diagnóstico y reparación profesional
            </span>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Revisión técnica para máquinas de minería
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Agenda revisiones, muestra tus servicios y recibe información técnica del equipo antes de que llegue al taller.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#citas" className="rounded-2xl bg-sky-700 px-7 py-4 font-bold text-white shadow-lg hover:bg-sky-800">
                Agendar revisión
              </a>
              <a href="#servicios" className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 hover:border-sky-400 hover:text-sky-700">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-10 w-10 text-sky-700" />
              <div>
                <h3 className="text-xl font-black">Agenda inteligente</h3>
                <p className="text-sm text-slate-500">Solicitud directa por WhatsApp</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Diagnóstico", "Reparación", "Mantenimiento", "Presupuesto"].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <p className="font-bold">{item}</p>
                  <p className="mt-1 text-sm text-slate-500">Disponible con cita previa</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Servicios</p>
          <h3 className="mt-3 text-3xl font-black md:text-5xl">Qué ofrecemos</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s) => (
            <article key={s.title} className="rounded-3xl bg-white p-7 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 text-sky-700">{s.icon}</div>
              <h4 className="text-xl font-black">{s.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proceso" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Proceso</p>
            <h3 className="mt-3 text-3xl font-black md:text-5xl">Cómo trabajamos</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {[
              "El cliente solicita la cita.",
              "Recibimos los datos del equipo.",
              "Se realiza el diagnóstico.",
              "Enviamos informe o presupuesto.",
              "Reparamos tras aprobación.",
            ].map((step, i) => (
              <div key={step} className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky-700 text-lg font-black text-white">
                  {i + 1}
                </div>
                <p className="text-sm font-semibold leading-6">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="citas" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Citas</p>
            <h3 className="mt-4 text-3xl font-black md:text-5xl">Solicita una revisión</h3>
            <p className="mt-5 leading-8 text-slate-300">
              Este formulario abre WhatsApp con todos los datos cargados para que puedas recibir solicitudes fácilmente.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" placeholder="Nombre" onChange={(e) => updateField("nombre", e.target.value)} />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" placeholder="Teléfono" onChange={(e) => updateField("telefono", e.target.value)} />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600 md:col-span-2" placeholder="Correo electrónico" onChange={(e) => updateField("email", e.target.value)} />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" placeholder="Modelo de máquina" onChange={(e) => updateField("modelo", e.target.value)} />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" placeholder="Serial" onChange={(e) => updateField("serial", e.target.value)} />
              <select className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" onChange={(e) => updateField("servicio", e.target.value)}>
                <option>Diagnóstico</option>
                <option>Reparación</option>
                <option>Mantenimiento</option>
                <option>Presupuesto</option>
              </select>
              <input type="date" className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" onChange={(e) => updateField("fecha", e.target.value)} />
              <textarea className="min-h-36 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600 md:col-span-2" placeholder="Describe el problema" onChange={(e) => updateField("detalle", e.target.value)} />
              <button onClick={enviarWhatsApp} className="rounded-2xl bg-sky-700 px-6 py-4 font-black text-white shadow-lg hover:bg-sky-800 md:col-span-2">
                Enviar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div>
            <h4 className="text-2xl font-black text-sky-400">CRYPTOIBER</h4>
            <p className="mt-3 text-sm leading-6 text-slate-400">Servicio técnico especializado en máquinas de minería.</p>
          </div>

          <div>
            <h5 className="font-black">Contacto</h5>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-400"><Phone className="h-4 w-4" /> +595 xxx xxx xxx</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-400"><Mail className="h-4 w-4" /> contacto@cryptoiber.com</p>
          </div>

          <div>
            <h5 className="font-black">Ubicación</h5>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4" /> Paraguay</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
