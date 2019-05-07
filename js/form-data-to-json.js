function ConvertFormToJSON(form){
    var array = jQuery(form).serializeArray();
    var jsonData = {};
    
    jQuery.each(array, function() {
        jsonData[this.name] = this.value || '';
    });

    ABjsonURL = 'https://registrar-api.herokuapp.com/?query'+'='+JSON.stringify(jsonData);
    return ABjsonURL;
    
}

function returnJSON(e)
{
 	e.preventDefault();
 	ConvertFormToJSON(jQuery('form#algInputs'))
 	console.log(ConvertFormToJSON(jQuery('form#algInputs')));
 	document.getElementById('algInputs').submit();
}

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


  $.getJSON('https://registrar-api.herokuapp.com/?query={"age":"27","bachelors_grad_year":"2006","masters_degree":"Yes","citizenship_country":"US","bachelors_major_category_Mechanical Engineering":"1","entrepreneurship_job":"1","entrepreneurship_intern":"1","market_analytics":"1"}', function(jd) {
console.log(jd.age)
               });

/*
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
});*/

