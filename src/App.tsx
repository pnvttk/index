import { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { LinkGroup } from './components/LinkGroup';
import { linkData } from './data/links';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = useMemo(() => {
    if (!searchQuery.trim()) return linkData;

    const query = searchQuery.toLowerCase();
    
    return linkData.map(category => ({
      ...category,
      links: category.links.filter(link => 
        link.title.toLowerCase().includes(query) ||
        link.description.toLowerCase().includes(query) ||
        link.tags.some(tag => tag.toLowerCase().includes(query))
      )
    })).filter(category => category.links.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Index</h1>
        <p className="text-muted">A minimal directory of links and tools.</p>
      </header>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <main>
        {filteredLinks.length > 0 ? (
          filteredLinks.map((category) => (
            <LinkGroup 
              key={category.title} 
              category={category} 
            />
          ))
        ) : (
          <p className="text-muted">No results found.</p>
        )}
      </main>

      <footer className="mt-20 py-8 border-t border-border text-sm text-muted">
        <p>© {new Date().getFullYear()} Index</p>
      </footer>
    </div>
  );
}

export default App;
