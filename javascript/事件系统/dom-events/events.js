(function() {
  var out = document.getElementById("out"),
    callback = function() {
      alert("do callback just once");
      utils.removeListener(out, "click", callback)
    };
  utils.addListener(out, "click", callback)
})();
