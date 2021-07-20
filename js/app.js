// month array
let month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

// weird male names
const maleAkan = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", 

]

// from form
const femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");
const gender  = document.getElementById("gender");
const dayResults = document.querySelector(".dayResults");
const monthResult = document.querySelector(".monthResults");
const name = document.querySelector(".name");
const btn =  document.getElementById("btn");

// onbutton click
btn.addEventListener("click", function () {
    const MM = month.value;
    const DD = day.value;
    if (DD< 1 || DD>30 ) {
        dayResults.textContent = "invalid day";
        return;
    }

    if (MM<1 || MM > 12) {
        monthResult.textContent = "invalid month";
        return;
    }

    // getting day from date
    




}
)


