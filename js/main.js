(function() {
  'use strict';

  console.log("Start...");

  var vm = new Vue({
    el: '#app',
    data: {
      inputDisabled: false,
      newItem: '',
      messages: [
        ['task 1', 'msg_left' ],
        ['task 2', 'msg_right' ],
        ['task 3 quick brown fox jumps over the lazy dog.....', 'msg_left' ]
      ]
    },
    methods: {
      inputDisable: function(){
          this.inputDisabled = false;
      },
      addItemSP: function(sp) {
        this.messages.push([sp, 'msg_left']);
      },
      addItem: function() {
        this.messages.push([this.newItem, 'msg_right']);
	this.inputDisabled = true;
	setTimeout( sayYes, 3000);
        //this.messages.push([ 'Yes!', 'msg_left']);
        this.newItem = '';
      }
    },
    x_mounted () {
      this.intervalId = setInterval(function(){
	console.log('hi');
	//
	//vm.addItemSP( 'hi' );
      }, 5000)
    }
  });

  var sayYes = function(){
    vm.addItemSP( 'Yes' );
    vm.inputDisable();
  };

})();

