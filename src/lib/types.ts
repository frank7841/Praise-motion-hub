export type MediaItem = {
  id: string;
  type: 'song' | 'video' | 'live';
  title: string;
  artist: string;
  thumbnailId: string;
  embedUrl?: string;
  description?: string;
};

export type Event = {
  id:string;
  title: string;
  date: string;
  location: string;
  imageId: string;
  description: string;
};

export type SocialPost = {
  id: string;
  platform: 'instagram' | 'tiktok' | 'youtube' | 'facebook' | 'twitter' | 'spotify';
  username: string;
  userImageId: string;
  postImageId: string;
  caption: string;
  likes: number;
  comments: number;
};

export type BandMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageId: string;
};