import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import { TikTokIcon, SpotifyIcon } from '@/components/icons';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-headline text-2xl font-bold flex items-center gap-2">
              <Image src="/images/praise-motion.png" alt="Logo" width={50} height={50} /> Praise Motion Band
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Spreading faith, hope, and love through music.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram />
              </Link>
              <Link href="https://www.youtube.com/@praisemotionband?si=H0Hdv69stUAEwcng" className="text-muted-foreground hover:text-primary">
                <Youtube />
              </Link>
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <TikTokIcon />
              </Link> */}
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter />
              </Link>
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <SpotifyIcon />
              </Link> */}
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold">Explore</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/music" className="text-muted-foreground hover:text-primary">Music</Link></li>
                <li><Link href="/events" className="text-muted-foreground hover:text-primary">Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">About</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">Our Story</Link></li>
                <li><Link href="/press" className="text-muted-foreground hover:text-primary">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Connect</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                <li><Link href="/donate" className="text-muted-foreground hover:text-primary">Donate</Link></li>
                <li><Link href="/admin/content-suggestions" className="text-muted-foreground hover:text-primary">Admin</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Praise Motion Band. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
