/* empty css                                 */
import { e as createComponent, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DifAk8E4.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from '../chunks/Header_CKy8sZXS.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ` })}`;
}, "/Users/salimchemes/Desktop/code/spent-tracker/src/pages/index.astro", void 0);

const $$file = "/Users/salimchemes/Desktop/code/spent-tracker/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
