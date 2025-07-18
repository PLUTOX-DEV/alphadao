import React, { useState } from 'react';
import { useBlog } from './context/BlogContext';
import { Button } from '../components/ui/button';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';

const Spinner = () => (
    <svg className="animate-spin h-5 w-5 text-purple-700 mx-2" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
);

const BlogPagination: React.FC = () => {
    const { currentPage, totalPages, handlePageChange } = useBlog();
    const [loading, setLoading] = useState(false);

    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const onPageChange = async (page: number) => {
        if (page === currentPage) return;
        setLoading(true);
        await handlePageChange(page);
        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center my-8 space-x-2">
            <div className='text-gray-500'>
                <span> Showing {currentPage} of {totalPages} pages</span>
            </div>
            <Button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="bg-transparent !text-gray-700 hover:bg-purple-950 disabled:opacity-50"
            >
                <CircleChevronLeft color="#d6d1d1" strokeWidth={2.5} />
            </Button>
            {pages.map(page => (
                <Button
                    key={page}
                    onClick={() => onPageChange(page)}
                    disabled={loading}
                    className={currentPage === page ? "!bg-purple-950 !text-white" : "bg-transparent text-gray-200 hover:bg-gray-800"}
                >
                    {page}
                </Button>
            ))}
            <Button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
                className="bg-transparent !text-gray-700 hover:bg-purple-950 disabled:opacity-50"
            >
                <CircleChevronRight color="#d6d1d1" strokeWidth={2.5} />
            </Button>
            {loading && <Spinner />}
        </div>
    );
};

export default BlogPagination;