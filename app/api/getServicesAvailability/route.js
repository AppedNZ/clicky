export async function GET(req) {
  try {
    const response = await fetch(process.env.NEXT_APP_SPREADSHEET_ROUTE);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
  }
}
