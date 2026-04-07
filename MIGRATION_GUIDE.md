# Guia de migracion: monorepo jjlmoya → libreria standalone

## Por que la primera migracion fue un infierno

En el monorepo los estilos de Astro estan **scoped por defecto** — Astro añade atributos
`data-astro-xxx` a cada elemento. Al extraer el tool a libreria con `import './style.css'`
en el frontmatter, los estilos se vuelven **globales**. Todo lo que no este namespaceado
rompe el proyecto que importe la libreria.

Ademas, las variables CSS del monorepo (`--border-color`, `--primary-base`, `--cyan`...)
no existen en el tema compartido real. Funcionaban porque el propio proyecto las definia.
En una libreria no puedes asumir nada del host.

---

## 0. Antes de escribir una sola linea — lee estos ficheros

```
eslint.config.js          ← reglas activas exactas
.stylelintrc              ← reglas CSS exactas
src/tool/endurance/       ← tool de referencia ya migrado
```

### Reglas ESLint activas (extraidas de eslint.config.js)

| Regla | Limite |
|---|---|
| `complexity` | max 8 por funcion |
| `max-lines-per-function` | max 30 (sin blancos ni comentarios) |
| `max-lines` | max 250 por fichero |
| `max-depth` | max 3 niveles de anidamiento |
| `max-params` | max 4 parametros |
| `no-nested-ternary` | prohibido |
| `no-comments/disallowComments` | prohibido — sin comentarios en el codigo |
| `custom/no-emojis` | prohibido |
| `@typescript-eslint/no-explicit-any` | prohibido |

> Los ficheros `*.astro` tienen `max-lines-per-function` a 50 y `complexity` desactivada.
> Los ficheros `i18n/*.ts` tienen `max-lines` desactivado.

### Reglas Stylelint activas (extraidas de .stylelintrc)

| Regla | Comportamiento |
|---|---|
| `color`, `fill`, `stroke` | obligatorio usar `var()` — nunca valor directo |
| `color-named` | prohibido — ni `white`, ni `black`, ni `red` |
| `color-function-notation` | legacy — `rgba(0, 0, 0, 0.5)` no `rgb(0 0 0 / 0.5)` |
| `alpha-value-notation` | number — `rgba(0,0,0,0.1)` no `rgba(0,0,0,10%)` |
| `declaration-no-important` | prohibido `!important` |
| `property-disallowed-list` | prohibido `font-family` |
| `unit-allowed-list` | solo: px rem em % vw vh svh svw fr deg s ms ch |
| `declaration-block-single-line` | max 1 declaracion por linea |

---

## 1. Setup del proyecto

Copia `jjlmoya-utils-template` como base. Ajusta `package.json`:

```json
{
  "name": "@jjlmoya/utils-CATEGORIA",
  "version": "1.0.0",
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./data": "./src/data.ts"
  },
  "files": ["src"],
  "publishConfig": { "access": "public" },
  "scripts": {
    "test": "vitest run",
    "lint": "eslint src/ --max-warnings 0 && stylelint \"src/**/*.{css,astro}\"",
    "preversion": "npm run lint && npm run test",
    "postversion": "git push && git push --tags",
    "patch": "npm version patch",
    "minor": "npm version minor",
    "major": "npm version major"
  }
}
```

---

## 2. Estructura de cada tool

```
src/tool/mi-tool/
  index.ts           ← interface TUI, NauticalToolEntry, ToolDefinition, exports
  logic.ts           ← funciones puras sin DOM (para tests)
  component.astro    ← HTML + <script> cliente
  style.css          ← CSS completamente namespaceado
  seo.astro          ← contenido SEO estatico
  bibliography.astro ← referencias
  i18n/
    es.ts
    en.ts
    fr.ts
```

### index.ts — patron exacto

