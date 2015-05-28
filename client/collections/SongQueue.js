// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function(){
    this.on('add', function() {
      // console.log('add or remove has occurred');
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('remove', function() {
      // console.log('add or remove has occurred');
      if (this.length >= 1) {
        this.playFirst();
      } else if (this.length === 0) {
        return;
      }
    }, this);


    this.on('ended', function() {
      this.remove(this.first());
      if (this.length >= 1) {
        this.playFirst();
      } else if (this.length === 0) {
        return;
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

    this.on('enqueue', function(song) {
      debugger;
      this.add(song);
    }, this);

  },

  playFirst: function(){
    this.first().play();
  }

});
