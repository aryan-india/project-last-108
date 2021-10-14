function startClassifaction(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/78inEd4Aq/model.json',modelReady);

}

function modelReady(){
classifier.classify(gotResult);
}

function gotResult(error,result){
    if (error) {
        console.error(error);

    }
    else {
        console.log(result)
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="voice detected-"+result[0].label;
        
        document.getElementById("result_confidence").innerHTML="It is the voice of a-"+(result[0].confidence*100).toFixed(2)+" %";
       
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
      img=document.getElementById('animal');

      if(result[0].label=="bark"){
          img.src="dog dancing.gif";
      }
     
      else if (result[0].label=="cat"){
            img.src="dancing cat.gif";
      }
    
      else{
        
       img.src="ear.jpg"; 
      }
        
    
    }

}