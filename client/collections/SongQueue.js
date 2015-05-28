// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('update', function() {
      // console.log('add or remove has occurred');
      if (this.length >= 1) {
        this.playFirst();
      }
    }, this);

    this.on('remove', function() {
      // console.log('add or remove has occurred');
      if (this.length >= 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.first());
      // this.playFirst();
    }, this);

  },

  playFirst: function(){
    this.first().play();
  }

});
