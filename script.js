var particles = Particles.init({
  selector: ".background",
  color: ["#FF0099", "#00FFFF"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 765,
      options: {
        color: ["#FFF", "#FF0099", "#00FFFF"],
        maxParticles: 75,
        connectParticles: false,
      },
    },
  ],
});

Number.prototype.pad = function (n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var millisec = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hour = now.getHours(),
    month = now.toLocaleString("default", { month: "long" }),
    day = now.getDate(),
    year = now.getFullYear();

  const tags = ["month", "day", "year", "hour", "min", "s", "millisec"],
    corr = [month, day, year, hour.pad(2), min.pad(2), sec.pad(2), millisec];

  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

window.setInterval("updateClock()", 1);
