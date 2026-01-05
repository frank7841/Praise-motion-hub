import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { BandMember } from '@/lib/types';

const bandMembers: BandMember[] = [
  {
    id: 'member-leah',
    name: 'Leah',
    role: 'Lead Vocals & Acoustic Guitar',
    bio: 'Leah\'s powerful voice and heartfelt lyrics are the cornerstone of the band\'s sound. With a passion for leading others into worship, she crafts songs that speak to the soul and glorify God.',
    imageId: 'member-leah',
  },
  {
    id: 'member-sam',
    name: 'Sam',
    role: 'Bass & Backing Vocals',
    bio: 'The anchor of the rhythm section, Sam\'s intricate bass lines provide the foundation for the band\'s dynamic sound. His quiet spirit and steady presence are vital to the group\'s unity.',
    imageId: 'member-sam',
  },
  {
    id: 'member-chloe',
    name: 'Chloe',
    role: 'Drums & Percussion',
    bio: 'Chloe brings an infectious energy to every performance. Her creativity and precision on the drums drive the band\'s rhythm and inspire movement, both on stage and in the congregation.',
    imageId: 'member-chloe',
  },
  {
    id: 'member-ben',
    name: 'Ben',
    role: 'Keyboards & Synths',
    bio: 'Ben is the sonic architect, weaving together lush pads, soaring synth leads, and classical piano melodies. His deep knowledge of music theory adds a rich complexity to the band\'s arrangements.',
    imageId: 'member-ben',
  },
  {
    id: 'member-ethan',
    name: 'Ethan',
    role: 'Electric Guitar',
    bio: 'Ethan\'s soaring guitar solos and atmospheric textures are a signature of the band\'s live shows. His technical skill is matched only by his desire to worship.',
    imageId: 'member-ethan',
  },
  {
    id: 'member-maya',
    name: 'Maya',
    role: 'Backing Vocals & Keys',
    bio: 'Maya\'s harmonies are the heavenly glue that holds the vocals together. Her versatile musicianship and joyful spirit lift every song.',
    imageId: 'member-maya',
  },
  {
    id: 'member-noah',
    name: 'Noah',
    role: 'Acoustic Guitar & Mandolin',
    bio: 'Noah brings a folk and roots influence to the band\'s sound. His storytelling through song adds a layer of depth and intimacy to their worship.',
    imageId: 'member-noah',
  },
  {
    id: 'member-sophia',
    name: 'Sophia',
    role: 'Cello & Strings',
    bio: 'Sophia\'s classical training brings an orchestral elegance to the band. Her cello arrangements create moments of profound beauty and reflection.',
    imageId: 'member-sophia',
  },
];

export default function AboutPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'about-header');

  return (
    <div className="bg-background">
      <div className="relative h-64 md:h-80">
        {headerImage && (
          <Image
            src={headerImage.imageUrl}
            alt={headerImage.description}
            fill
            className="object-cover"
            data-ai-hint={headerImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Our Story</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            A journey of faith, friendship, and the relentless pursuit of God's presence through music.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-lg text-center leading-relaxed">
          <p className="mb-6">
            Praise Motion Band started not on a stage, but in a small living room with a shared vision: to create music that would not only sound good to the ears but feel good to the soul. We are a collective of musicians, songwriters, and worship leaders united by a common purpose—to lift high the name of Jesus and lead others into a genuine encounter with Him.
          </p>
          <p>
            From local worship nights to stages across the country, our journey has been a testament to God's faithfulness. Our songs are born from personal stories of trial and triumph, of doubt and deliverance. They are the anthems of our hearts, and we pray they become the anthems of yours, too.
          </p>
        </div>

        <div className="text-center my-16 lg:my-24">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet The Band</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            The hearts and hands behind the music.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {bandMembers.map(member => {
            const image = PlaceHolderImages.find(p => p.id === member.imageId);
            return (
              <Card key={member.id} className="text-center border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  {image && (
                    <div className="relative aspect-square">
                      <Image
                        src={image.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-headline text-2xl font-bold">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm">{member.role}</p>
                    <p className="text-muted-foreground mt-3 text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
