# Portfolio — Julieta

Portfolio científico + blog de campo + página de apoyo (Cafecito/Patreon).

## Stack
- **Astro 4** — generación estática
- **Decap CMS** — edición visual desde el navegador (sin tocar código)
- **Netlify** — hosting gratuito + deploy automático
- **Dominio** — comprar en Hostinger (.com.ar ~$5-10 USD/año)

## Setup paso a paso

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/TU_USUARIO/julieta-portfolio
git push -u origin main
```

### 2. Deploy en Netlify
1. Ir a netlify.com → "Add new site" → "Import from Git"
2. Conectar el repo de GitHub
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### 3. Activar Netlify Identity (para el CMS)
1. En Netlify: Site settings → Identity → Enable Identity
2. Registration: cambiar a "Invite only"
3. Git Gateway: Identity → Services → Enable Git Gateway
4. Invitar el email de Julieta desde Identity → Invite users

### 4. Conectar dominio de Hostinger
1. En Netlify: Domain settings → Add custom domain
2. En Hostinger: DNS → cambiar nameservers a los de Netlify
   O agregar un registro A apuntando a la IP de Netlify

### 5. Personalizar antes de publicar
Buscar y reemplazar en todos los archivos:
- `https://cafecito.app/TUUSUARIO` → URL real de Cafecito
- `https://patreon.com/TUUSUARIO` → URL real de Patreon (si aplica)
- `ALIAS.ACÁ` → alias de CBU real
- `Julieta [Apellido]` → nombre completo real
- `julietaecologia.com.ar` en `astro.config.mjs` → dominio real

## Cómo publica Julieta una entrada

1. Ir a `https://su-dominio.com.ar/admin`
2. Loguearse con su email
3. "Nueva entrada" → escribir como si fuera un Google Doc
4. Subir fotos
5. Publicar → el sitio se actualiza solo en ~2 minutos

## Estructura del proyecto

```
src/
  content/blog/     ← posts de campo (.md)
  pages/
    index.astro     ← home
    investigacion.astro
    campo.astro     ← listado de posts
    campo/[slug].astro ← post individual
    apoyame.astro   ← cafecito + patreon + transferencia
  layouts/
    Layout.astro    ← nav + footer
  styles/
    global.css
public/
  admin/
    index.html      ← Decap CMS
    config.yml      ← configuración del CMS
```
