var lastScrollTop = 0;

const nav = document.getElementById('nav')
const navList = document.getElementById('navList')
const navToggle = document.getElementById('nav-toggle')

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      nav.style.top = "-80px"
      if (navToggle.checked) {
          console.log("error")
          navList.style.right = "-150px"
      }
   } else {
       if (navToggle.checked) {
            navList.style.right = "0"
       }
        nav.style.top = "0px"
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);