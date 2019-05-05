function ConvertFormToJSON(form){
    var array = jQuery(form).serializeArray();
    var jsonData = {};
    
    jQuery.each(array, function() {
        jsonData[this.name] = this.value || '';
    });
    
    return jsonData;
}

/*jQuery(document).on('ready', function() {
    jQuery('form#algInputs').bind('submit', function(event){
        event.preventDefault();

        var form = this;
        var jsonData = ConvertFormToJSON(form);
        console.log(jsonData);
         });
});*/


$(function() {
    $('form#algInputs').on('submit', function(e) {
        e.preventDefault();
        var jsonData = ConvertFormToJSON(jQuery('form#algInputs'));
        console.log(jsonData);
    });
});

function wait(e)
{
 ConvertFormToJSON(jQuery('form#algInputs'));
 e.preventDefault();
 document.getElementById('algInputs').submit();
 console.log('done!')
 ConvertFormToJSON(jQuery('form#algInputs'));
}