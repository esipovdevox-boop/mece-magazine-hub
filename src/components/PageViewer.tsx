import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PageViewerProps {
  pages: string[];
  onClose: () => void;
  issueTitle: string;
}

const PageViewer = ({ pages, onClose, issueTitle }: PageViewerProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToPage = (newPage: number, dir: 'left' | 'right') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsAnimating(false);
    }, 300);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      goToPage(currentPage + 1, 'right');
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1, 'left');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
        <div className="text-primary-foreground">
          <h2 className="font-display text-lg font-semibold">{issueTitle}</h2>
          <p className="text-sm opacity-70">
            Page {currentPage + 1} of {pages.length}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-primary-foreground hover:bg-primary-foreground/10"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Page Display */}
      <div className="relative flex h-full w-full items-center justify-center px-16 py-20">
        <div
          className={cn(
            'relative max-h-full max-w-3xl overflow-hidden transition-all duration-300',
            isAnimating && direction === 'right' && 'translate-x-[-20px] opacity-0',
            isAnimating && direction === 'left' && 'translate-x-[20px] opacity-0'
          )}
        >
          <img
            src={pages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className="max-h-[80vh] w-auto object-contain shadow-2xl"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevPage}
        disabled={currentPage === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 disabled:opacity-30"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextPage}
        disabled={currentPage === pages.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 disabled:opacity-30"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Page Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index, index > currentPage ? 'right' : 'left')}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              currentPage === index
                ? 'w-6 bg-accent'
                : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PageViewer;
