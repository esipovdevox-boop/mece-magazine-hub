import { magazineIssues } from '@/data/mockData';
import IssueCard from '@/components/IssueCard';
import Header from '@/components/Header';

const Index = () => {
  const sortedIssues = [...magazineIssues].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            MECE Magazine
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A curated collection of stunning photography and captivating stories, 
            delivered to your screen every month.
          </p>
        </section>

        {/* Latest Issue Feature */}
        {sortedIssues[0] && (
          <section className="mb-16">
            <h2 className="mb-6 font-display text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Latest Issue
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={sortedIssues[0].coverImage}
                  alt={sortedIssues[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-medium uppercase tracking-wider text-accent">
                  Issue #{sortedIssues[0].issueNumber}
                </span>
                <h3 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {sortedIssues[0].title}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  {sortedIssues[0].description}
                </p>
                <a
                  href={`/issue/${sortedIssues[0].id}`}
                  className="mt-8 inline-flex w-fit items-center gap-2 border-b-2 border-accent pb-1 font-medium transition-colors hover:text-accent"
                >
                  Read This Issue
                </a>
              </div>
            </div>
          </section>
        )}

        {/* All Issues Grid */}
        <section>
          <h2 className="mb-8 font-display text-sm font-medium uppercase tracking-widest text-muted-foreground">
            All Issues
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedIssues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-xl font-semibold">MECE</p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mece Magazine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
