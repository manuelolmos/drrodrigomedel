# Website Médico - Dr. [Nombre]

Sitio web profesional para médico urólogo, diseñado con HTML, CSS y JavaScript puro. Responsive y fácil de personalizar.

## Características

- Diseño responsive (adaptable a móviles, tablets y desktop)
- Navegación sticky con menú hamburguesa en móviles
- Secciones: Inicio, Trayectoria, Servicios, Contacto
- Formulario de contacto funcional
- Integración con WhatsApp
- Enlaces a redes sociales
- Animaciones suaves y modernas
- Optimizado para SEO

## Estructura del Proyecto

```
rodrigomedel/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── images/             # Carpeta para imágenes
│   └── doctor-profile.jpg  # Foto del doctor (agregar)
└── README.md           # Este archivo
```

## Instalación y Configuración

### 1. Agregar la foto del doctor

Coloca una foto profesional del doctor en la carpeta `images/` con el nombre `doctor-profile.jpg`. Tamaño recomendado: 400x400px o mayor.

### 2. Personalizar la información

Abre `index.html` y reemplaza los siguientes placeholders:

#### Información básica:
- `[Nombre]` / `[Nombre Completo]` - Nombre del doctor
- `[X]` - Años de experiencia
- `[Universidad]` - Universidad donde se graduó
- `[Sociedades Médicas]` - Asociaciones profesionales
- `[Cargo actual en institución]` - Posición laboral actual

#### Información de contacto:
- `[Calle y Número]` - Dirección del consultorio
- `[Ciudad, Código Postal]` - Ciudad y código postal
- `[NUMERO]` - Número de teléfono (formato: +54911XXXXXXXX para Argentina)
- `[EMAIL]` - Email de contacto
- `[Número]` - Números de matrícula

#### Enlaces de redes sociales:
- `[LINKEDIN_URL]` - URL del perfil de LinkedIn
- `[TWITTER_URL]` - URL del perfil de Twitter

**Ejemplo de número de WhatsApp:**
```html
href="https://wa.me/5491112345678?text=Hola,%20quisiera%20solicitar%20un%20turno"
```

### 3. Personalizar colores

Abre `styles.css` y modifica las variables CSS al inicio del archivo:

```css
:root {
    --primary-color: #0066cc;      /* Color principal */
    --primary-dark: #004c99;       /* Color principal oscuro */
    --secondary-color: #2d3748;    /* Color secundario */
    /* ... otros colores */
}
```

### 4. Personalizar servicios

En `index.html`, localiza la sección `<!-- Services Section -->` y modifica los servicios según la especialidad del doctor.

## Cómo Usar

### Opción 1: Abrir directamente
Simplemente abre el archivo `index.html` en tu navegador web.

### Opción 2: Servidor local (recomendado)

#### Usando Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Usando Node.js:
```bash
npx serve
```

Luego abre tu navegador en `http://localhost:8000`

## Integración del Formulario de Contacto

El formulario actualmente simula el envío. Para que funcione realmente, tienes varias opciones:

### Opción 1: FormSpree (Gratuito y fácil)

1. Regístrate en [FormSpree.io](https://formspree.io)
2. Crea un nuevo formulario y obtén tu Form ID
3. En `script.js`, descomenta y modifica la función `sendToFormSpree`:

```javascript
function sendToFormSpree(data) {
    fetch('https://formspree.io/f/TU_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        showFormStatus('¡Mensaje enviado con éxito!', 'success');
        contactForm.reset();
    })
    .catch(error => {
        showFormStatus('Error al enviar el mensaje.', 'error');
    });
}
```

4. Reemplaza `simulateFormSubmission(formData)` con `sendToFormSpree(formData)` en el event listener

### Opción 2: EmailJS

1. Regístrate en [EmailJS.com](https://www.emailjs.com)
2. Crea un servicio de email y un template
3. Agrega EmailJS SDK en `index.html` antes del cierre de `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("TU_PUBLIC_KEY");
</script>
```

4. Usa el código comentado en `script.js` para EmailJS

### Opción 3: Backend propio

Si tienes un servidor backend (PHP, Node.js, etc.), puedes modificar el fetch en `script.js` para enviar los datos a tu servidor.

## Despliegue (Hosting)

### Opciones gratuitas recomendadas:

1. **Netlify** (Recomendado)
   - Arrastra la carpeta del proyecto a [netlify.com/drop](https://app.netlify.com/drop)
   - Dominio personalizado gratuito con HTTPS

2. **Vercel**
   - Instala Vercel CLI: `npm i -g vercel`
   - Ejecuta: `vercel`
   - Sigue las instrucciones

3. **GitHub Pages**
   - Sube el proyecto a un repositorio de GitHub
   - Ve a Settings > Pages
   - Selecciona la rama main como source

4. **Cloudflare Pages**
   - Conecta tu repositorio de GitHub
   - Configuración automática

## Personalización Avanzada

### Agregar más secciones

Puedes agregar nuevas secciones siguiendo la estructura:

```html
<section id="nueva-seccion" class="nueva-seccion">
    <div class="container">
        <h2 class="section-title">Título de la Sección</h2>
        <!-- Contenido -->
    </div>
</section>
```

No olvides agregar el enlace en el menú de navegación.

### Cambiar fuentes

Para usar Google Fonts, agrega en el `<head>` de `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Nombre+De+Fuente:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Luego en `styles.css` modifica:

```css
body {
    font-family: 'Nombre De Fuente', sans-serif;
}
```

## Mantenimiento

### Actualizar información
Edita directamente `index.html` con cualquier editor de texto.

### Agregar más fotos
Coloca las imágenes en la carpeta `images/` y referéncialas en el HTML.

### Backup
Guarda una copia del proyecto completo antes de hacer cambios importantes.

## Soporte y Mejoras

### Mejoras futuras sugeridas:
- Blog de artículos médicos
- Sistema de citas online
- Galería de fotos/videos
- Testimonios de pacientes
- Preguntas frecuentes (FAQ)
- Chat en vivo

## Licencia

Este proyecto es de uso libre para fines profesionales médicos.

## Créditos

Desarrollado con HTML5, CSS3 y JavaScript vanilla.
Iconos: Font Awesome 6.4.0

---

Para preguntas o asistencia técnica, consulta con tu desarrollador web.
