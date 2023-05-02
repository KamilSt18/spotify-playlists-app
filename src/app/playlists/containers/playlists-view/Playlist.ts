import { Item } from '../../models/UserPlaylistsResponse';

export interface Playlist extends Item {
  id: string;
  name: string;
  public: boolean;
  description: string;
}
