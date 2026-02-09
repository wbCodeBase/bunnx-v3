'use client';

// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';





export default function BlogContent({ dedicatedBlogPost }) {


  const guideData = dedicatedBlogPost;

  if (!guideData) {
    return <p>Loading...</p>;
  }

  // console.log(`guideData`, guideData.blogHeadingsAcf.blogHeadings);


  return (
    <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 sm:py-10 py-5">
      {/* <span className="font-semibold text-orange-500 text-lg">Our Guide</span> */}
      {/* <h4 className="font-semibold text-3xl my-2">{guideData.title}</h4> */}

      <div className="flex min-h-screen gap-8 sm:p-6 p-2 mt-4">
        {/* Navigation */}
        <nav className="sm:block hidden sticky top-20 h-fit w-80 shrink-0">
          <h2 className="mb-4 text-2xl text-gray-700 font-medium">Contents</h2>
          <div className="space-y-2">
            {/* <button className={`block w-full rounded-lg p-3 text-left text-sm transition-colors hover:bg-gray-100 font-normal text-gray-600`}>
              What is Software Development Service? </button>

            <button className={`block w-full rounded-lg p-3 text-left text-sm transition-colors hover:bg-gray-100 font-normal text-gray-600`}>
              Why Choose Custom Software Development? </button>

            <button className={`block w-full rounded-lg p-3 text-left text-sm transition-colors hover:bg-gray-100 font-normal text-gray-600`}>
              How to Choose the Right Development Partner </button> */}

          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: guideData.blogHeadingsAcf.blogHeadings || "" }} />

          </div>
        </nav>


        {/* Main Content */}
        <main className="max-w-3xl mx-auto">

          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: guideData.content || "" }} />

          {/* {guideData.sections.map(({ id, content }) => (
            <section id={id} key={id} className="mb-12">
              <h1 className="mb-6 text-xl font-semibold text-gray-800">
                {content.heading}
              </h1>
              {content.image && (
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  width={800}
                  height={400}
                  className="mb-6 rounded-lg"
                />
              )}
              {content.description &&
                content.description.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600">
                    {paragraph}
                  </p>
                ))}

              {content.list && (
                <ul className="list-disc space-y-3 pl-6 text-gray-600">
                  {content.list.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.detail}
                    </li>
                  ))}
                </ul>
              )}


              {content.factors && (
                <>
                  <div className='my-4 text-gray-600'> <strong> Factors </strong></div>
                  <ul className="list-disc space-y-3 pl-6 text-gray-600">
                    {content.factors.map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}:</strong> {item.detail}
                      </li>
                    ))}
                  </ul>
                </>
              )}



            </section>
          ))} */}
        </main>
      </div>
    </section>
  );
}














// const guideContent = {
// 'rust-vs-go-modern-systems-programming': {
//   title: "Rust vs Go: Modern Systems Programming Contenders",
//   description:
//     "Dive deep into the battle of modern systems programming languages: Rust and Go. This comprehensive comparison explores performance characteristics, memory safety approaches, concurrency models, ecosystem maturity, and real-world use cases to help you choose the right tool for your next project.",
//   sections: [
//     {
//       id: '0',
//       title: 'The New Era of Systems Programming',
//       content: {
//         heading: 'Rust vs Go: Redefining Modern Systems Development',
//         image: {
//           src: 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1741264600~exp=1741268200~hmac=05ef51efe23fb3d77675e324f2ffc89df1b10c3eabc42938010da04ea26ebefe&w=1380',
//           alt: 'Rust and Go programming languages logos side by side with code in background',
//         },
//         description: [
//           "The systems programming landscape has dramatically evolved beyond C and C++, with Rust and Go emerging as powerful contenders for building everything from low-level infrastructure to cloud-native applications. Both languages were born in the 2010s with ambitious goals: Rust from Mozilla's research team promising memory safety without garbage collection, and Go from Google's pragmatic approach to network services and concurrency. As organizations increasingly prioritize both performance and developer productivity, understanding the unique strengths and tradeoffs between these languages has become essential for modern software architecture decisions.",
//         ],
//       },
//     },
//     {
//       id: '1',
//       title: 'Key Philosophical Differences',
//       content: {
//         heading: 'Contrasting Philosophies: Safety vs. Simplicity',
//         description: [
//           "While both languages target systems programming, they approach the challenge from fundamentally different perspectives, creating distinct developer experiences and performance characteristics:",
//         ],
//         list: [
//           {
//             title: 'Rust: Memory Safety Without Compromise',
//             detail:
//               'Rust\'s pioneering "borrow checker" enforces strict ownership rules at compile time, preventing entire categories of memory errors without runtime overhead. This approach demands a steeper learning curve but rewards developers with fearless concurrency and the mantra of "if it compiles, it works."',
//           },
//           {
//             title: 'Go: Pragmatic Simplicity',
//             detail:
//               'Go prioritizes developer productivity through minimalist syntax, fast compilation, and straightforward concurrency with goroutines. Its garbage collector and intentionally limited feature set create a language that new team members can become productive with in days rather than weeks.',
//           },
//           {
//             title: 'Type Systems and Expressiveness',
//             detail:
//               'Rust embraces powerful type-level programming with generics, traits, and enums offering exhaustive pattern matching. Go consciously limits language complexity with a simpler type system that emphasizes direct readability over abstraction capabilities.',
//           },
//           {
//             title: 'Compilation and Development Cycle',
//             detail:
//               'Go delivers lightning-fast compilation times and a batteries-included standard library, optimizing for rapid iteration. Rust compilation involves sophisticated analysis that catches bugs early but requires more patience during the build process.',
//           },
//           {
//             title: 'Error Handling Approaches',
//             detail:
//               'Rust uses Result and Option types with pattern matching to enforce error handling at compile time. Go\'s error-as-values approach with explicit error checks represents a middle ground between exceptions and Rust\'s algebraic data types.',
//           },
//           {
//             title: 'Community and Governance',
//             detail:
//               'Rust\'s community-driven RFC process has created a language that evolves deliberately with strong backward compatibility guarantees. Go\'s more centralized decision-making at Google has maintained focus on simplicity even when rejecting popular feature requests.',
//           },
//         ],
//       },
//     },

