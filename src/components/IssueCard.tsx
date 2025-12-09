import { MagazineIssue } from '@/types/magazine';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface IssueCardProps {
  issue: MagazineIssue;
}

const IssueCard = ({ issue }: IssueCardProps) => {
  return (
    <Link
      to={`/issue/${issue.id}`}
      className="group block overflow-hidden"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={issue.coverImage}
          alt={issue.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm font-light">{issue.description}</p>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Issue #{issue.issueNumber}
          </span>
          <span className="text-xs text-muted-foreground">
            {format(issue.date, 'MMMM yyyy')}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
          {issue.title}
        </h3>
      </div>
    </Link>
  );
};

export default IssueCard;
