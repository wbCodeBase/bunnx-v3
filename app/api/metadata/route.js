import { NextResponse } from 'next/server';
import { createMetadata, getMetadata } from '../../../controllers/metadataController';
import connectToDatabase from '../../../utils/database';

// POST: Create Metadata
export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();

    const metadata = await createMetadata(data);

    if (!metadata.success) {
      return NextResponse.json({ error: metadata.error }, { status: 400 });
    }

    return NextResponse.json(metadata.data, { status: 201 });
  } catch (error) {
    console.error("Error in POST API:", error.message);
    return NextResponse.json({ error: "Failed to create metadata" }, { status: 500 });
  }
}


export async function GET() {
  try {
    await connectToDatabase();

    const metadata = await getMetadata();

    if (!metadata.success) {
      return NextResponse.json({ error: metadata.error }, { status: 404 });
    }

    return NextResponse.json(metadata.data, { status: 200 });
  } catch (error) {
    console.error("Error in GET API:", error.message);
    return NextResponse.json({ error: "Failed to fetch metadata" }, { status: 500 });
  }
}

