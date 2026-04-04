# Guía de migración: monorepo → librería standalone

## El problema raíz

En el monorepo los estilos de Astro están **scoped por defecto** (Astro añade atributos data-astro-xxx). Al sacar el tool a librería con `import './style.css'` en el frontmatter, los estilos se vuelven **globales**. Todo lo que no esté namespaceado rompe el proyecto que lo importe.

---

## 1. Setup del proyecto

Copia `jjlmoya-utils-template` como base. Luego `package.json`:

```json
{
  "name": "@jjlmoya/utils-CATEGORIA",
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./data": "./src/data.ts"
  },
  "files": ["src"],
  "publishConfig": { "access": "public" }
}
```

---

## 2. Estructura de cada tool

```
src/tool/miTool/
  index.ts          ← tipo UI, NauticalToolEntry, exports
  logic.ts          ← funciones puras sin DOM
  component.astro   ← HTML + script cliente
  style.css         ← CSS con namespace propio
  seo.astro         ← SEO markup
  bibliography.astro
  i18n/
    es.ts
    en.ts
    fr.ts
```

---

## 3. CSS — las 3 reglas absolutas

### Regla 1: Variables internas, nunca del host

El host puede tener cualquier tema. Define todo dentro del root selector:

```css
.mi-tool {
  /* Light mode - valores hardcodeados */
  --t-bg: #fff;
  --t-bg-muted: #f1f5f9;
  --t-text: #0f172a;
  --t-text-muted: #475569;
  --t-text-dim: #64748b;
  --t-border: #e2e8f0;
  --t-shadow: rgba(0, 0, 0, 0.05);
  --t-primary: #3b82f6;
  --t-primary-on: #fff;
  --t-accent: #6366f1;
  --t-cyan: #0891b2;
  --t-success: #10b981;
  --t-warning: #f59e0b;
  --t-error: #f43f5e;
}

.theme-dark .mi-tool {
  --t-bg: #0f172a;
  --t-bg-muted: #1e293b;
  --t-text: #f8fafc;
  --t-text-muted: #94a3b8;
  --t-text-dim: #64748b;
  --t-border: #334155;   /* mas claro que bg-muted para que se vean los bordes */
  --t-shadow: rgba(0, 0, 0, 0.3);
  --t-primary: #60a5fa;
  --t-primary-on: #fff;
  --t-accent: #818cf8;
  --t-cyan: #22d3ee;
  --t-success: #34d399;
  --t-warning: #fbbf24;
  --t-error: #fb7185;
}
```

### Regla 2: Namespace en TODAS las clases

Usa el **nombre completo del tool** como prefijo. Nunca siglas — con 400 herramientas `mt-` o `sc-` no significan nada:

```css
/* ROTO - rompe el host */
.card { }
.input-group { }
.table-wrapper { }

/* ROTO - siglas ilegibles con muchos tools */
.mt-card { }
.sc-input-group { }

/* CORRECTO */
.tide-calculator-card { }
.sail-area-input-group { }
.speed-converter-table-wrapper { }
```

El root selector es el unico sin sufijo adicional: `.tide-calculator { }`

### Regla 3: Sin selectores de elemento globales

```css
/* ROTO - se aplica a TODOS los inputs de la pagina */
input[type='number'] { color: white; }
table { border-collapse: collapse; }
th { padding: 1rem; }

/* CORRECTO - scopeado */
.mi-tool input[type='number'] { color: var(--t-primary-on); }
.mi-tool table { border-collapse: collapse; }
.mi-tool th { padding: 1rem; }
```

---

## 4. Stylelint — reglas que muerden

```css
/* ROTO - color nombrado */
color: white;
background: black;

/* CORRECTO */
color: var(--t-primary-on);
background: var(--t-bg);

/* ROTO - rgba moderno */
box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);

/* CORRECTO - sintaxis legacy */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* ROTO - multiples declaraciones en una linea */
.mt-card { display: flex; gap: 1rem; }

/* CORRECTO */
.mt-card {
  display: flex;
  gap: 1rem;
}
```

---

## 5. ESLint — reglas que muerden

```ts
// ROTO - complexity > 8
function calculate() {
  if (a) { if (b) { if (c) { ... } } }
}

// CORRECTO - extrae helpers
function readInputs() { ... }
function computeResult(inputs) { ... }
function calculate() {
  const inputs = readInputs();
  updateDisplay(computeResult(inputs));
}

// ROTO - max-lines-per-function > 30
// ROTO - ternario anidado
const x = a ? b ? c : d : e;
// CORRECTO - if/else

// ROTO - max-params > 4
function fn(a, b, c, d, e) { }
// CORRECTO - agrupa en objeto
function fn(a, b, opts: { c: string; d: string; e: string }) { }
```

