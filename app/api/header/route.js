// app/api/Header/route.js
import connectToDatabase from '../../../utils/database';
import { getHeaderMenu } from '../../../controllers/headerController';


export async function GET() {
  try {
    await connectToDatabase();
    const HeaderMenu = await getHeaderMenu();
    return new Response(JSON.stringify(HeaderMenu), { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


// export async function POST(request) {
//   await connectToDatabase();
//   const data = await request.json();
  
//   console.log(data);

//   const newUser = await createUser(data);
//   return new Response(JSON.stringify(newUser), { status: 201 });
// }

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
