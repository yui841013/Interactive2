$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '125px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 200 );
	});
	

	$('#button-4').click(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-5').click(function() {
		$('.item').toggleClass('circle');
	});


	// check when the mouse moves
	$('#button-6').mousemove(function(e){
		
		// update mouse x and y position
		var xPos = e.pageX-125;
		var yPos = e.pageY-125;

		$(this).css({
			'position' : 'absolute',
			'top' :  yPos+'px',
			'left' :  xPos+'px',
		});
	});

});

$(function() {
	
	$("#button-7").mousedown(function(e) {
		var ink = new Ink($(this), e);
	});

	function Ink(parent, e) {
		
		this.el = $("<span>", { class: "material-ink" });

		parent.prepend(this.el);

		d = Math.max(parent.outerWidth(), parent.outerHeight());
		this.el.css({ height: d, width: d });

		x = e.pageX - parent.offset().left - d / 2;
		y = e.pageY - parent.offset().top - d / 2;

		this.el
			.css({ top: y + "px", left: x + "px" })
			.addClass("material-ink-animate");

		this.destroy(500);
		
	}

	Ink.prototype.destroy = function(time) {
		
		var that = this; // Gotta love this (pun intended)
		
		setTimeout(function() {
			that.el.remove();
			that = undefined;
		}, time);
	};
	
});



$(document).ready(function() {
    $('#button-10').click(function() {
        $('#button-2').toggleClass('disappear');
        // $('.squaregroup').addClass('appear');
    });
    });


$(document).ready(function() {
$('#button-11').click(function(){
  $('#button-11').toggleClass('doorOpen');
});
});


$(document).ready(function() {
$('#button-12').click(function(){
  $('#button-12').toggleClass('doorOpen2');



});
});

$(document).ready(function() {
$('.door').on('click', function(){
  $(this).toggleClass('open');
});
});


$(document).ready(function() {
    $('#button-14').click(function() {
        $('#button-2,#button-9,#button-20,#button-1,#button-5,#button-9,#button-10,#button-16').toggleClass('disappear');
        // $('.squaregroup').addClass('appear');
    });
    });

$(document).ready(function(){
	
	$('#button-15').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '500px',
			fontSize: '120px',
			borderWidth: '50px'
		}, 9 );
	});
	});


$(document).ready(function(){
	$('#button-16').click(function() {
		$(this).animate({
			opacity: 0.4,
			margintop: '500px',
			fontSize: '120px',
			borderWidth: '50px'
		}, 9 );
	});
	
});
$(document).ready(function(){

$('.pop-up').hide(0);
$('.pop-up-container').hide(0);

$('.#button-16').click(function(){
  $('.pop-up-container').show(0);
  $('.pop-up').fadeIn(300);
  $('.#button-16').hide(0);
});
$('.pop-up span').click(function() {
  $('.pop-up-container').hide(0);
  $('.pop-up').hide(0);
  $('.#button-16').show(0);
});
});


function myFunction() {
    alert("Hello! Hello!");
}




$(document).ready(function() {
    $('#button-23').click(function() {
        $('#button-2').toggleClass('disappear');
        // $('.squaregroup').addClass('appear');
    });
    });

	









