$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.top_section-text').css({
        'opacity': (((height - scrollTop) / height) - .5)
    });
    var currentOpacity = parseFloat($('.top_section-text').css('opacity'));
    if (currentOpacity <= 0) {
    	$('.top_section-description')[0].style.visibility = "hidden";
		$('.top_section-name')[0].style.visibility = "hidden";
	} else if (currentOpacity < 0.1) {
    	$('.top_section-icon').each(function(index) {
 			 $(this)[0].style.visibility = "hidden";
		});

		$('button.fill')[0].style.visibility = "hidden";
	} else {
    	$('.top_section-icon').each(function(index) {
 			 $(this)[0].style.visibility = "visible";
		});

		$('button.fill')[0].style.visibility = "visible";
		$('.top_section-description')[0].style.visibility = "visible";
		$('.top_section-name')[0].style.visibility = "visible";
    }
});

$(document).ready(function() {
    var waypoint = new Waypoint({
		element: document.getElementById('nav-waypoint'),
		handler: function(direction) {
			if (direction === 'down') {
    			$('.navbar').addClass("fixed-top");
    		} else if (direction == 'up') {
    			$('.navbar').removeClass("fixed-top");
    		}
  		},
  		offset: 60
	});

    $('#contact_form').submit(function() { 
        $('#contact_form').ajaxSubmit({
            type:"POST",
            data: $('#contact_form').serialize(),
            url:"process.php",
            success: function() {
                console.log('success');
            },
            error: function() {
                console.log('error');
            }
        });

        return false;   
    }); 
});