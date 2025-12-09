import { Subscription } from '@/types/magazine';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubscriptionCardProps {
  subscription: Subscription;
}

const SubscriptionCard = ({ subscription }: SubscriptionCardProps) => {
  const periodLabel = {
    single: 'one-time',
    monthly: '/month',
    yearly: '/year',
  };

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-lg border p-6 transition-all hover:shadow-lg',
        subscription.popular
          ? 'border-accent bg-accent/5 shadow-md'
          : 'border-border bg-card'
      )}
    >
      {subscription.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold">{subscription.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {subscription.description}
        </p>
      </div>

      <div className="mb-6">
        <span className="font-display text-4xl font-bold">
          ${subscription.price}
        </span>
        <span className="text-muted-foreground">
          {periodLabel[subscription.period]}
        </span>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {subscription.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          'w-full',
          subscription.popular
            ? 'bg-accent text-accent-foreground hover:bg-accent/90'
            : ''
        )}
        variant={subscription.popular ? 'default' : 'outline'}
      >
        {subscription.period === 'single' ? 'Buy Now' : 'Subscribe'}
      </Button>
    </div>
  );
};

export default SubscriptionCard;