---

## 6. i18n — el error que paraliza TODAS las paginas

`getStaticPaths()` importa TODOS los archivos i18n. Si uno tiene error de sintaxis → todas las paginas del host se rompen con un error confuso.

**El error mas comun: frances con apostrofes**

```ts
// ROTO - el linter cambia comillas dobles a simples → rompe apostrofes
const ui = {
  title: 'Calculateur d'Autonomie',  // SyntaxError
}

// CORRECTO - strings con apostrofes SIEMPRE con comillas dobles
const ui = {
  title: "Calculateur d'Autonomie",
}
```

Usa comillas dobles para todos los strings en `fr.ts` aunque el linter quiera cambiarlas.

---

## 7. Pasar i18n al cliente (patron data-ui)

En Astro el frontmatter es server-side. Para pasar strings al `<script>` cliente:

```astro
---
const { ui } = Astro.props;
---

<div id="mi-tool-root" data-ui={JSON.stringify(ui)}>
  ...
</div>

<script>
  const root = document.getElementById('mi-tool-root') as HTMLElement;
  const ui = JSON.parse(root.dataset.ui as string) as Record<string, string>;
  // ui.miLabel etc. disponible en el cliente
</script>
```

---

## 8. localStorage — la regla save/calculate

```ts
// ROTO - save() dentro de calculate() sobreescribe el estado al cargar
function calculate() {
  const val = input.value;
  display.textContent = compute(val);
  save(); // NUNCA aqui
}

// CORRECTO - save() solo desde eventos de usuario
input.addEventListener('input', () => {
  calculate();
  save();   // solo aqui
});

function load() {
  // restore inputs from localStorage
  calculate(); // NO llama a save()
}
```

Usa keys unicas para no colisionar con otros tools:

```ts
localStorage.setItem('jjlmoya-CATEGORIA-TOOL', JSON.stringify(data));
```

---

## 9. Dependencias opcionales (jsPDF, html2canvas, etc.)

```json
// package.json
"peerDependencies": {
  "jspdf": ">=2.0.0"
},
"peerDependenciesMeta": {
  "jspdf": { "optional": true }
},
"devDependencies": {
  "jspdf": "^2.x.x"   // tambien aqui, si no Vite falla en dev
}
```

En el componente, **importacion dinamica** dentro del handler, nunca estatica:

```ts
// ROTO - Vite intenta resolver en build aunque no este instalado
import jsPDF from 'jspdf';

// CORRECTO - solo se resuelve cuando el usuario hace click
btn.addEventListener('click', async () => {
  const [jsPDFMod, html2canvasMod] = await Promise.all([
    import('jspdf'),
    import('html2canvas'),
  ]);
  const jsPDF = jsPDFMod.default;
  const html2canvas = html2canvasMod.default;
  // ...
});
```

---

## 10. Checklist antes de publicar

### CSS
- [ ] Todas las clases tienen prefijo unico (mt-, sc-, ec-...)
- [ ] Sin selectores de elemento globales (`table`, `th`, `td`, `input[type=...]`)
- [ ] Variables internas definidas en el root selector con valores hardcodeados
- [ ] Bloque `.theme-dark .root { }` con overrides de dark mode
- [ ] Sin colores nombrados (`white`, `black`, `red`...)
- [ ] `rgba()` con comas, no `rgb()` moderno

### TypeScript / ESLint
- [ ] Ninguna funcion > 30 lineas
- [ ] Complejidad ciclomatica <= 8 por funcion
- [ ] Sin ternarios anidados
- [ ] Sin mas de 4 params por funcion
- [ ] Sin comentarios en el codigo

### i18n
- [ ] `fr.ts` usa comillas dobles en strings con apostrofes
- [ ] Los 3 locales (es/en/fr) tienen exactamente las mismas keys que el interface TUI
- [ ] Sin imports dinamicos en nivel de modulo

### Componente
- [ ] `data-ui={JSON.stringify(ui)}` para pasar i18n al cliente
- [ ] `save()` solo en event listeners, nunca en `calculate()` ni `load()`
- [ ] Key localStorage unica: `jjlmoya-CATEGORIA-TOOL`
- [ ] Deps opcionales con `import()` dinamico dentro del handler

### Final
- [ ] `npm run lint` → 0 errores, 0 warnings
- [ ] `npm run test` → todos pasan
- [ ] Probar en modo claro y oscuro
- [ ] Probar con multiples tools en la misma pagina simultaneamente
