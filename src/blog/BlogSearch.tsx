
import React, { useState } from 'react';
import { useBlog } from './context/BlogContext';
import {Input} from '../components/ui/input'
// import {Button} from '../components/ui/button';
import { Search } from "lucide-react"

const BlogSearch: React.FC = () => {
    const { handleSearch, searchTag: currentSearchTag } = useBlog();
    const [tagInput, setTagInput] = useState<string>(currentSearchTag);

    // useEffect(() => {
    //     setTagInput(currentSearchTag);
    // }, [currentSearchTag]);

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

        <form onSubmit={() => handleExplicitSearch} className="relative w-full max-w-md bg-purple-950 flex flex-col sm:flex-row gap-4 my-8 mx-auto p-4  rounded-lg shadow-md">
      <Input
        id="tag-search"
        type='text'
        placeholder="Search by tag (e.g., alphadao, web3)"
        value={tagInput}
        onChange={handleInputChange}
        className="pr-12 h-10 w-full text-white"
      />
      <button
        type="submit"
        title="search"
        className=" text-gray-200"
      >
        <Search className=" absolute right-0 top-0 text-white mt-6 w-4 mr-10" />
        
      </button>
    </form>
    );
};

export default BlogSearch;