```ts
import type { NauticalToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import MiToolComponent from './component.astro';
import MiToolSEO from './seo.astro';
import MiToolBibliography from './bibliography.astro';

export interface MiToolUI {
  [key: string]: string;   // obligatorio para que JSON.parse funcione
  labelUno: string;
  labelDos: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type MiToolLocaleContent = ToolLocaleContent<MiToolUI>;

export const miTool: NauticalToolEntry<MiToolUI> = {
  id: 'mi-tool',
  icons: { bg: 'mdi:ICONO', fg: 'mdi:ICONO' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { MiToolComponent, MiToolSEO, MiToolBibliography };

export const MI_TOOL_TOOL: ToolDefinition = {
  entry: miTool,
  Component: MiToolComponent,
  SEOComponent: MiToolSEO,
  BibliographyComponent: MiToolBibliography,
};
```

---

## 3. CSS — las 3 reglas que no se negocian

### Regla 1: Variables internas con valores hardcodeados

Nunca uses variables del host (`--border-color`, `--primary-base`, `--cyan`...).
El host puede tener lo que quiera. Define todo tu mismo:

```css
.mi-tool {
  --mi-tool-bg: #fff;
  --mi-tool-bg-muted: #f1f5f9;
  --mi-tool-text: #0f172a;
  --mi-tool-text-muted: #475569;
  --mi-tool-text-dim: #64748b;
  --mi-tool-border: #e2e8f0;
  --mi-tool-shadow: rgba(0, 0, 0, 0.05);
  --mi-tool-primary: #3b82f6;
  --mi-tool-primary-on: #fff;
  --mi-tool-accent: #6366f1;
  --mi-tool-cyan: #0891b2;
  --mi-tool-success: #10b981;
  --mi-tool-warning: #f59e0b;
  --mi-tool-error: #f43f5e;
}

.theme-dark .mi-tool {
  --mi-tool-bg: #0f172a;
  --mi-tool-bg-muted: #1e293b;
  --mi-tool-text: #f8fafc;
  --mi-tool-text-muted: #94a3b8;
  --mi-tool-text-dim: #64748b;
  --mi-tool-border: #334155;
  --mi-tool-shadow: rgba(0, 0, 0, 0.3);
  --mi-tool-primary: #60a5fa;
  --mi-tool-primary-on: #fff;
  --mi-tool-accent: #818cf8;
  --mi-tool-cyan: #22d3ee;
  --mi-tool-success: #34d399;
  --mi-tool-warning: #fbbf24;
  --mi-tool-error: #fb7185;
}
```

