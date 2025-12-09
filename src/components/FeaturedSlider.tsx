import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { featuredArticles } from '@/data/mockData';
import { useState } from 'react';

const FeaturedSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="mb-16">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: 'start',
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="relative w-full"
      >
        <CarouselContent>
          {featuredArticles.map((article) => (
            <CarouselItem key={article.id}>
              <Link to={`/issue/${article.issueId}`} className="block">
                <div className="relative aspect-[21/9] overflow-hidden rounded-lg bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-foreground">
                      Issue #{article.issueNumber}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-4xl">
                      {article.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-muted-foreground md:text-lg">
                      {article.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 h-10 w-10 border-border/50 bg-background/80 backdrop-blur-sm hover:bg-background" />
        <CarouselNext className="right-4 h-10 w-10 border-border/50 bg-background/80 backdrop-blur-sm hover:bg-background" />
        
        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {featuredArticles.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current
                  ? 'w-6 bg-accent'
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default FeaturedSlider;
