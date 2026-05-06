import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Define path for storage
    const filePath = path.join(process.cwd(), "admissions.json");
    
    // Read existing data or start new array
    let admissions = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      admissions = JSON.parse(fileContent);
    }
    
    // Add new admission with timestamp
    const newEntry = {
      ...data,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: "Pending"
    };
    
    admissions.push(newEntry);
    
    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(admissions, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: "Application received and saved successfully" 
    }, { status: 200 });
    
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Error processing application" 
    }, { status: 500 });
  }
}
