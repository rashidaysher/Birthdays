// months array
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  // weird male names
  const maleAkan = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "yaw",
    "kofi",
    "kwame",
  ];
  
  //from form
  const femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const month = document.getElementById("month");
  const day = document.getElementById("day");
  const year = document.getElementById("year");
  const gender = document.getElementById("gender");
  const dayResults = document.querySelector(".dayResults");
  const monthResult = document.querySelector(".monthResults");
  const name = document.querySelector(".name");
  const btn = document.getElementById("btn");
  
  //onbutton click
  btn.addEventListener("click", function () {
    const MM = month.value;
    const DD = day.value;
    if (DD < 1 || DD > 30) {
      dayResults.textContent = "invalid day";
      return;
    }
    if (MM < 1 || MM > 12) {
      monthResult.textContent = "invalid month";
      return;
    }
  
    //get day from date
    var date1 = months[MM - 1] + " " + DD + "," + year.value;
    var A = new Date(date1);
    var Day = A.getDay();
  
    //get name from day
    if (gender.value == "female") {
      switch (Day) {
        case 0:
        //   name.textContent = femaleAkan[0];
        alert(femaleAkan[0]);
          break;
        case 1:
        //   name.textContent = femaleAkan[1];
        alert(femaleAkan[1]);
          break;
        case 2:
        //   name.textContent = femaleAkan[2];
        alert(femaleAkan[2]);
          break;
        case 3:
        //   name.textContent = femaleAkan[3];
        alert(femaleAkan[3]);
          break;
        case 4:
        //   name.textContent = femaleAkan[4];
        alert(femaleAkan[4]);

          break;
        case 5:
        //   name.textContent = femaleAkan[5];
        alert(femaleAkan[5]);
          break;
        case 6:
        //   name.textContent = femaleAkan[6];
        alert(femaleAkan[6]);
          break;
        default:
        //   name.textContent = "out of range";
        alert("you are out of range");
      }
    } else {
      switch (Day) {
        case 0:
          name.textContent = maleAkan[0];
          break;
        case 1:
          name.textContent = maleAkan[1];
          break;
        case 2:
          name.textContent = maleAkan[2];
          break;
        case 3:
          name.textContent = maleAkan[3];
          break;
        case 4:
          name.textContent = maleAkan[4];
          break;
        case 5:
          name.textContent = maleAkan[5];
          break;
        case 6:
          name.textContent = maleAkan[6];
          break;
        default:
          name.textContent = "out of range";
      }
    }
  });
  