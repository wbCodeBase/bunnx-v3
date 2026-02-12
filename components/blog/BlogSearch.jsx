import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function BlogSearch() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (searchInput.trim()) {
                setIsLoading(true);
                try {
                    const params = new URLSearchParams({
                        status: 'published',
                        page: '1',
                        limit: '5',
                        search: searchInput,
                    });
                    const res = await fetch(`/api/blogs?${params}`);
                    if (res.ok) {
                        const data = await res.json();

                        setSearchResults(data.data.blogs || []);
                        setIsOpen(true);
                    }
                } catch (error) {
                    console.error('Search failed:', error);
                    setSearchResults([]);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setSearchResults([]);
                setIsOpen(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchInput]);

    const handleResultClick = (blog) => {
        // Navigate to blog or handle selection
        window.location.href = `/blog/${blog.slug || blog.id}`;
        setIsOpen(false);
        setSearchInput('');
    };

    return (
        <form className="flex gap-3 max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1" ref={dropdownRef}>
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onFocus={() => searchInput.trim() && searchResults.length > 0 && setIsOpen(true)}
                    placeholder="Search stories..."
                    className="text-black w-full pl-11 pr-4 py-3.5 rounded-full bg-white text-md placeholder-gray-500 focus:outline-none focus:ring-1 transition"
                />

                {/* Dropdown */}
                {isOpen && (
                    <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-50 max-h-96 overflow-y-auto">
                        {isLoading ? (
                            <div className="p-4 text-center text-gray-500">
                                <div className="animate-spin w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full mx-auto"></div>
                            </div>
                        ) : searchResults.length > 0 ? (
                            <div className="py-2">
                                {searchResults.map((blog) => (
                                    <button
                                        key={blog.id}
                                        onClick={() => handleResultClick(blog)}
                                        className="w-full px-4 py-3 hover:bg-gray-50 transition flex items-center gap-3 text-left"
                                    >
                                        {/* Blog Image */}
                                        {blog.featuredImage.url ? (
                                            <img
                                                src={blog.featuredImage.url}
                                                alt={blog.title}
                                                className="w-20 h-14 object-cover rounded-lg flex-shrink-0"
                                            />
                                        ) : (
                                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                                                <Search size={20} className="text-gray-400" />
                                            </div>
                                        )}

                                        {/* Blog Title and Excerpt */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-gray-900 text-md line-clamp-1">
                                                {blog.title}
                                            </h3>
                                            {blog.excerpt && (
                                                <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                                                    {blog.excerpt}
                                                </p>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="p-4 text-center text-gray-500 text-sm">
                                No results found for "{searchInput}"
                            </div>
                        )}
                    </div>
                )}
            </div>
        </form>
    );
}