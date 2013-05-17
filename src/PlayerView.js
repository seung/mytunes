var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    var self = this;
    // self.model.on('change', function() {
    //   self.render();
    // })

    this.$el.on('ended', function() {
      self.model.ended();
    })
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }
});
