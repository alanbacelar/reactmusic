import resource from './resource';

class SpotifyApi {

    me() {
        return resource('me');
    }

    getPlaylists() {
        return resource('me/playlists');
    }

    getPlaylist(user_id, playlist_id) {
        return resource(`users/${user_id}/playlists/${playlist_id}`);
    }

    getMySongs() {
        return resource(`me/tracks?offset=0&limit=50`);
    }

}

export default new SpotifyApi();