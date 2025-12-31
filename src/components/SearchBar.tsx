import { Search } from 'lucide-react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search..."
                className="w-full bg-white border border-border text-foreground px-10 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent transition-all"
            />
        </div>
    );
};
