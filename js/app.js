
$(document).ready(function() {
  // When the mouse enters the ryu container
  $('.ryu').mouseenter(function() {
  	// Hide all of Ryu's actions
    $('.ryu-still').hide();
    // Show Ryu's ready stance
    $('.ryu-ready').show();
  })
  // When the mouse leaves the Ryu container
  .mouseleave(function() {
  	// Hide all of Ryu's actions
    $('.ryu-ready').hide();
    // Show still image of Ryu
    $('.ryu-still').show();
  })
  // When you press down on the mouse
  .mousedown(function() {
  	// Play Houdouken sound
    playHadouken(); 
    // Hide all of Ryu's action
    $('.ryu-ready').hide();
    // Show Ryu's throws Hadouken animation
    $('.ryu-throwing').show();
    // Show Hadouken fireball and animate it from left to right
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      300,
      function() {
      	// Stop the animation
      	$(this).stop();
      	// Hide Haouken fireball
        $(this).hide();
        // Reset fireball back to it's orginal location 
        $(this).css('left', '-212px');
      }
    );
  })
    // When you release the mouse button
  .mouseup(function() {
  	// Show Ryu's throws Hadouken animation
    $('.ryu-throwing').hide();
    // Ryu gets in the ready stance
    $('.ryu-ready').show();
  });

	$(document).keydown(function(event) {
		if (event.which == 88) {
		  	$('.ryu-cool').show();
		  	$('.ryu-ready').hide();
		  	$('.ryu-still').hide();
		}
	})
	
	.keyup(function(event) {
		if(event.which=88) {
	  		if( $('.ryu').is(':hover') ) {
		  		$('.ryu-ready').show();
		  		$('.ryu-cool').hide();
		  		$('.ryu-still').hide();
		  	}
		  	else {
		  		$('.ryu-ready').hide();
		  		$('.ryu-cool').hide();
		  		$('.ryu-still').show();
		  	}
		}
	});
});

 function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
} 