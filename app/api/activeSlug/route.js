// app/api/users/route.js
import connectToDatabase from '../../../utils/database';
import { getActiveSlug, createActiveSlug, deleteActiveSlug, updateActiveSlug } from '../../../controllers/activeSlugController';


export async function GET() {
  try {
    await connectToDatabase();
    const ActiveSlug = await getActiveSlug();
    
    return new Response(JSON.stringify(ActiveSlug), { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


export async function POST(request) {
  try {
    await connectToDatabase();

    const data = await request.json();

    const newActiveSlug = await createActiveSlug(data);

    if (!newActiveSlug.success) {
      return new Response(
        JSON.stringify({ error: newActiveSlug.error }),
        { status: 400 } // Use a suitable status code for your scenario
      );
    }

    return new Response(JSON.stringify(newActiveSlug.data), { status: 201 });
  } catch (error) {
    console.error("Error in POST API:", error.message);
    // console.error("Error in POST API:", error);

    return new Response(
      JSON.stringify({ error: error.message || "An unexpected error occurred" }),
      { status: 500 }
    );
  }
}


export async function DELETE(request) {
  try {
    const { id } = await request.json(); // Parse JSON from the request

    if (!id) {
      throw new Error("Slug id is Missing, Please Try Again Later...");
    }

    const result = await deleteActiveSlug({ id });

    if (!result.success) {
      return new Response(JSON.stringify({ error: "Slug not found or could not be deleted." }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Slug Obj deleted successfully." }), { status: 200 });
  } catch (error) {
    console.error("Error in DELETE request:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


export async function PUT(request) {
  try {
    const { id, slugData } = await request.json(); // Parse JSON from the request

    if (!id || !slugData) {
      throw new Error("Missing required fields: id or slugData.");
    }

    const result = await updateActiveSlug({ id, slugData });

    if (!result) {
      return new Response(JSON.stringify({ error: "Slug not found or could not be updated." }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Slug Updated successfully." }), { status: 200 });
  } catch (error) {
    console.error("Error in PUT request:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


// export async function PUT(request) {
//   await connectToDatabase();
//   const { id } = request.nextUrl.searchParams;
//   const data = await request.json();
//   const updatedUser = await updateUser(id, data);
//   return new Response(JSON.stringify(updatedUser), { status: 200 });
// }

// export async function DELETE(request) {
//   await connectToDatabase();
//   const { id } = request.nextUrl.searchParams;
//   await deleteUser(id);
//   return new Response(null, { status: 204 });
// }
