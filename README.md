# CRYPTOIBER - Next.js corregido

Esta versión usa Next.js 14 y Tailwind CSS 3 estable para que los estilos carguen correctamente en Vercel.

## Subir a GitHub

Sube el contenido de esta carpeta, no la carpeta externa completa.

Debe quedar así en GitHub:

- app/
- public/
- package.json
- next.config.js
- tailwind.config.ts
- postcss.config.js

## Cambiar WhatsApp

En `app/page.tsx`, cambia:

```ts
const whatsappNumber = "595XXXXXXXXX";
```

por tu número real con código de país, sin `+`, espacios ni guiones.
