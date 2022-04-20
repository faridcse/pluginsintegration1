$(document).ready(function() {

	// $(selector).countMe(delay,speed)
	$("#counter1").countMe(40,25);
	$("#counter2").countMe(40,75);
	$("#counter3").countMe(40,55);

  //counter-up
  $('.counterup1').counterUp({
            delay: 1,
            time: 1000
  });

  $('.counterup2').counterUp({
            delay: 1,
            time: 800
  });

  $('.counterup3').counterUp({
            delay: 1,
            time: 500
  });

	//wow-js
	 wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();

   //aos
   AOS.init();

   //count360
   $("#countdown1").countdown360({
         radius      : 60,
         seconds     : 100,
         fontColor   : '#FFFFFF',
         autostart   : false,
         onComplete  : function () { console.log('done') }
       }).start();

   $("#countdown2").countdown360({
         radius      : 60,
         seconds     : 20,
         fontColor   : '#FFFFFF',
         autostart   : false,
         onComplete  : function () { console.log('done') }
       }).start();

   $("#countdown3").countdown360({
         radius      : 60,
         seconds     : 300,
         fontColor   : '#FFFFFF',
         autostart   : false,
         onComplete  : function () { console.log('done') }
       }).start();


});