Webcam.set({
    width:310,
    height:310,
    img_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }

});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src='+data_uri+'></img>'
    })
}
console.log("ml5.version".ml5.version)

classifier=ml5.imageClassifier('MobileNet',modelloaded);
function modelloaded(){
    console.log('modelloaded');
}
function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log("results");
        document.getElementById("result_object_name").innerHTML=results[0].label
    }
}