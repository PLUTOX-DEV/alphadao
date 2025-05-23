
import React from 'react';
import { useBlog } from './context/BlogContext';
import {Button} from '../components/ui/button';

const BlogPagination: React.FC = () => {
    const { currentPage, totalPages, handlePageChange } = useBlog();

    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center my-8 space-x-2">
            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="!bg-gray-200 !text-gray-700 hover:!bg-gray-300 disabled:opacity-50"
            >
                Previous
            </Button>
            {pages.map(page => (
                <Button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? "!bg-blue-600 !text-white" : "!bg-gray-200 !text-gray-700 hover:!bg-gray-300"}
                >
                    {page}
                </Button>
            ))}
            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="!bg-gray-200 !text-gray-700 hover:!bg-gray-300 disabled:opacity-50"
            >
                Next
            </Button>
        </div>
    );
};

export default BlogPagination;