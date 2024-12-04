import { s as supabase } from '../../chunks/supabase_CEd67A5Z.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.json();
  const { error } = await supabase.from("expenses").insert([data]);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
  return new Response(
    JSON.stringify({ message: "Expense added successfully!" }),
    { status: 200 }
  );
};
const DELETE = async ({ request }) => {
  const data = await request.json();
  const { id } = data;
  const { error } = await supabase.from("expenses").delete().eq("id", id);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ message: "Expense deleted successfully!" }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
