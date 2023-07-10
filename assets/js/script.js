function init() {
  setInterval(function () {
    var today = dayjs();
    $("#date-time").text(today.format("MMMM DD YYYY HH: mm: ss"));
  }, 1000);
}

init();
