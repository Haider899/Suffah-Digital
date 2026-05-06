import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "admissions.json");
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([], { status: 200 });
    }
    
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const admissions = JSON.parse(fileContent);
    
    return NextResponse.json(admissions, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch admissions" }, { status: 500 });
  }
}
