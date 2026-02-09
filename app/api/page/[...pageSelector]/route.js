
import connectToDatabase from '../../../../utils/database';
import { getPageByStr } from "../../../../controllers/templateController";


export async function GET(request, { params }) {

  try {
    await connectToDatabase();

    const { pageSelector } = params;
    // const [templateName, pageSlug] = pageSelector;
    const [templateName, pageSlug] = pageSelector;

    // console.log("templateName, pageSlug", templateName, pageSlug);

    const templateContent = await getPageByStr(templateName, pageSlug);

    if (!templateContent.success) {
      return new Response(
        JSON.stringify({ error: templateContent.error }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify(templateContent.data), { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
