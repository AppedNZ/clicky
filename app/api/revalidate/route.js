import { revalidatePath } from "next/cache";

export async function GET(req) {
  revalidatePath("/", "page");

  return Response.json("all good");
}
