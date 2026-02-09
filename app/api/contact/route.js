import connectToDatabase from '../../../utils/database';
import { createContact, getQueries } from '../../../controllers/activeSlugController';
import { sendLeadNotification } from '../../../utils/email';



export async function GET() {
    try {
      await connectToDatabase();
      const queries = await getQueries();
      
      
      if (!queries.success) {
        return new Response(
          JSON.stringify({ error: queries.error }),
          { status: 400 } // Use a suitable status code for your scenario
        );
      }
      
      return new Response(JSON.stringify(queries.data), { status: 200 });
  
  
    } catch (error) {
      console.error('Error in GET request:', error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }

export async function POST(request) {
    try {
        await connectToDatabase();

        const data = await request.json();
        // console.log(data);

        const contact = await createContact(data);

        if (!contact.success) {
            return new Response(
                JSON.stringify({ error: contact.error }),
                { status: 400 } // Use a suitable status code for your scenario
            );
        }

        await sendLeadNotification(data)
        return new Response(JSON.stringify(contact.data), { status: 201 });
    } catch (error) {
        console.error("Error in POST API:", error.message);
        return new Response(
            JSON.stringify({ error: error.message || "An unexpected error occurred" }),
            { status: 500 }
        );
    }
}