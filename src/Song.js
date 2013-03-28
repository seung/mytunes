var Song = Backbone.Model.extend({
  // initialize: function() {
  //
  // },
      // broadcast the play event
  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },
      // 1-1 mapping between method
      // broadcast the addToPlaylist event
  addToPlaylist: function() {
    this.trigger('addToPlaylist', this);
  }
  // add removefrom playlist
  // removeFromPlaylist: function() {
  // }
});
