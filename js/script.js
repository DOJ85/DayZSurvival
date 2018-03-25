function randombg(){
  var random= Math.floor(Math.random() * 18) + 0;
  var bigSize = ["url('img/img1.jpg')",
                 "url('img/img2.jpg')",
                 "url('img/img3.jpg')",
                 "url('img/img4.jpg')",
                 "url('img/img5.jpg')",
                 "url('img/img6.jpg')",
                 "url('img/img7.jpg')",
                 "url('img/img8.jpg')",
                 "url('img/img9.jpg')",
                 "url('img/img10.jpg')",
                 "url('img/img11.jpg')",
                 "url('img/img12.jpg')",
                 "url('img/img13.jpg')",
                 "url('img/img14.jpg')",
                 "url('img/img15.jpg')",
                 "url('img/img16.jpg')",
                 "url('img/img17.jpg')",
                 "url('img/img18.jpg')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}
