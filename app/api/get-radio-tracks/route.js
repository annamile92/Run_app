import fs from "fs";
import path from "path";

export async function GET() {
  const folder = path.join(process.cwd(), "public/radio-tracks");

  const files = fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".wav"));

  return Response.json({ files });
}
