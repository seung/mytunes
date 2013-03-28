var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('playlist', new Playlist());

      // when anysong in the library when play event happens
    params.library.on('play', function(song){
      // set that song to current song
      this.set('currentSong', song);
    }, this);

    params.library.on('addToPlaylist', function(song) {
      this.get('playlist').add(song); // get or set?
    },this);
  }

});
