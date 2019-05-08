function sendToAlg(form){
    var array = jQuery(form).serializeArray();
    var jsonData = {};
    
    jQuery.each(array, function() {
        jsonData[this.name] = this.value || '';
    });

    ABjsonURL = 'https://registrar-api.herokuapp.com/?query'+'='+JSON.stringify(jsonData);
 
    $.getJSON(ABjsonURL, function (data) {
        var tableStart = "<button class='prevNext' onclick='fnExcelReport();'> EXPORT TO EXCEL </button><table id='result_course_table' style='width:100%;overflow-x:auto;'><tr><th>Course Number</th><th>Title</th><th>Quarter</th><th>Week</th><th>Time</th></tr>"
        var i;
        for (i = 0; i < data.length; i++) { 
        if (data[i].RegisterClassBinary==1) {
         tableStart = tableStart+"<tr><td>"+data[i].CourseNumber+"</td>"+"<td>"+data[i].Title+"</td>"+"<td>"+data[i].Qtr+"</td>"+"<td>"+data[i].Week+"</td>"+"<td>"+data[i].Time+"</td></tr>";
        }
        }
        var tableResults = tableStart+"</table>"
        document.getElementById('htmlTable').innerHTML = tableResults;
        document.getElementById('loading').classList.add('hide');
        document.getElementById('revise').classList.remove('hide');                      
}) 
}

function fnExcelReport()
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('result_course_table'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);
}

//add headers, add if statement to pull only 1 binary

/*


document.getElementById('htmlTable').appendChild(document.createTextNode(tableResults);

    $.ajax({
    contentType: 'application/json',
    url:  "https://registrar-api.herokuapp.com/",
    dataType : 'json',
    data : jsonData 
})

  abJSONurl = "https://registrar-api.herokuapp.com/?query="+jsonData
*/

/*jQuery(document).on('ready', function() {
    jQuery('form#algInputs').bind('submit', function(event){
        event.preventDefault();

        var form = this;
        var jsonData = ConvertFormToJSON(form);
        console.log(jsonData);
         });
});*/


/*$(function() {
    $('form#algInputs').on('submit', function(e) {
        e.preventDefault();
        var jsonData = ConvertFormToJSON(jQuery('form#algInputs'));
        console.log(jsonData);
    });


     function downloadObjectAsJson(formSelector, exportName){
   var exportObj = ConvertFormToJSON(jQuery(formSelector))
   var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
   var downloadAnchorNode = document.createElement('a');
   downloadAnchorNode.setAttribute("href",     dataStr);
   downloadAnchorNode.setAttribute("download", exportName + ".json");
   document.body.appendChild(downloadAnchorNode);
   downloadAnchorNode.click();
   downloadAnchorNode.remove();
  }


  function returnJSON(e)
{
  e.preventDefault();
  sendToAlg(jQuery('form#algInputs'))
  console.log(sendToAlg(jQuery('form#algInputs')));
}

});*/

