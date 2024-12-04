import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";


export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { error } = await supabase.from("expenses").insert([data]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(
    JSON.stringify({ message: "Expense added successfully!" }),
    { status: 200 }
  );
};


export const DELETE: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { id } = data;
  const { error } = await supabase.from('expenses').delete().eq('id', id);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Expense deleted successfully!' }), { status: 200 });
};
