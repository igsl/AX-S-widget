function getParameterByName(name)
{
name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
var regexS = "[\\?&]" + name + "=([^&#]*)";
var regex = new RegExp(regexS);
var results = regex.exec(window.location.search);
if (results == null)
  return "";
else
  return decodeURIComponent(results[1].replace(/\+/g, " "));
}
var _axs_search_keyword = getParameterByName('axs_keyword');
var _axs_education_level = getParameterByName('education_level');
$(document).ready(function() {
    $('#search_terms').text('Searched for: '+_axs_search_keyword + ' - ' + _axs_education_level);
    $('#datalist').dataTable({
      "oLanguage": {
       "sEmptyTable": "No courses found, please try selecting a different search term from the 'Search for' list."
      },
      "sDom": '<"H"l<"search">r>t<"F"ip>',
      "bJQueryUI": true,
      "bFilter": false,
      "bSort": false,
      "bProcessing": true,
      "sAjaxSource": "http://axs.igsl.co.uk/axs/webresources/search/jsonp/"+_axs_search_keyword +"/"+_axs_education_level,
      "fnServerData": function( sUrl, aoData, fnCallback, oSettings ) {
        oSettings.jqXHR = $.ajax( {
            "url": sUrl,
            "data": aoData,
            "success": fnCallback,
            "dataType": "jsonp",
            "type": "Get",
            "cache": false
        } );
        },
      "aoColumns": [
        {"sWidth":"30px",
          "mData": function ( source, type, val ) {
          return '<b><a href="'+source.courseUrl+'" target="_blank">'+source.courseCode+'</a></b>';
          }
        },
        {"mData": "courseTitle"},
        {"sWidth":"90px",
         "mData": "educationLevel"},
      ]
    });      
    $("div.search").html('<a href="ou.html" class="axs-link" >Search again</a>'); 
});