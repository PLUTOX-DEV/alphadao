
import React from 'react';
import { useBlog } from './context/BlogContext';
import {Button} from '../components/ui/button';
import {  CircleChevronLeft, CircleChevronRight,} from 'lucide-react';

const BlogPagination: React.FC = () => {
    const { currentPage, totalPages, handlePageChange } = useBlog();

    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center my-8 space-x-2">
            <div className='text-gray-500'><span> Showing {currentPage} of {totalPages} pages</span></div>
            
            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-transparent !text-gray-700  hover:bg-purple-950 disabled:opacity-50"
            >
             <CircleChevronLeft color="#d6d1d1" strokeWidth={2.5} />
            </Button>
            {pages.map(page => (
                <Button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? "!bg-purple-950 !text-white" : "bg-transparent text-gray-200 hover:bg-gray-800"}
                >
                    {page}
                </Button>
            ))}
            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-transparent !text-gray-700 hover:bg-purple-950 disabled:opacity-50"
            >
             <CircleChevronRight color="#d6d1d1" strokeWidth={2.5} />
            </Button>
        </div>
    );
};

export default BlogPagination;