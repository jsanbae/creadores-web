# Diseño y experiencia de usuario (UX/UI)

## Principios de diseño

- Estética inspirada en videojuegos (pixelart, colores neón, tipografías gaming)
- Paleta de colores que refleje la industria del gaming
- Elementos interactivos que simulen la experiencia de juego
- Interfaz limpia y minimalista, usando Tailwind CSS.
- Responsive para pantallas de 320px a 1920px.
- Modo oscuro automático según preferencias del sistema.
- Usa Smooth Scroll entre secciones
- Si no hay imagenes usa placeholders

---

## Esquema de Colores - Sitio Web

### 🎯 Colores Base

| Tipo            | Nombre       | Hex       | Uso sugerido                                              |
|-----------------|--------------|-----------|-----------------------------------------------------------|
| Primario        | Azul Claro   | `#00b4ec` | Botones principales, enlaces, íconos activos              |
| Secundario      | Rojo Coral   | `#ff3f26` | Botones de alerta, llamados a la acción, hover            |
| Fondo Principal | Azul Oscuro  | `#1A0F2B` | Fondo general del sitio, secciones, footer                |

---

### 🌈 Paleta Extendida

| Tipo                | Nombre         | Hex       | Uso sugerido                                        |
|---------------------|----------------|-----------|-----------------------------------------------------|
| Texto principal     | Blanco         | `#FFFFFF` | Texto principal sobre fondo oscuro                  |
| Texto secundario    | Gris Claro     | `#D6D6D6` | Subtítulos, textos de apoyo o descripciones         |
| Bordes / Divisores  | Gris Oscuro    | `#2E2E3E` | Líneas divisorias, bordes suaves                    |
| Fondo secundario    | Azul Muy Oscuro| `#12091C` | Tarjetas, hover, bloques destacados                 |
| Éxito               | Verde          | `#2ecc71` | Mensajes positivos, confirmaciones                  |
| Alerta              | Amarillo       | `#f1c40f` | Advertencias o mensajes informativos                |
| Error               | Rojo intenso   | `#e74c3c` | Validaciones fallidas, errores críticos             |

---

### 🧭 Ejemplos de Aplicación

| Elemento UI             | Color usado                                |
|-------------------------|--------------------------------------------|
| Header/Footer           | `#1A0F2B`                                  |
| Botón primario          | `#00b4ec` (fondo) + `#FFFFFF` (texto)      |
| Botón secundario        | `#ff3f26` (fondo) + `#FFFFFF` (texto)      |
| Texto normal            | `#FFFFFF`                                  |
| Texto deshabilitado     | `#D6D6D6`                                  |
| Fondo de tarjetas       | `#12091C`                                  |
| Hover de enlaces        | `#ff3f26`                                  |
| Líneas divisorias       | `#2E2E3E`                                  |
| Mensajes de éxito       | `#2ecc71`                                  |
| Mensajes de error       | `#e74c3c`                                  |
| Mensajes de alerta      | `#f1c40f`                                  |

---

### 🌙 Consideraciones para Tema Oscuro

- ✅ **Contraste**: Usa textos claros (`#FFFFFF` o `#D6D6D6`) sobre fondos oscuros para máxima legibilidad.
- ✅ **Tonos suaves**: Evita grises demasiado oscuros para texto (por ejemplo, no uses `#999999`), ya que pueden verse borrosos en pantallas de bajo brillo.
- ✅ **Acentos brillantes**: El azul (`#00b4ec`) y rojo (`#ff3f26`) funcionan muy bien como acentos en fondos oscuros, pero úsalos con moderación para no fatigar visualmente.
- ✅ **Sombra y profundidad**: Usa **fondos más oscuros** como `#12091C` en tarjetas o componentes para crear separación sin usar bordes.
- ✅ **Modos accesibles**: Considera un switch entre claro y oscuro si tu público lo necesita (especialmente en sitios con mucha lectura).
- ✅ **Focus y estados**: Añade indicadores visuales claros (bordes, sombras suaves o cambios de color) para estados de foco o interacción.

---

### ✅ Recomendaciones Generales

- Usa máximo **3–4 colores principales** y los demás con moderación.
- Asegúrate de tener suficiente **contraste** entre fondo y texto.
- Apoya el color con **íconos o texto** en mensajes importantes para mantener la accesibilidad.

---

## Layout

- Landing Page
- Diseño Responsive
- Menu TopNav con secciones.
- Footer

---

## Secciones

- **Home**: Sección Hero con titulo y subtitulo .
- **Sobre la Serie**: Información sobre la serie.
- **Producción**: Cronología y estado del proyecto (finalizado sept. 2026).
- **Equipo**: Integrantes del equipo.
- **Medios**: Galeria de imagenes y video del trailer.
- **Prensa**: Apariciones en medios.
- **Contacto**: Redes sociales y links.