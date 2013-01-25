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
<!-- axs_keyword and axs_education_level must match the search page parameters -->
var _axs_search_keyword = getParameterByName('axs_keyword');
var _axs_education_level = getParameterByName('axs_education_level');
$(document).ready(function() {
    $('#search_terms').text('Searched for: '+_axs_search_keyword + ' - ' + _axs_education_level);
    $('#datalist').dataTable({
      "sDom": '<"H"lr>t<"F"ip>',
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
        {"mData": "courseCode"},
        {"mData": "courseTitle"},
        {"mData": "educationLevel"},
      ]
    });      
});
