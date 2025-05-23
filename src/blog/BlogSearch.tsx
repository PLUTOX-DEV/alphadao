
import React, { useState, useEffect } from 'react';
import { useBlog } from './context/BlogContext';
import {Input} from '../components/ui/input'
import {Button} from '../components/ui/button';
import { Search } from "lucide-react"

const BlogSearch: React.FC = () => {
    const { handleSearch, searchTag: currentSearchTag } = useBlog();
    const [tagInput, setTagInput] = useState<string>(currentSearchTag);

    useEffect(() => {
        setTagInput(currentSearchTag);
    }, [currentSearchTag]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setTagInput(value);
        handleSearch(value.toLowerCase().trim());
    };


    const handleExplicitSearch = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        handleSearch(tagInput.toLowerCase().trim());
    };

    return (

        <form onSubmit={() => handleExplicitSearch} className="relative w-full max-w-md flex flex-col sm:flex-row gap-4 my-8 mx-auto p-4  rounded-lg shadow-md">
      <Input
        id="tag-search"
        type='text'
        placeholder="Search by tag (e.g., alphadao, web3)"
        value={tagInput}
        onChange={handleInputChange}
        className="pr-12 h-10 w-full"
      />
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
      >
        <Search className="h-4 text-white w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
    );
};

export default BlogSearch;