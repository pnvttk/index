import type { Category } from '../data/links';
import { LinkItem } from './LinkItem';
interface LinkGroupProps {
    category: Category;
}

export const LinkGroup = ({ category }: LinkGroupProps) => {
    if (category.links.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 pb-1 border-b border-border">
                {category.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.links.map((link) => (
                    <LinkItem key={link.url} link={link} />
                ))}
            </div>
        </div>
    );
};
