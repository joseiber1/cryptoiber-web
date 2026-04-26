# CRYPTOIBER - Web Next.js

Web profesional para mostrar servicios técnicos y recibir solicitudes de citas por WhatsApp.

## Cómo usar

```bash
npm install
npm run dev
```

Luego abre:

```bash
http://localhost:3000
```

## Publicar en Vercel

1. Sube este proyecto a GitHub.
2. En Vercel elige **Add New Project**.
3. Importa el repositorio.
4. Presiona **Deploy**.

## Cambiar número de WhatsApp

Edita el archivo:

```bash
app/page.tsx
```

Busca esta línea:

```ts
const whatsappNumber = "595XXXXXXXXX";
```

y reemplázala por tu número real con código de país, sin `+`, espacios ni guiones.
