function sendToAlg(form){
    var array = jQuery(form).serializeArray();
    var jsonData = {};
    
    jQuery.each(array, function() {
        jsonData[this.name] = this.value || '';
    });

    ABjsonURL = 'https://registrar-api.herokuapp.com/?query'+'='+JSON.stringify(jsonData);
 
    $.getJSON(ABjsonURL, function (data) {
        var tableStart = "<table style='width:100%;overflow-x:auto;'><tr><th>Course Number</th><th>Title</th><th>Quarter</th><th>Week</th><th>Time</th></tr>"
        var i;
        for (i = 0; i < data.length; i++) { 
        if (data[i].RegisterClassBinary==1) {
         tableStart = tableStart+"<tr><td>"+data[i].CourseNumber+"</td>"+"<td>"+data[i].ProbAdjForCredits+"</td>"+"<td>"+data[i].Qtr+"</td>"+"<td>"+data[i].Week+"</td>"+"<td>"+data[i].Time+"</td></tr>";
        }
        }
        var tableResults = tableStart+"</table>"
        document.getElementById('htmlTable').innerHTML = tableResults;
        document.getElementById('loading').classList.add('hide');
        document.getElementById('revise').classList.remove('hide');                      
}) 
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

