window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader1");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function openNav() {
          document.getElementById("myNav").style.width = "14%";
          document.getElementById("icon").style.visibility="hidden";
          document.getElementById("myNav").style.opacity="1";
          
          }
function closeNav() {
          document.getElementById("myNav").style.width = "0%";
          document.getElementById("icon").style.visibility="visible";
          document.getElementById("myNav").style.opacity="0";
          }


   const sectionOne = document.querySelector(".home-intro");
          
  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");
          
          const sectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px"
          };
          
          const sectionOneObserver = new IntersectionObserver(function(
            entries,
            sectionOneObserver
          ) {
            entries.forEach(entry => {
              if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
              } else {
                header.classList.remove("nav-scrolled");
              }
            });
          },
          sectionOneOptions);
          
          sectionOneObserver.observe(sectionOne);
          
          const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -250px 0px"
          };
          
          const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll)
           {
            entries.forEach(entry => {
              if (!entry.isIntersecting) {
                return;
              } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
              }
            });
          },
          appearOptions);
          
          faders.forEach(fader => {
            appearOnScroll.observe(fader);
          });
          
          sliders.forEach(slider => {
            appearOnScroll.observe(slider);
          });