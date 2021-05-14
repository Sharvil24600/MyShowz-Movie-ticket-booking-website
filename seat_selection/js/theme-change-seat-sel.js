// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    // switchTextColor(currentTheme);

    if (currentTheme === 'dark') {
        // toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        // localStorage.setItem('theme', 'dark');
        // switchTextColor('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        //   localStorage.setItem('theme', 'light');
        //   switchTextColor('light');
    }
}
window.addEventListener('storage', switchTheme, false);
// function switchTextColor(currTheme){

//     if(currTheme=='light'){
//         document.getElementById("swiper-container-h1").style.color = 'black';
//         document.getElementById("details-h3-1").style.color = 'black';
//         document.getElementById("details-h3-2").style.color = 'black';
//         document.getElementById("details-h3-3").style.color = 'black';
//         document.getElementById("details-h3-4").style.color = 'black';
//         document.getElementById("details-h3-5").style.color = 'black';
//         document.getElementById("details-h3-6").style.color = 'black';
//     }else{
//         document.getElementById("swiper-container-h1").style.color = 'white';
//         document.getElementById("details-h3-1").style.color = 'white';
//         document.getElementById("details-h3-2").style.color = 'white';
//         document.getElementById("details-h3-3").style.color = 'white';
//         document.getElementById("details-h3-4").style.color = 'white';
//         document.getElementById("details-h3-5").style.color = 'white';
//         document.getElementById("details-h3-6").style.color = 'white';
//         }
//     }
// toggleSwitch.addEventListener('change', switchTheme, false);