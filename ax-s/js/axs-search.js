$(document).ready(function() {
    $( "#axs_keyword" ).autocomplete({
        minLength: 3,
        source: function(request, response) {  
           // pass request to server, the return is a list of keyword to match the user input
            var jqxhr = $.ajax({
                url: "http://axs.igsl.co.uk/axs/webresources/jsonp/keywords?callback=?",
                dataType: "jsonp",
                success: function( data ) {
                  var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
                  response( $.grep( data, function( item ){
                    return matcher.test( item );
                  } ) );
                }
            })
        .fail(function(jqXHR, textStatus) {alert( "Request failed: " + textStatus );})
        }
    });
});
