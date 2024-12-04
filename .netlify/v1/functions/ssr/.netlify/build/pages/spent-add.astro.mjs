/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_DgGtbn0O.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from '../chunks/Header_DanrhahD.mjs';
import 'clsx';
/* empty css                                     */
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Toaster = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="toaster" class="toaster" data-astro-cid-sgggipyh></div> `;
}, "/Users/salimchemes/Desktop/code/spent-tracker/src/components/Toaster.astro", void 0);

const $$AddSpent = createComponent(async ($$result, $$props, $$slots) => {
  const getTodayDate = () => {
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return renderTemplate`${maybeRenderHead()}<form id="add-expense-form" class="max-w-md mx-auto"> <!-- Date Input --> <div class="mb-4"> <label for="date" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Date</label> <input type="date" id="date" name="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"${addAttribute(getTodayDate(), "value")} required> </div> <!-- category Dropdown --> <div class="mb-4"> <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Category</label> <select id="category" name="category" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" required> <option value="" disabled selected>Select a category</option> <option value="super">Super</option> <option value="nafta">Nafta</option> <option value="verduleria">Verduleria</option> <option value="farmacia">Farmacia</option> <option value="restaurant">Restaurant</option> <option value="restaurant">Dietetica</option> <option value="other">Otro</option> </select> </div> <!-- Amount Input --> <div class="mb-4"> <label for="amount" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Amount</label> <input type="number" id="amount" name="amount" step="0.01" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" required> </div> <!-- Payment Type Radio Buttons --> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Payment Type</label> <div class="space-y-2"> <div class="flex items-center"> <input type="radio" id="cash" name="payment_type" value="cash" class="h-4 w-4 text-blue-600" checked required> <label for="cash" class="ml-2 text-sm text-gray-700 dark:text-gray-200">Cash</label> </div> <div class="flex items-center"> <input type="radio" id="credit" name="payment_type" value="credit" class="h-4 w-4 text-blue-600"> <label for="credit" class="ml-2 text-sm text-gray-700 dark:text-gray-200">Credit Card</label> </div> <div class="flex items-center"> <input type="radio" id="debit" name="payment_type" value="debit" class="h-4 w-4 text-blue-600"> <label for="debit" class="ml-2 text-sm text-gray-700 dark:text-gray-200">Debit Card</label> </div> </div> </div> <!-- Created By Radio Buttons --> <div class="mb-4"> <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Created by</label> <div class="mt-2"> <label class="inline-flex items-center"> <input type="radio" name="created_by" value="flavia" class="form-radio text-blue-600"> <span class="ml-2">Flavia</span> </label> <label class="inline-flex items-center ml-6"> <input type="radio" name="created_by" value="salim" class="form-radio text-blue-600"> <span class="ml-2">Salim</span> </label> </div> </div> <!-- Save Button --> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
Save Expense
</button> ${renderComponent($$result, "Toaster", $$Toaster, { "message": "" })} </form> <div id="toaster" class="toaster"></div> `;
}, "/Users/salimchemes/Desktop/code/spent-tracker/src/components/AddSpent.astro", void 0);

const $$SpentAdd = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto mt-8"> <h1 class="text-2xl font-bold mb-6 text-center dark:text-white">Add New Expense</h1> ${renderComponent($$result2, "AddSpent", $$AddSpent, {})} </main> ` })}`;
}, "/Users/salimchemes/Desktop/code/spent-tracker/src/pages/spent-add.astro", void 0);

const $$file = "/Users/salimchemes/Desktop/code/spent-tracker/src/pages/spent-add.astro";
const $$url = "/spent-add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SpentAdd,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
