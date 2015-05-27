// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    // console.log(this);
    // debugger;
    this.first().play();
    // this.trigger('play', this.get(0));
  }

});
