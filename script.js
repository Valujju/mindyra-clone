window.addEventListener('scroll', function() {
    var myDiv = document.getElementById('myDiv');
    if (window.scrollY > 1) {
        myDiv.classList.add('fixed');
    } else {
        myDiv.classList.remove('fixed');
    }
});

window.addEventListener('scroll', function() {
    var myDiv = document.getElementById('myDiv');
    if (window.scrollY > 1) {
        myDiv.classList.add('font-color1');
    } else {
        myDiv.classList.remove('font-color1');
    }
});


window.addEventListener('scroll', function() {
    var black = document.getElementById('black');
    if (window.scrollY > 1) {
        black.classList.add('font-color2');
    } else {
        black.classList.remove('font-color2');
    }
});


window.addEventListener('scroll', function() {
    var invertcol = document.getElementById('invertcol');
    if (window.scrollY > 1) {
        invertcol.classList.add('font-invert-color');
    } else {
        invertcol.classList.remove('font-invert-color');
    }
});





// mobile nav  

// document.addEventListener("DOMContentLoaded", function() {
//     var button = document.getElementById("myDiv");
    
//     button.addEventListener("click", function() {
//         button.classList.add("mob-nav-height");
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("ham");
    var div0 = document.getElementById("display_li");
    
    button.addEventListener("click", function() {
        div0.classList.toggle("display_li");
    });
    function checkWidth() {
        if (window.innerWidth <= 768) {
            div0.classList.remove("display_li");
        }
    }

    // Check width on resize
    window.addEventListener("resize", checkWidth);

    // Check width on initial load
    checkWidth();
});





document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("ham");
    var div = document.getElementById("myDiv");
    
    button.addEventListener("click", function() {
        div.classList.toggle("mob-nav-height");
    });
    function checkWidth() {
        if (window.innerWidth <= 768) {
            div.classList.remove("mob-nav-height");
        }
    }

    // Check width on resize
    window.addEventListener("resize", checkWidth);

    // Check width on initial load
    checkWidth();
});


document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("ham");
    var div1 = document.getElementById("ul");
    
    button.addEventListener("click", function() {
        div1.classList.toggle("mob-nav");
    });
    function checkWidth() {
        if (window.innerWidth <= 768) {
            div1.classList.remove("mob-nav");
        }
    }

    // Check width on resize
    window.addEventListener("resize", checkWidth);

    // Check width on initial load
    checkWidth();
});







document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("ham");
    var divli = document.getElementById("li");
    
    button.addEventListener("click", function() {
        divli.classList.toggle("mob-nav");
    });
    function checkWidth() {
        if (window.innerWidth <= 768) {
            divli.classList.remove("mob-nav");
        }
    }

    // Check width on resize
    window.addEventListener("resize", checkWidth);

    // Check width on initial load
    checkWidth();
});


// document.addEventListener("DOMContentLoaded", function() {
//     var button = document.getElementById("ul");
    
//     button.addEventListener("click", function() {
//         button.classList.toggle("mob-nav");
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("ham");
    var div2 = document.getElementById("btn-w");
    
    button.addEventListener("click", function() {
        div2.classList.toggle("mob-nav-btn");
    });
    function checkWidth() {
        if (window.innerWidth <= 768) {
            div2.classList.remove("mob-nav-btn");
        }
    }

    // Check width on resize
    window.addEventListener("resize", checkWidth);

    // Check width on initial load
    checkWidth();
});















document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("ham");
    var div2 = document.getElementById("btn-w-b");
    
    button.addEventListener("click", function() {
        div2.classList.toggle("mob-nav-btn-b");
    });
    function checkWidth() {
        if (window.innerWidth <= 768) {
            div2.classList.remove("mob-nav-btn-b");
        }
    }

    // Check width on resize
    window.addEventListener("resize", checkWidth);

    // Check width on initial load
    checkWidth();
});

// document.addEventListener("DOMContentLoaded", function() {
//     var button = document.getElementById("btn-w");
    
//     button.addEventListener("click", function() {
//         button.classList.toggle("mob-nav-btn");
//     });
// });
















