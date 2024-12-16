function(instance, properties, context) {
    
    if (properties.color.match("rgba")){
       var rgba = properties.color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
       var hex = `${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;
    }
    
    else {
        var hex =  properties.color.replace('#','');
    }
    
   
var QrCode = `https://api.qrserver.com/v1/create-qr-code/?data=${properties.content}&size=${properties.size}x${properties.size}&color=${hex}`;
    if (properties.content == null){}
    	else {
        instance.publishState('url',QrCode);
        instance.triggerEvent('save')
        }

}