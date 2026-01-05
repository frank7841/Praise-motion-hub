import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { MediaItem } from '@/lib/types';
import { Disc, PlayCircle, Podcast, Video } from 'lucide-react';

const musicData: MediaItem[] = [
  { id: '1', type: 'song', title: 'Grace that Overflows', artist: 'PraiseMotion', thumbnailId: 'music-album-1', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '2', type: 'song', title: 'Unending Praise', artist: 'PraiseMotion', thumbnailId: 'music-album-2', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '3', type: 'song', title: 'Anchor of My Soul', artist: 'PraiseMotion', thumbnailId: 'music-album-3', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '4', type: 'video', title: 'Live at the Cathedral', artist: 'PraiseMotion', thumbnailId: 'music-video-1', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '5', type: 'video', title: 'Behind the Music', artist: 'PraiseMotion', thumbnailId: 'music-video-2', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '6', type: 'live', title: 'Acoustic Worship Sessions', artist: 'PraiseMotion', thumbnailId: 'music-live-1', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '7', type: 'live', title: 'Sunday Morning Worship', artist: 'PraiseMotion', thumbnailId: 'music-live-2', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

const MediaCard = ({ item }: { item: MediaItem }) => {
  const image = PlaceHolderImages.find(p => p.id === item.thumbnailId);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <CardContent className="p-0">
            <div className="relative aspect-video">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg truncate">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.artist}</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0">
        <div className="aspect-video">
            {item.embedUrl ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={item.embedUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t-lg"
                ></iframe>
            ) : (
                <div className="bg-muted h-full w-full flex items-center justify-center rounded-t-lg">
                    <p>Player not available.</p>
                </div>
            )}
        </div>
        <DialogHeader className="p-6">
          <DialogTitle className="font-headline text-2xl">{item.title}</DialogTitle>
          <DialogDescription>
            {item.artist} - For an optimal experience, listen on{' '}
            <Link href="#" className="text-primary underline">Spotify</Link> or{' '}
            <Link href="#" className="text-primary underline">Apple Music</Link>.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};


export default function MusicPage() {
  const songs = musicData.filter(item => item.type === 'song');
  const videos = musicData.filter(item => item.type === 'video');
  const liveSessions = musicData.filter(item => item.type === 'live');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Music &amp; Media</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Immerse yourself in the sounds of worship. Explore our latest songs, official music videos, and live session recordings.
          </p>
        </div>

        <Tabs defaultValue="songs" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="songs"><Disc className="mr-2 h-4 w-4"/>Songs</TabsTrigger>
            <TabsTrigger value="videos"><Video className="mr-2 h-4 w-4"/>Videos</TabsTrigger>
            <TabsTrigger value="live-sessions"><Podcast className="mr-2 h-4 w-4"/>Live Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="songs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {songs.map(item => <MediaCard key={item.id} item={item} />)}
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map(item => <MediaCard key={item.id} item={item} />)}
            </div>
          </TabsContent>
          <TabsContent value="live-sessions">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveSessions.map(item => <MediaCard key={item.id} item={item} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
