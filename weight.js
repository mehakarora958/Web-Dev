//to hide weight blocks until input
//const cssStyle = document.getElementById('output');
//cssStyle.style.visibility = "hidden";
//to hide length blocks until input
const cssStyleOne = document.getElementById("outputOne");
cssStyleOne.style.visibility = "hidden";

//to hide area block
const cssStyleTwo = document.getElementById("areaOutput");
cssStyleTwo.style.visibility = "hidden";



const myLength = document.getElementById("length");
const myArea = document.getElementById("area");
const myVolume = document.getElementById("volume");

//now grab input
const myInput = document.getElementById("myInput");

//first length converter
myLength.addEventListener("click", function (e) {
  console.log("working");
  myInput.addEventListener("input", function (e) {
    console.log("working also");
    cssStyleOne.style.visibility = "visible";
    let lengthValue = e.target.value;
    let meter = document.getElementById("meterOutput");
    let cms = document.getElementById("cmsOutput");
    let mile = document.getElementById("mileOutput");
    let inch = document.getElementById("inchOutput");
    let feet = document.getElementById("feetOutput");
    meter.innerHTML = lengthValue * 1000;
    cms.innerHTML = lengthValue * 100000;
    mile.innerHTML = lengthValue * 0.621371;
    inch.innerHTML = lengthValue * 39370.1;
    feet.innerHTML = lengthValue * 3280.84;
  });
});

myArea.addEventListener("click", function (e) {
  console.log("Working area")
  myInput.addEventListener("input", function (e) {
    console.log("area 2")
    cssStyleTwo.style.visibility = "visible";
    let areaValue = e.target.value;
    let sqyard = document.getElementById("sqyardOutput");
    let sqMile = document.getElementById("sqmileOutput");
    let sqKm = document.getElementById("sqkmOutput");
    let sqFoot = document.getElementById("sqftOutput");
    let sqCms = document.getElementById("sqcmsOutput");
    sqyard.innerHTMl = areaValue * 4840;
    sqMile.innerHTML = areaValue * 0.0015625;
    sqCms.innerHTML = areaValue * 40468564.224;
    sqFoot.innerHTML = areaValue * 43560;
    sqKm.innerHTML = areaValue * 0.00404686;
  });
});

/*myInput.addEventListener("input", function (e) {
  cssStyle.style.visibility = "visible";
  let kgs = e.target.value;

  let pounds = document.getElementById("poundOutput");
  pounds.innerHTML = kgs * 2.20462;

  let ounces = document.getElementById("ozOutput");
  ounces.innerHTML = kgs * 35.274;

  let gms = document.getElementById("gmsOutput");
  gms.innerHTML = kgs * 1000;
});
*/
