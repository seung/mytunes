var PlaylistView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add remove', function(song) {
      this.render();
    }, this)
  },

  render: function(){

    this.$el.children().detach();

    return this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }
});
