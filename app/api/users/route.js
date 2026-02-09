// app/api/users/route.js
import connectToDatabase from '../../../utils/database';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../../../controllers/userController';


export async function GET(request) {
  try {
    // Connect to the database
    await connectToDatabase();
 
    // Extract the search parameters
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
      // If an ID is provided, fetch a single user
      const user = await getUserById(id);

      if (!user.success) {
        return new Response(
          JSON.stringify({ error: user.error }),
          { status: 404 } // Use a suitable status code for not found
        );
      }

      return new Response(JSON.stringify(user.data), { status: 200 });
    } else {
      // If no ID is provided, fetch all users
      const users = await getUsers();

      if (!users.success) {
        return new Response(
          JSON.stringify({ error: users.error }),
          { status: 400 } // Use a suitable status code for your scenario
        );
      }

      return new Response(JSON.stringify(users.data), { status: 200 });
    }
  } catch (error) {
    console.error('Error in GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


export async function POST(request) {

  await connectToDatabase();

  const data = await request.json();

  // Call the createUser function and get the result
  const result = await createUser(data);

  // Use the status code and data from the result
  return new Response(JSON.stringify(result), { status: result.status }); 
} 


export async function PUT(request) {
  await connectToDatabase();
  const { id } = request.nextUrl.searchParams;
  const data = await request.json();
  const updatedUser = await updateUser(id, data);
  return new Response(JSON.stringify(updatedUser), { status: 200 });
}

export async function DELETE(request) {
  await connectToDatabase();
  const { id } = request.nextUrl.searchParams;
  await deleteUser(id);
  return new Response(null, { status: 204 });
}
