import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Instagram,
  MoveRight,
  Music,
  PlayCircle,
  Youtube,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Event, MediaItem, SocialPost } from '@/lib/types';
import { TikTokIcon } from '@/components/icons';

// Mock Data
const heroData = [
  {
    id: 'hero-1',
    image: PlaceHolderImages.find(p => p.id === 'hero-banner-1'),
    headline: 'New Album "Eternal Echoes" Out Now',
    subheadline: 'Listen to the sound of worship that transcends time.',
    cta: 'Listen Now',
    link: '/music',
  },
  {
    id: 'hero-2',
    image: PlaceHolderImages.find(p => p.id === 'hero-banner-2'),
    headline: 'Worship Night Live - This Friday',
    subheadline: 'Join us for a special night of praise and worship.',
    cta: 'RSVP Today',
    link: '/events',
  },
  {
    id: 'hero-3',
    image: PlaceHolderImages.find(p => p.id === 'hero-banner-3'),
    headline: 'Support Our Mission',
    subheadline: 'Your contribution helps us spread the message of hope and faith.',
    cta: 'Donate Now',
    link: '/donate',
  },
];

const musicData: MediaItem[] = [
  {
    id: 'music-1',
    type: 'song',
    title: 'Grace that Overflows',
    artist: 'PraiseMotion',
    thumbnailId: 'music-album-1',
  },
  {
    id: 'music-2',
    type: 'video',
    title: 'Live at the Cathedral',
    artist: 'PraiseMotion',
    thumbnailId: 'music-video-1',
  },
  {
    id: 'music-3',
    type: 'song',
    title: 'Unending Praise',
    artist: 'PraiseMotion',
    thumbnailId: 'music-album-2',
  },
  {
    id: 'music-4',
    type: 'live',
    title: 'Acoustic Sessions',
    artist: 'PraiseMotion',
    thumbnailId: 'music-live-1',
  },
];

const eventData: Event[] = [
  {
    id: 'event-1',
    title: 'Worship Night Live',
    date: 'OCT 25, 2024',
    location: 'Grace Cathedral, San Francisco',
    imageId: 'event-image-1',
    description: 'An unforgettable night of worship and community.',
  },
  {
    id: 'event-2',
    title: 'Album Release Concert',
    date: 'NOV 15, 2024',
    location: 'The Fillmore, San Francisco',
    imageId: 'event-image-2',
    description: 'Celebrate the launch of our new album "Eternal Echoes".',
  },
];

const socialData: SocialPost[] = [
  {
    id: 'social-1',
    platform: 'instagram',
    username: '@praisemotion',
    userImageId: 'social-user-1',
    postImageId: 'social-post-1',
    caption: 'Behind the scenes of our new music video! #worshipmusic #praise',
    likes: 1253,
    comments: 48,
  },
  {
    id: 'social-2',
    platform: 'tiktok',
    username: '@praisemotion',
    userImageId: 'social-user-1',
    postImageId: 'social-post-2',
    caption: 'A moment of spontaneous worship during rehearsal. #faith #gospel',
    likes: 18.2,
    comments: 1.1,
  },
  {
    id: 'social-3',
    platform: 'youtube',
    username: 'PraiseMotion Official',
    userImageId: 'social-user-1',
    postImageId: 'social-post-3',
    caption: 'Our new single "Grace that Overflows" is out now on YouTube!',
    likes: 3100,
    comments: 212,
  },
];

