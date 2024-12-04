import { e as createComponent, r as renderTemplate, g as addAttribute, k as renderHead, l as renderSlot, h as createAstro, m as maybeRenderHead } from './astro/server_DifAk8E4.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="dark" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Spent Tracker</title>${renderHead()}</head> <body class="bg-white dark:bg-gray-900 text-black dark:text-white" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/salimchemes/Desktop/code/spent-tracker/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = new URL(Astro2.request.url).pathname;
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center p-4"> <h1 class="text-xl font-bold mr-8">Spent Tracker</h1> <nav class="flex space-x-4"> <a href="/spent-list"${addAttribute(`py-2 px-4 border-b-2 ${currentPath === "/spent-list" ? "border-blue-600" : "border-transparent"} hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`, "class")}>
List
</a> <a href="/spent-add"${addAttribute(`py-2 px-4 border-b-2 ${currentPath === "/spent-add" ? "border-blue-600" : "border-transparent"} hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`, "class")}>
Add
</a> </nav> </header>`;
}, "/Users/salimchemes/Desktop/code/spent-tracker/src/components/Header.astro", void 0);

export { $$Header as $, $$Layout as a };
