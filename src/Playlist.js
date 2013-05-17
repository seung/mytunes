var Playlist = Songs.extend({

  initialize: function(){
    this.on('add', function(song) {
      if (this.length == 1) {
        song.play();
      }
    }, this);

    this.on('ended', function(song) {
      this.remove(song);
      this.length && this.at(0).play();
    });
  }
});