const HeroSection = () => (
  <section className="w-full">
    <Carousel
      opts={{ loop: true }}
      className="w-full"
      plugins={[
      ]}
    >
      <CarouselContent>
        {heroData.map(item => {
          const image = PlaceHolderImages.find(p => p.id === item.image?.id);
          return (
            <CarouselItem key={item.id}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                {image && (
                   <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      priority={heroData.indexOf(item) === 0}
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <div className="max-w-3xl">
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg">
                      {item.headline}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                      {item.subheadline}
                    </p>
                    <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={item.link}>
                        {item.cta} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
    </Carousel>
  </section>
);

const MusicSection = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Latest Music &amp; Media</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explore our collection of songs, music videos, and live worship sessions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {musicData.map(item => {
          const image = PlaceHolderImages.find(p => p.id === item.thumbnailId);
          return (
          <Card key={item.id} className="overflow-hidden group border-2 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                {image && 
                  <Image
                    src={image.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.imageHint}
                  />
                }
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.artist}</p>
              </div>
            </CardContent>
          </Card>
        )})}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <Link href="/music">View Full Gallery <MoveRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

const EventsSection = () => (
  <section className="py-16 lg:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Upcoming Events</h2>
        <p className="text-muted-foreground mt-2">Join us for a time of worship and fellowship.</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        {eventData.map(event => {
          const image = PlaceHolderImages.find(p => p.id === event.imageId);
          return (
            <Card key={event.id} className="grid md:grid-cols-3 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="md:col-span-1 relative h-48 md:h-full">
                {image && 
                  <Image 
                    src={image.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                }
              </div>
              <div className="md:col-span-2 p-6">
                <p className="text-sm font-semibold text-primary">{event.date}</p>
                <h3 className="font-headline text-2xl font-bold mt-1">{event.title}</h3>
                <p className="text-muted-foreground mt-2">{event.location}</p>
                <p className="mt-3 text-sm">{event.description}</p>
                <Button asChild className="mt-4">
                  <Link href="/events">View Details</Link>
                </Button>
              </div>
            </Card>
        )})}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <Link href="/events">More Events <MoveRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

const SocialSection = () => {
    const getIcon = (platform: SocialPost['platform']) => {
        switch (platform) {
            case 'instagram': return <Instagram className="h-5 w-5" />;
            case 'tiktok': return <TikTokIcon className="h-5 w-5" />;
            case 'youtube': return <Youtube className="h-5 w-5" />;
        }
    };
    
    const formatLikes = (platform: SocialPost['platform'], likes: number) => {
      if (platform === 'tiktok') {
        return `${likes}k`;
      }
      return likes.toLocaleString();
    };

    const formatComments = (platform: SocialPost['platform'], comments: number) => {
      if (platform === 'tiktok') {
        return `${comments}k`;
      }
      return comments.toLocaleString();
    };


    return(
  <section className="py-16 lg:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Join Our Community</h2>
        <p className="text-muted-foreground mt-2">Follow our journey on social media.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {socialData.map(post => {
            const userImage = PlaceHolderImages.find(p => p.id === post.userImageId);
            const postImage = PlaceHolderImages.find(p => p.id === post.postImageId);
            return (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <CardContent className="p-4 flex flex-col flex-1">
              <div className="flex items-center mb-3">
                {userImage && <Image src={userImage.imageUrl} alt={post.username} width={40} height={40} className="rounded-full" data-ai-hint={userImage.imageHint} />}
                <div className="ml-3">
                  <p className="font-bold">{post.username}</p>
                  <p className="text-xs text-muted-foreground capitalize">{post.platform}</p>
                </div>
                <div className="ml-auto text-primary">{getIcon(post.platform)}</div>
              </div>
              <div className="relative aspect-square w-full mb-3">
                {postImage && <Image src={postImage.imageUrl} alt={post.caption} fill className="object-cover rounded-md" data-ai-hint={postImage.imageHint}/>}
              </div>
              <p className="text-sm flex-1">{post.caption}</p>
              <div className="flex items-center text-sm text-muted-foreground mt-4 pt-4 border-t">
                <Heart className="h-4 w-4 mr-1.5" /> {formatLikes(post.platform, post.likes)}
                <div className="ml-auto">{formatComments(post.platform, post.comments)} comments</div>
              </div>
            </CardContent>
          </Card>
        )})}
      </div>
    </div>
  </section>
)};

const DonateSection = () => (
    <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Support Our Mission</h2>
            <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                Your generosity enables us to create music and events that spread a message of hope, faith, and love.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5"/> Give Now
                </Link>
            </Button>
        </div>
    </section>
)

export default function Home() {
  return (
    <>
      <HeroSection />
      <MusicSection />
      <EventsSection />
      <SocialSection />
      <DonateSection />
    </>
  );
}
