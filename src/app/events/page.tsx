import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Event } from '@/lib/types';
import { Calendar, MapPin, Ticket } from 'lucide-react';

const eventData: Event[] = [
  {
    id: 'event-1',
    title: 'Worship Night Live',
    date: 'Friday, October 25, 2024 - 7:00 PM',
    location: 'Nairobi, Kenya',
    imageId: 'event-image-1',
    description: 'Join us for an unforgettable night of worship, prayer, and community. We believe in the power of gathering together to seek God\'s presence.',
  },
  {
    id: 'event-2',
    title: 'Album Release Concert: Eternal Echoes',
    date: 'Friday, November 15, 2024 - 8:00 PM',
    location: 'Nairobi, Kenya',
    imageId: 'event-image-2',
    description: 'Celebrate the release of our new album "Eternal Echoes" with a full-band concert experience. Be the first to hear the new songs live.',
  },
  {
    id: 'event-3',
    title: 'Online Worship &amp; Prayer Livestream',
    date: 'Every Wednesday - 6:00 PM PST',
    location: 'Online (YouTube &amp; Instagram Live)',
    imageId: 'event-image-3',
    description: 'Wherever you are in the world, you can join our weekly online gathering for a time of worship and intercession. Tune in for a mid-week refresh.',
  },
];


export default function EventsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Events Calendar</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Find out where we&apos;ll be next. Join us for a concert, worship night, or livestream.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {eventData.map(event => {
            const image = PlaceHolderImages.find(p => p.id === event.imageId);
            return (
              <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 relative min-h-[250px] md:min-h-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="md:col-span-3">
                    <CardHeader>
                      <h2 className="font-headline text-2xl lg:text-3xl font-bold">{event.title}</h2>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span className="font-semibold">{event.location}</span>
                        </div>
                      </div>
                      <p className="mt-4 text-foreground/80">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button size="lg" asChild>
                        <Link href="#">
                          <Ticket className="mr-2 h-5 w-5" />
                          RSVP / Get Tickets
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
