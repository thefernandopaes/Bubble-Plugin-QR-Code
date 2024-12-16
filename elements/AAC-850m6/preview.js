function(instance, properties) {
var preview = Math.min(properties.bubble.height, properties.bubble.width);
    
    var imgElement = document.createElement("IMG");
    imgElement.setAttribute("src", "https://s3.amazonaws.com/appforest_uf/f1618739883377x776538474471689000/qrcodepreview.fw.png");
    imgElement.style.width = 0.8 * preview + "px";
    imgElement.style.verticalAlign = "middle";
    
    instance.canvas[0].appendChild(imgElement);


}