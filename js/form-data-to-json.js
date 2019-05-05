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


$(function() { //shorthand document.ready function
    $('form#algInputs').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        var jsonData = ConvertFormToJSON(jQuery('form#algInputs'));
        console.log(jsonData); //use the console for debugging, F12 in Chrome, not alerts
    });
});