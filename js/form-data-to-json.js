function ConvertFormToJSON(form){
    var array = jQuery(form).serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}

jQuery(document).on('ready', function() {
    jQuery('form#algInputs').bind('submit', function(event){
        event.preventDefault();

        var form = this;
        var json = ConvertFormToJSON(form);
        console.log(json);
         });
});

console.log(json)