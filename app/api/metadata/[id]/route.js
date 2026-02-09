import { NextResponse } from 'next/server';

import { updateMetadata, deleteMetadata, getMetadataByslug } from '../../../../controllers/metadataController';
import connectToDatabase from '../../../../utils/database';



// GET: Fetch Metadata by slug
export async function GET(request, { params }) {
    try {
        await connectToDatabase();
        const { id: slug } = params;

        const metadata = await getMetadataByslug(slug);

        if (!metadata.success) {
            return NextResponse.json({ error: metadata.error }, { status: 404 });
        }

        return NextResponse.json(metadata.data, { status: 200 });
    } catch (error) {
        console.error("Error in GET API by Slug:", error.message);
        return NextResponse.json({ error: "Failed to fetch metadata" }, { status: 500 });
    }
}


// PUT: Update Metadata by slug
export async function PUT(request, { params }) {
    try {
        await connectToDatabase();
        const { id } = params;
        const updatedMetadata = await request.json();

        const metadata = await updateMetadata(id, updatedMetadata);

        if (!metadata.success) {
            return NextResponse.json({ error: metadata.error }, { status: 400 });
        }

        return NextResponse.json(metadata.data, { status: 200 });
    } catch (error) {
        console.error("Error in PUT API:", error.message);
        return NextResponse.json({ error: "Failed to update metadata" }, { status: 500 });
    }
}

// DELETE: Remove Metadata by slug
export async function DELETE(request, { params }) {
    try {
        await connectToDatabase();
        const { id } = params;

        const metadata = await deleteMetadata(id);

        if (!metadata.success) {
            return NextResponse.json({ error: metadata.error }, { status: 400 });
        }

        return NextResponse.json({ message: "Metadata deleted successfully", success: true }, { status: 200 });
    } catch (error) {
        console.error("Error in DELETE API:", error.message);
        return NextResponse.json({ error: "Failed to delete metadata" }, { status: 500 });
    }
}
