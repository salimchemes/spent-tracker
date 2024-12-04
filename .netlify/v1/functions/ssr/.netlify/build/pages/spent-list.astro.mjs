/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_DgGtbn0O.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from '../chunks/Header_DanrhahD.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabase_Hh7l-WS_.mjs';
/* empty css                                     */
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$ListSpent = createComponent(async ($$result, $$props, $$slots) => {
  const { data } = await supabase.from("expenses").select("*").order("id", { ascending: false });
  const spentItems = data?.map((item) => ({
    id: item.id,
    date: item.date,
    category: item.category,
    amount: item.amount,
    paymentType: item.payment_type,
    createdBy: item.created_by
  }));
  return renderTemplate`${maybeRenderHead()}<div class="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-astro-cid-chm636uw> <div class="overflow-x-auto" data-astro-cid-chm636uw> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-chm636uw> <thead class="bg-gray-50 dark:bg-gray-700" data-astro-cid-chm636uw> <tr data-astro-cid-chm636uw> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-chm636uw>Date</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-chm636uw>Category</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-chm636uw>Amount</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-chm636uw>Payment Type</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-chm636uw>Created By</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider" data-astro-cid-chm636uw>Actions</th> </tr> </thead> <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-chm636uw> ${!spentItems || spentItems.length === 0 ? (
    // if no records show no records added yet in a
    renderTemplate`<tr data-astro-cid-chm636uw> <td colspan="5" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-center" data-astro-cid-chm636uw>
No records added yet
</td> </tr>`
  ) : spentItems?.map((item) => renderTemplate`<tr${addAttribute(`tr-${item.id}`, "id")} data-astro-cid-chm636uw> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300" data-astro-cid-chm636uw> ${item.date} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300" data-astro-cid-chm636uw> ${item.category} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300" data-astro-cid-chm636uw>
$${item.amount.toFixed(2)} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 capitalize" data-astro-cid-chm636uw> ${item.paymentType} </td>${" "} <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 capitalize" data-astro-cid-chm636uw> ${item.createdBy} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex space-x-2" data-astro-cid-chm636uw>  <button class="remove-btn text-blue-600 hover:text-blue-900"${addAttribute(item.id, "data-id")}${addAttribute(spentItems, "data-items")} data-astro-cid-chm636uw>
Remove
</button> </td> </tr>`)} </tbody> </table> </div> </div> <div id="toaster" class="toaster" data-astro-cid-chm636uw></div>  `;
}, "/Users/salimchemes/Desktop/code/spent-tracker/src/components/ListSpent.astro", void 0);

const $$SpentList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto mt-8"> <h1 class="text-2xl font-bold mb-6 text-center dark:text-white">Expense List</h1> ${renderComponent($$result2, "ListSpent", $$ListSpent, {})} </main> ` })}`;
}, "/Users/salimchemes/Desktop/code/spent-tracker/src/pages/spent-list.astro", void 0);

const $$file = "/Users/salimchemes/Desktop/code/spent-tracker/src/pages/spent-list.astro";
const $$url = "/spent-list";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SpentList,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
