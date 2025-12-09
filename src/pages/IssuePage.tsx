import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { magazineIssues } from '@/data/mockData';
import Header from '@/components/Header';
import PageViewer from '@/components/PageViewer';
import { Button } from '@/components/ui/button';

const IssuePage = () => {
  const { id } = useParams();
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const issue = magazineIssues.find((i) => i.id === id);

  if (!issue) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-24">
          <h1 className="font-display text-2xl font-bold">Issue not found</h1>
          <Link to="/" className="mt-4 text-accent hover:underline">
            Back to all issues
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all issues
        </Link>

        {/* Issue Header */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Cover Image */}
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={issue.coverImage}
              alt={issue.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Issue Details */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-medium uppercase tracking-wider">
                Issue #{issue.issueNumber}
              </span>
              <span>•</span>
              <span>{format(issue.date, 'MMMM yyyy')}</span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {issue.title}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              {issue.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => setIsViewerOpen(true)}
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <BookOpen className="h-5 w-5" />
                Start Reading
              </Button>
              <Button size="lg" variant="outline">
                Purchase Issue — $9.99
              </Button>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <h3 className="font-display text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Inside This Issue
              </h3>
              <p className="mt-4 text-muted-foreground">
                This issue contains {issue.pages.length} pages of stunning 
                photography and engaging content.
              </p>
            </div>
          </div>
        </div>

        {/* Page Thumbnails */}
        <section className="mt-16">
          <h2 className="mb-6 font-display text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Preview Pages
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {issue.pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setIsViewerOpen(true)}
                className="group aspect-[3/4] overflow-hidden bg-muted"
              >
                <img
                  src={page}
                  alt={`Page ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Page Viewer Modal */}
      {isViewerOpen && (
        <PageViewer
          pages={issue.pages}
          onClose={() => setIsViewerOpen(false)}
          issueTitle={issue.title}
        />
      )}
    </div>
  );
};

export default IssuePage;
