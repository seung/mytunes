var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  addToPlaylist: function() {
    this.trigger('addToPlaylist', this);
  }
});
