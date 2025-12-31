import { ExternalLink } from 'lucide-react';
import type { Link } from '../data/links';

interface LinkItemProps {
    link: Link;
}

export const LinkItem = ({ link }: LinkItemProps) => {
    return (
        <a 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 border border-border hover:border-accent transition-colors"
        >
            <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium group-hover:underline">
                    {link.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted" />
            </div>
            
            <p className="text-sm text-muted mb-2">
                {link.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
                {link.tags.map(tag => (
                    <span key={tag} className="text-xs text-muted">
                        #{tag}
                    </span>
                ))}
            </div>
        </a>
    );
};
