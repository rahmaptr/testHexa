import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
  const cookie = cookies.getAll().find((cookie) => cookie.name.includes("sb-"))

  if (!cookie) {
    redirect(303, '/login')
  }
}