//     {
//       id: '2',
//       title: 'Performance Characteristics',
//       content: {
//         heading: 'Performance Showdown: Where Each Language Shines',
//         description: [
//           "Performance differences between Rust and Go derive from their core design choices and optimizations priorities:",
//         ],
//         list: [
//           {
//             title: 'Raw Computation Speed',
//             detail:
//               'Rust typically edges out Go in CPU-intensive tasks thanks to zero-cost abstractions, more aggressive optimizations, and no garbage collection overhead, making it comparable to C++ in many benchmarks.',
//           },
//           {
//             title: 'Memory Efficiency',
//             detail:
//               'Rust\'s ownership model allows precise control over memory layout and lifetimes, often resulting in lower memory usage compared to Go\'s garbage-collected heap allocations and runtime overhead.',
//           },
//           {
//             title: 'Concurrency Performance',
//             detail:
//               'Go\'s lightweight goroutines excel at I/O-bound workloads handling thousands of concurrent connections with minimal resource usage, while Rust offers more explicit control through async/await and thread-based approaches.',
//           },
//           {
//             title: 'Startup Time and Binary Size',
//             detail:
//               'Go produces statically linked binaries with fast startup times ideal for microservices and CLI tools. Rust binaries can be optimized for size but typically prioritize runtime performance over initialization speed.',
//           },
//         ],
//       },
//     },


//     {
//       id: '3',
//       title: 'Ideal Use Cases and Adoption',
//       content: {
//         heading: 'When to Choose Rust vs Go: Real-World Applications',
//         description: [
//           "Industry adoption patterns reveal where each language delivers maximum value:",
//         ],
//         list: [
//           {
//             title: 'Rust Sweet Spots',
//             detail:
//               'Systems with stringent performance requirements, embedded devices with limited resources, security-critical infrastructure, WebAssembly applications, and scenarios where memory safety bugs would be catastrophic.',
//           },
//           {
//             title: 'Go\'s Natural Habitat',
//             detail:
//               'Cloud-native microservices, API servers, DevOps tooling, distributed systems, and projects where rapid development and team onboarding outweigh the need for maximum performance optimization.',
//           },
//           {
//             title: 'Industry Pioneers',
//             detail:
//               'Rust powers critical components at Microsoft, AWS, Mozilla, Meta, and Cloudflare, while Go dominates at Google, Uber, Twitch, Dropbox, and numerous Kubernetes-related projects.',
//           },
//           {
//             title: 'Growing Cross-Pollination',
//             detail:
//               'The emerging trend of polyglot systems leveraging Rust modules for performance-critical paths while maintaining Go services for broader application logic and developer accessibility.',
//           },
//           {
//             title: 'Learning Curve Investment',
//             detail:
//               'Organizations must weigh immediate productivity against long-term maintainability, with Go offering faster ramp-up while Rust\'s strictness often prevents subtle bugs and maintenance challenges.',
//           },
//           {
//             title: 'Ecosystem Maturity',
//             detail:
//               'Go\'s standard library emphasizes completeness for networked services, while Rust\'s vibrant crate ecosystem offers specialized tools for diverse domains from embedded to game development.',
//           },
//         ],
//       },
//     },

