
import { Component } from '@angular/core';
var Clarifai = require('clarifai');

@Component({
  selector: 'my-spaceapps',
  templateUrl: './spaceapps.component.html'
})

export class SpaceappsComponent {
  app;
  concepts: any[];
  url;
  constructor(){
    this.app = new Clarifai.App(
        'put keys',
        'here'
      );
    console.log("SpaceappsComponent");
  }

image1(){
  this.url = 'http://localhost:8000/assets/images/image1.png';
  this.toDataURL(this.url , (dataUrl) => this.callClarifai(dataUrl));
}
image2(){
  this.url = 'http://localhost:8000/assets/images/image2.png';
  this.toDataURL(this.url, (dataUrl) => this.callClarifai(dataUrl));
}
image3(){
  this.url = 'http://localhost:8000/assets/images/image3.png';
  this.toDataURL(this.url, (dataUrl) => this.callClarifai(dataUrl));
}

toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

callClarifai(url){
  var topass = url.slice(22);
  
      // predict the contents of an image by passing in a url
      // this.app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
      this.app.models.predict(Clarifai.GENERAL_MODEL, topass).then(
        (response) => {
          this.concepts = response.outputs[0].data.concepts;
          console.log(this.concepts);
        },
        (err) => {
          console.error(err);
        }
      );
}


}