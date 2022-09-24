setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");
  let hr_dot = document.getElementById(".hr_dot");
  let min_dot = document.getElementById(".min_dot");
  let sec_dot = document.getElementById(".sec_dot");
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  //clock of 24hours
  if (h > 12) {
    h = h - 12;
  }
  //add zero before singale digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>seconds</span>";
  ampm.innerHTML = am;
  // 12 hre clock
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  //60 minutes
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  //60 srconds
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // hr_dot.style
});