//     {
//       id: '4',
//       title: 'Making the Right Choice',
//       content: {
//         heading: 'Decision Framework for Modern Systems Programming',
//         description: [
//           "When evaluating Rust versus Go for your next project, consider these critical factors:",
//         ],
//         list: [
//           {
//             title: 'Team Experience',
//             detail:
//               'Assess your team\'s familiarity with systems programming concepts and willingness to invest in Rust\'s learning curve versus Go\'s accessibility.',
//           },
//           {
//             title: 'Performance Requirements',
//             detail:
//               'Quantify your specific performance needs across dimensions of throughput, latency, memory usage, and predictability under load.',
//           },
//           {
//             title: 'Project Lifespan',
//             detail:
//               'Consider long-term maintenance, with Rust\'s strictness paying dividends for code bases maintained over many years by changing teams.',
//           },
//           {
//             title: 'Integration Requirements',
//             detail:
//               'Evaluate interoperability needs with existing systems, FFI capabilities, and deployment environment constraints.',
//           },
//           {
//             title: 'Development Timeline',
//             detail:
//               'Balance delivery pressure against long-term quality, recognizing Go\'s advantage in rapid prototyping versus Rust\'s investment in correctness.',
//           },
//         ],
//       },
//     },
//   ],
// }
// };


// export default function BlogContent({ serviceDetailPageSlug= "rust-vs-go-modern-systems-programming" }) {
//   const [activeSection, setActiveSection] = useState('introduction');
//   const observerRef = useRef(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         rootMargin: '-50px 0px -50% 0px',
//       }
//     );

//     document.querySelectorAll('section[id]').forEach((section) => {
//       observerRef.current?.observe(section);
//     });

//     return () => observerRef.current?.disconnect();
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };


//   const guideData = guideContent[serviceDetailPageSlug] || guideContent['software-development-company-in-india'];

//   if (!guideData) {
//     return <p>Hiring models content not found for the provided slug.</p>;
//   }


//   return (
//     <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 sm:py-10 py-5">
//       <h2 className="font-semibold text-orange-500 text-lg">Our Guide</h2>
//       <h4 className="font-semibold text-3xl my-2">{guideData.title}</h4>
//       <p className="text-md text-gray-800">{guideData.description}</p>

//       <div className="flex min-h-screen gap-8 sm:p-6 p-2 mt-4">
//         {/* Navigation */}
//         <nav className="sm:block hidden sticky top-20 h-fit w-80 shrink-0">
//           <h2 className="mb-4 text-xl text-gray-600 font-normal">GUIDE TOPICS</h2>
//           <div className="space-y-2">
//             {guideData.sections.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => scrollToSection(section.id)}
//                 className={`block w-full rounded-lg p-3 text-left text-sm transition-colors ${activeSection === section.id
//                   ? 'bg-amber-50 font-medium text-amber-900'
//                   : 'hover:bg-gray-100 font-normal text-gray-600'
//                   }`}
//               >
//                 {section.title}
//               </button>
//             ))}
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main className="max-w-3xl mx-auto">
//           {guideData.sections.map(({ id, content }) => (
//             <section id={id} key={id} className="mb-12">
//               <h1 className="mb-6 text-xl font-semibold text-gray-800">
//                 {content.heading}
//               </h1>
//               {content.image && (
//                 <Image
//                   src={content.image.src}
//                   alt={content.image.alt}
//                   width={800}
//                   height={400}
//                   className="mb-6 rounded-lg"
//                 />
//               )}
//               {content.description &&
//                 content.description.map((paragraph, index) => (
//                   <p key={index} className="mb-4 text-gray-600">
//                     {paragraph}
//                   </p>
//                 ))}

//               {content.list && (
//                 <ul className="list-disc space-y-3 pl-6 text-gray-600">
//                   {content.list.map((item, index) => (
//                     <li key={index}>
//                       <strong>{item.title}:</strong> {item.detail}
//                     </li>
//                   ))}
//                 </ul>
//               )}


//               {content.factors && (
//                 <>
//                   <div className='my-4 text-gray-600'> <strong> Factors </strong></div>
//                   <ul className="list-disc space-y-3 pl-6 text-gray-600">
//                     {content.factors.map((item, index) => (
//                       <li key={index}>
//                         <strong>{item.title}:</strong> {item.detail}
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}



//             </section>
//           ))}
//         </main>
//       </div>
//     </section>
//   );
// }




