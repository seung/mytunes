  // subclass of Songs, which is subclass of Collection
var Playlist = Songs.extend({

  initialize: function(){
    // $("body").append('<div>Playlist.js</div>');
    this.on('add', function(song) {
      if (this.length == 1) {
        song.play();
      }
    }, this);

    this.on('ended', function(song) {
      this.remove(song);
      this.length && this.at(0).play();
      // if (this.length===0) {
        // this.at(0).play();
      // }
    });
  }

});