> `--mi-tool-border` en dark es `#334155` — MAS CLARO que `--mi-tool-bg-muted` (#1e293b).
> Si usas el mismo valor, los bordes son invisibles en modo oscuro.

### Regla 2: Nombre completo del tool como prefijo de clase

Nunca siglas. Con 400 herramientas `mt-` o `sc-` no significan nada:

```css
/* ROTO - rompe el host */
.card { }
.input-group { }

/* ROTO - siglas ilegibles */
.mt-card { }

/* CORRECTO - nombre completo */
.mi-tool-card { }
.mi-tool-input-group { }
.mi-tool-sidebar { }
```

El root selector `.mi-tool { }` es el unico sin sufijo adicional.

### Regla 3: Sin selectores de elemento globales

```css
/* ROTO - afecta a TODO el host */
input[type='number'] { color: white; }
table { border-collapse: collapse; }
th { padding: 1rem; }
td { font-size: 0.9rem; }

/* CORRECTO - scopeado al tool */
.mi-tool input[type='number'] { color: var(--mi-tool-primary-on); }
.mi-tool table { border-collapse: collapse; }
.mi-tool th { padding: 1rem; }
.mi-tool td { font-size: 0.9rem; }
```

---

## 4. Stylelint — errores exactos que vas a ver

```css
/* ERROR: color-named */
color: white;          /* → color: var(--mi-tool-primary-on) */
background: black;     /* → background: var(--mi-tool-bg) */

/* ERROR: declaration-strict-value — color/fill/stroke sin var() */
color: #fff;           /* → color: var(--mi-tool-primary-on) */
/* Excepcion: dentro de la definicion de custom property esta bien */
--mi-tool-bg: #fff;    /* esto SI es valido */

/* ERROR: color-function-notation */
rgba(0 0 0 / 0.1)      /* → rgba(0, 0, 0, 0.1) */
rgb(255, 255, 255)     /* → usar var() o hex */

/* ERROR: declaration-block-single-line-max-declarations */
.mi-tool-card { display: flex; gap: 1rem; }   /* → expandir */

/* ERROR: unit no permitida */
font-size: 16px;   /* px permitido */
width: 100dvw;     /* dvw NO esta en la lista — usar vw */
```

---

## 5. ESLint — errores exactos que vas a ver

```ts
// ERROR: complexity > 8
// Cada if/else/ternario/&&/||/case suma 1. Extrae helpers:
function calculate() {
  const data = readInputs();     // helper
  const result = compute(data);  // helper
  render(result);                // helper
}

// ERROR: max-lines-per-function > 30
// Parte las funciones grandes aunque sean logicamente una sola cosa.
// En .astro el limite es 50.

// ERROR: max-depth > 3
if (a) {
  if (b) {
    if (c) {
      if (d) { }  // ERROR - 4 niveles
    }
  }
}

// ERROR: no-nested-ternary
const x = a ? b ? c : d : e;   // ERROR
// → if/else

// ERROR: max-params > 4
function fn(a, b, c, d, e) { }  // ERROR
function fn(a, b, c, opts: { d: string; e: string }) { }  // OK

// ERROR: no-comments/disallowComments
// No hay comentarios. Ni uno. Ni de documentacion. Ni de TODO.
// Si el codigo necesita explicacion, renombra las variables.

// ERROR: custom/no-emojis
// Sin emojis en el codigo ni en los strings de i18n dentro de .ts
```

---

## 6. i18n — el error que rompe TODAS las paginas del host

`getStaticPaths()` importa dinamicamente los 3 ficheros i18n de cada tool.
Si cualquiera tiene un error de sintaxis, **todas las paginas del host** fallan con:

```
TypeError: Cannot read properties of undefined (reading 'title')
```

El error no dice donde esta el problema. Tendras que buscar a mano.

**El error mas comun: frances con apostrofes**

```ts
// ROTO — el linter auto-convierte " a ' y rompe los apostrofes
export const ui: MiToolUI = {
  title: 'Calculateur d'Autonomie',   // SyntaxError en runtime
};

// CORRECTO — comillas dobles en cualquier string con apostrofe
export const ui: MiToolUI = {
  title: "Calculateur d'Autonomie",
};
```

Usa comillas dobles para TODOS los strings en `fr.ts` por defecto. Si el linter
las cambia a simples y el string tiene apostrofe, volveras a tener el error.

**Los 3 ficheros i18n deben tener exactamente las mismas keys que el interface TUI.**
Si añades una key al interface, añadela a los 3 ficheros. TypeScript te avisara.

---

## 7. Pasar i18n al cliente — patron data-ui

El frontmatter de Astro es server-side. El `<script>` es cliente.
No puedes importar variables de Astro dentro del script. Usa el DOM:

```astro
---
import './style.css';
import type { MiToolUI } from './index';

interface Props { ui: MiToolUI; }
const { ui } = Astro.props;
---

<div id="mi-tool-root" class="mi-tool" data-ui={JSON.stringify(ui)}>
  <!-- HTML del tool -->
</div>

<script>
  const root = document.getElementById('mi-tool-root') as HTMLElement;
  const ui = JSON.parse(root.dataset.ui as string) as Record<string, string>;

  // Ahora ui.labelUno, ui.labelDos etc. disponibles en el cliente
</script>
```

---

## 8. localStorage — la regla save/calculate

**`save()` nunca dentro de `calculate()` ni de `load()`.**

```ts
// ROTO — al cargar la pagina, load() llama a calculate() que llama a save()
// sobreescribiendo los valores guardados con los inputs vacios iniciales
function calculate() {
  const val = parseFloat(input.value) || 0;
  display.textContent = String(val * 2);
  save();  // NUNCA aqui
}

// CORRECTO
input.addEventListener('input', () => {
  calculate();
  save();    // solo aqui — el usuario acaba de interactuar
});

function load() {
  const raw = localStorage.getItem('jjlmoya-CATEGORIA-TOOL');
  if (raw) {
    const data = JSON.parse(raw);
    input.value = data.val ?? '';
  }
  calculate();  // recalcula con los valores restaurados, NO llama a save()
}
```

Keys unicas para no colisionar entre tools:

```ts
localStorage.setItem('jjlmoya-CATEGORIA-TOOL-nombre', JSON.stringify(data));
// ejemplo: 'jjlmoya-nautical-endurance', 'jjlmoya-pets-calculator'
```

---

## 9. Dependencias opcionales (jsPDF, html2canvas...)

Si el tool tiene funcionalidades que dependen de librerias pesadas opcionales:

```json
// package.json
"peerDependencies": {
  "jspdf": ">=2.0.0",
  "html2canvas": ">=1.4.0"
},
"peerDependenciesMeta": {
  "jspdf": { "optional": true },
  "html2canvas": { "optional": true }
},
"devDependencies": {
  "jspdf": "^2.5.2",
  "html2canvas": "^1.4.1"
}
```

> Las devDependencies son necesarias aunque sean peerDeps. Sin ellas, Vite falla
> al resolver los imports dinamicos incluso en desarrollo.

En el componente, **importacion dinamica dentro del handler** — nunca en el top-level:

```ts
// ROTO — Vite intenta resolver 'jspdf' en build. Si no esta instalado en el
// proyecto que importa la libreria, toda la pagina falla al cargar.
import jsPDF from 'jspdf';

// CORRECTO — solo se resuelve cuando el usuario hace click
btn.addEventListener('click', async () => {
  const [jsPDFMod, html2canvasMod] = await Promise.all([
    import('jspdf'),
    import('html2canvas'),
  ]);
  const jsPDF = jsPDFMod.default;
  const html2canvas = html2canvasMod.default;
  // usar jsPDF y html2canvas aqui
});
```

---

## 10. Categoria y data.ts

Cada libreria tiene una categoria que agrupa sus tools y un `data.ts` para el consumidor.

### Estructura completa de category/

```
src/category/
  index.ts       ← NauticalCategoryEntry con los tools y i18n loaders
  seo.astro      ← componente SEO que renderiza el seo[] de i18n
  i18n/
    es.ts
    en.ts
    fr.ts        ← CategoryLocaleContent: slug, title, description, seo[]
```

### category/seo.astro — patron exacto

A diferencia de los tools, la categoria NO tiene `component.astro` ni `bibliography.astro`.
Solo necesita `seo.astro` para que el host renderice el contenido SEO de la categoria:

```astro
---
import { SEOTitle, SEOTip, SEOArticle, SEOList } from '@jjlmoya/utils-shared';
import { miCategoria } from './index';
import type { KnownLocale } from '../types';

interface Props {
  locale?: KnownLocale;
}

const { locale = 'es' } = Astro.props;
const content = await miCategoria.i18n[locale]?.();
if (!content) return null;

const { seo } = content;
---

<SEOArticle>
  {seo.map((section: any) => {
    switch (section.type) {
      case 'title':
        return <SEOTitle title={section.text} level={section.level || 2} />;
      case 'paragraph':
        return <p set:html={section.html} />;
      case 'list':
        return <SEOList items={section.items} />;
      case 'tip':
        return <SEOTip title={section.title}><Fragment set:html={section.html} /></SEOTip>;
      default:
        return null;
    }
  })}
</SEOArticle>
```

Añade solo los tipos de seccion que uses en tus i18n. Si añades `stats`, `table`, etc.,
importa el componente correspondiente de `@jjlmoya/utils-shared` y añade el case.

### category/index.ts — patron exacto

```ts
import type { NauticalCategoryEntry, CategoryLocaleContent } from '../types';
import { miTool } from '../tool/mi-tool';
import { otroTool } from '../tool/otro-tool';

export type { CategoryLocaleContent };

export const miCategoria: NauticalCategoryEntry = {
  icon: 'mdi:ICONO',
  tools: [miTool, otroTool],   // todos los tools de la categoria
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
```

### category/i18n/es|en|fr.ts — CategoryLocaleContent

La categoria NO tiene `seo.astro` separado — el SEO va inline en los ficheros i18n:

```ts
import type { CategoryLocaleContent } from '../index';

export const content: CategoryLocaleContent = {
  slug: 'mi-categoria',
  title: 'Mi Categoria',
  description: 'Descripcion de la categoria.',
  seo: [
    { type: 'title', text: 'Titulo SEO', level: 2 },
    { type: 'paragraph', html: 'Contenido SEO...' },
  ],
};
```

### src/index.ts — exportar el SEO de categoria

```ts
export * from './category';
export { default as MiCategoriaSEO } from './category/seo.astro';
```

El consumidor lo importa como componente Astro normal:

```ts
import { MiCategoriaSEO } from '@jjlmoya/utils-mi-categoria';
```

```astro
<MiCategoriaSEO locale={locale} />
```

### data.ts — exports publicos para el consumidor

```ts
export { miCategoria } from './category';
export type { CategoryLocaleContent } from './category';

export { miTool } from './tool/mi-tool';
export { otroTool } from './tool/otro-tool';

export type { MiToolUI, MiToolLocaleContent } from './tool/mi-tool';
export type { OtroToolUI, OtroToolLocaleContent } from './tool/otro-tool';

export type {
  KnownLocale,
  ToolLocaleContent,
  LocaleMap,
  NauticalToolEntry,
  NauticalCategoryEntry,
} from './types';
```

---

## 11. Checklist — ejecutar antes de `npm run minor`

Puedes pasarle este checklist a Claude en la proxima sesion junto con el codigo.

### CSS
- [ ] Cada clase lleva como prefijo el nombre completo del tool (`mi-tool-card`, no `mt-card`)
- [ ] Ninguna clase generica sin prefijo (`.card`, `.input-group`, `.table-wrapper`...)
- [ ] Ningun selector de elemento global (`table`, `th`, `td`, `input[type=...]`...)
  — scopearlos: `.mi-tool table { }`, `.mi-tool th { }`
- [ ] Variables `--mi-tool-*` definidas dentro del root selector con hex hardcodeado
- [ ] Bloque `.theme-dark .mi-tool { }` con overrides de dark mode
- [ ] `--mi-tool-border` en dark mode es mas claro que `--mi-tool-bg-muted` (#334155 vs #1e293b)
- [ ] Sin colores nombrados (`white`, `black`, `red`...)
- [ ] `rgba(r, g, b, a)` con comas — no `rgb(r g b / a)`
- [ ] `color`, `fill`, `stroke` siempre usan `var()` — nunca valor directo
- [ ] Una declaracion por linea — sin `{ display: flex; gap: 1rem; }` en una linea

### TypeScript / ESLint
- [ ] Ninguna funcion > 30 lineas (50 en .astro)
- [ ] Complejidad <= 8 por funcion — si superas, extrae helpers
- [ ] Anidamiento <= 3 niveles
- [ ] Sin ternarios anidados — usar if/else
- [ ] Sin mas de 4 parametros por funcion
- [ ] Sin comentarios de ningun tipo
- [ ] Sin emojis

### i18n
- [ ] `fr.ts` usa comillas dobles en cualquier string con apostrofe
- [ ] Los 3 locales (es/en/fr) tienen exactamente las mismas keys que el interface TUI
- [ ] TypeScript no reporta errores en ninguno de los 3 ficheros

### Componente
- [ ] Root element: `id="mi-tool-root"` + `class="mi-tool"` + `data-ui={JSON.stringify(ui)}`
- [ ] Script lee: `JSON.parse(root.dataset.ui as string) as Record<string, string>`
- [ ] `save()` solo en event listeners — nunca en `calculate()` ni en `load()`
- [ ] Key localStorage unica: `jjlmoya-CATEGORIA-NOMBRE`
- [ ] Dependencias opcionales con `import()` dinamico dentro del handler

### Categoria
- [ ] `src/category/index.ts` tiene todos los tools en el array `tools: []`
- [ ] `src/category/seo.astro` creado con los tipos de seccion que usa el i18n
- [ ] `src/index.ts` exporta `{ default as MiCategoriaSEO } from './category/seo.astro'`
- [ ] `src/data.ts` exporta la categoria, todos los tools y todos los tipos

### Final
- [ ] `npm run lint` → 0 errores, 0 warnings
- [ ] `npm run test` → todos pasan
- [ ] Probar visualmente en modo claro
- [ ] Probar visualmente en modo oscuro
- [ ] Abrir DevTools y verificar que no hay errores de consola
- [ ] Con dos tools en la misma pagina, verificar que los estilos no se pisan
