import { Album } from 'src/app/music/model/Album';

export const mockAlbums: Album[] = [
  {
    id: '123',
    name: 'Album 123',
    type: 'album',
    images: [
      { url: 'http://placekitten.com/g/300/300', height: 300, width: 300 },
    ],
  },
  {
    id: '234',
    name: 'Album 234',
    type: 'album',
    images: [
      { url: 'http://placekitten.com/g/400/300', height: 300, width: 300 },
    ],
  },
  {
    id: '345',
    name: 'Album 345',
    type: 'album',
    images: [
      { url: 'http://placekitten.com/g/300/400', height: 300, width: 300 },
    ],
  },
  {
    id: '456',
    name: 'Album 456',
    type: 'album',
    images: [
      { url: 'http://placekitten.com/g/200/300', height: 300, width: 300 },
    ],
  },
];
