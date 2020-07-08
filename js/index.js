
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("ctn-btn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
filterSelectionReview("review-1")
function filterSelectionReview(c) {
  var x, i;
  x = document.getElementsByClassName("review");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "review-block");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "review-block");
    console.log(x[i].className)
  }
}
function removeClass(element, name) {
  for (var i = 0; i < element.length; i++) {
    while (element[i].classList.contains(name)) {
      element[i].classList.remove(name);
    }
  }
 
}
var h1 = document.querySelector('.box1');
var h2 = document.querySelector('.box2');
var h5 = document.querySelector('.box5');
var h3= document.querySelector('.box-third');
var h6 = document.querySelector('.box6');
var h7 = document.querySelector('.box7');
var h8 = document.querySelector('.box8');
var h11 = document.querySelector('.box11');
var h12 = document.querySelector('.box12');
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      //  bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
var isInViewport2 = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
var getClass = document.getElementsByClassName('list-nav');

window.addEventListener('scroll', function (event) {
	if (isInViewport(h1)) {
   
    var g1 = getClass[0].classList;
    removeClass(getClass,'scroll-to')
    console.log(getClass)
    g1.add('scroll-to');
  }
  else if(isInViewport(h2))
  {
    removeClass(getClass,'scroll-to');  
    var getName = document.querySelector('.link-about')
    getName.classList.add('scroll-to');
  }
  else if(isInViewport(h3))
  {
    removeClass(getClass,'scroll-to');  
  }
  else if(isInViewport(h5))
  {
    removeClass(getClass,'scroll-to');  
    var getService = document.querySelector('.link-service')
    getService.classList.add('scroll-to');
    
  }
  else if(isInViewport(h6))
  {
    removeClass(getClass,'scroll-to');  
    var getService = document.querySelector('.link-resume')
    getService.classList.add('scroll-to');
  }
  else if(isInViewport(h7))
  {
    removeClass(getClass,'scroll-to');  
    var getService = document.querySelector('.link-work')
    getService.classList.add('scroll-to');
  }
  else if(isInViewport(h8))
  {
    removeClass(getClass,'scroll-to');  
  }
  else if(isInViewport2(h11))
  {
    removeClass(getClass,'scroll-to');  
    var getService = document.querySelector('.link-blog')
    getService.classList.add('scroll-to');
  }
  else if(isInViewport2(h12))
  {
    removeClass(getClass,'scroll-to');  
    var getService = document.querySelector('.link-contact')
    getService.classList.add('scroll-to');
  }
}, false);




