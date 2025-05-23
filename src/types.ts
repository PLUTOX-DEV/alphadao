// src/types.ts

export interface BlogPost {
    id: string;
    title: string;
    author: string;
    description: string;
    content: string; // HTML content
    imageUrl?: string; // Optional image URL
    tags: string[];
    published: boolean;
    createdAt: string; // ISO string format
}

export interface BlogContextType {
    blogPosts: BlogPost[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    postsPerPage: number;
    searchTag: string;
    isAuthenticated: boolean;
    handlePageChange: (page: number) => void;
    handleSearch: (tag: string) => void;
    createNewBlogPost: (postData: Omit<BlogPost, 'id'>) => Promise<boolean>;
    saveAsDraft: (draftData: Omit<BlogPost, 'id'>) => Promise<boolean>;
    getBlogPosts: (page?: number, tag?: string) => Promise<void>;
}

// Props for common components
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
    type?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

export interface RichTextEditorProps {
    value: string;
    onChange: (content: string, delta: any, source: string, editor: any) => void;
    placeholder?: string;
}