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
  platform: 'instagram' | 'tiktok' | 'youtube';
  username: string;
  userImageId: string;
  postImageId: string;
  caption: string;
  likes: number;
  comments: number;
};
