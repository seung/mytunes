var PlaylistView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add remove', function(song) {
      this.render();
    }, this)
  },
  
  //   var self = this;
  //   initialize: function() {
  //   self.collection.on('add remove', function(song) {
  //     this.render();
  //   });
  // },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach(); // this: backbone obj
                                  // detach has to be called on jquery obj == $el
    return this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});
      // index.html-->
      // new PlaylistView({collection: this.model.get('playlist')}).render()