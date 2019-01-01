alert("java is working")
var Img = document.getElementById("myImage");

console.log(Img);
var array = [];
array[0] = "Images/Image_1.jpg";
array[1] = "Images/Image_2.jpg";
array[2] = "Images/Image_3.jpg";
array[3] = "Images/Image_4.jpg";
array[4] = "Images/Image_5.jpg";
array[5] = "Images/Image_6.jpg";
var count = 0;
function changeImage(){
 Img.src = array[count];
}
var interval=5000;
changeImage();
function SLIDESHOW()
{
if(count <= array.length){
    
            setInterval(function()
            {
                if(count!=array.length){
                   count++;
                changeImage();
                }
                if(count>=array.length)
                {
                    count = 0;
                    changeImage();
                }   
            },interval);
        }
};
SLIDESHOW();
function next(){
     if(count!==array.length)
    {
        count++; 
        changeImage(); 
    }
    if(count>=array.length)
    {
        count = 0;
        changeImage();
    }
};
function prev(){
    if(count == 0)
    {
       count=6;
       changeImage();
    }
    if(count!=0)
    { 
       count--;
      changeImage(); 
    }
    
  
};
// function redirectCSS() {

// if ((screen.width == 320) && (screen.height == 551))
//       {document.write("<link href='./Styles/small-Screen.css' rel='stylesheet' type='text/css'>")}

// else if ((screen.width == 800) && (screen.height == 600))
//       {document.write("<link href='Medium-Screen.css' rel='stylesheet' type='text/css'>")}

// else if ((screen.width == 1024) && (screen.height == 768))
//       { document.write("<link href='Large-Screen.css' rel='stylesheet' type='text/css'>")}

// else
//       {document.write("<link href='./Styles/Main.css' rel='stylesheet' type='text/css'>")}
// }
// redirectCSS()