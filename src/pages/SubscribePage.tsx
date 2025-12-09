import { subscriptions } from '@/data/mockData';
import Header from '@/components/Header';
import SubscriptionCard from '@/components/SubscriptionCard';

const SubscribePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Subscribe to MECE
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose the plan that works best for you. Get access to stunning 
            photography and exclusive content delivered right to your device.
          </p>
        </section>

        {/* Subscription Options */}
        <section className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {subscriptions.map((subscription) => (
              <SubscriptionCard key={subscription.id} subscription={subscription} />
            ))}
          </div>
        </section>

        {/* FAQ or Additional Info */}
        <section className="mx-auto mt-20 max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold">
            Frequently Asked Questions
          </h2>
          
          <div className="mt-8 space-y-6 text-left">
            <div>
              <h3 className="font-medium">Can I cancel my subscription anytime?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Yes, you can cancel your monthly or annual subscription at any time. 
                You'll continue to have access until the end of your billing period.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">What payment methods do you accept?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We accept all major credit cards, PayPal, and Apple Pay. 
                All payments are processed securely.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Can I access back issues?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Annual subscribers get access to our complete archive. Monthly subscribers 
                can access the current month's archive, and single issues are available 
                for individual purchase.
              </p>
            </div>
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

export default SubscribePage;
