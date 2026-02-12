'use client';



export default function BlogContent({ dedicatedBlogPost }) {


  const guideData = dedicatedBlogPost;

  if (!guideData) {
    return <p>Loading...</p>;
  }



  return (
    <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 sm:py-10 py-5">
      {/* <span className="font-semibold text-orange-500 text-lg">Our Guide</span> */}
      {/* <h4 className="font-semibold text-3xl my-2">{guideData.title}</h4> */}

      <div className="flex min-h-screen gap-8 sm:p-6 p-2 mt-4">

        {/* Navigation */}
        {/* <nav className="sm:block hidden sticky top-20 h-fit w-80 shrink-0">
          <h2 className="mb-4 text-2xl text-gray-700 font-medium">Contents</h2>
          <div className="space-y-2">
           
          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: guideData.blogHeadingsAcf.blogHeadings || "" }} />

          </div>
        </nav> */}




        {/* Main Content */}
        {/* <main className="max-w-3xl mx-auto">

          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: guideData.content || "" }} />

        </main> */}

        <main className="max-w-3xl mx-auto">
          <article
            className="prose lg:prose-lg max-w-none prose-headings:font-semibold prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: guideData.content || "" }}
          />
        </main>



      </div>
    </section>
  );
}









