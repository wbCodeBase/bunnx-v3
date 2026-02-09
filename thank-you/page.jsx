import Link from 'next/link';
import { CheckCircle, Home, Phone, ArrowLeft } from 'lucide-react';


export const metadata = {
  title: "Thank You for Reaching Out! | BunnX",
  description: "We've received your query! Our team will get back to you soon to discuss how we can bring your ideas to life with our expert software development solutions.",
  robots: "noindex",
};


export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-10">
          <div className="flex justify-center">
            <div className="bg-white/20 rounded-full p-3">
              <CheckCircle className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
        
        <div className="p-6 sm:p-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Thank You for Connecting Today
          </h1>
          
          <div className="h-1 w-20 bg-blue-600 mx-auto my-6"></div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            We will reach out to you shortly
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8 inline-block">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Phone className="h-5 w-5 text-blue-600" />
              <p className="text-base sm:text-lg">
                For urgent queries, please text or call us at 
                <span className="font-semibold text-blue-700"> +91 9971544461 </span>
                <span className="text-gray-500">(India)</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Home className="h-5 w-5" />
              <span>Return to Home</span>
            </Link>
            
            <Link 
              href="javascript:history.back()"
              className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Go Back</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} BunnX. All rights reserved.</p>
      </div>
    </div>
  );
}
