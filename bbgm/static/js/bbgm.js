// Play menu
function comet_play_menu(url, status_t, options_t) {
    $play_status = $('#play_status')
    $play_button = $('#play_button')
    status_t = typeof status_t !== 'undefined' ? status_t : 0;
    options_t = typeof options_t !== 'undefined' ? options_t : 0;

    $.ajax({
	    type: 'GET',
	    url: url,
	    cache: false,
        data: {status_t: status_t, options_t: options_t},
	    success: function(data) {
            var json = JSON.parse(data);
            status_t = json['status_t'];
            options_t = json['options_t'];
            if (json['status'] != '') {
    		    $play_status.html(json['status']);
            }
            if (json['button'] != '') {
    		    $play_button.html(json['button']);
            }
		    setTimeout('comet_play_menu(\'' + url + '\', ' + status_t + ', ' + options_t + ')', 1000);
	    },
	    error: function(XMLHttpRequest, textstatus, error) {
		    setTimeout('comet_play_menu(\'' + url + '\')', 15000);
	    }		
    });
}