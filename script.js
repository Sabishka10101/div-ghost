var id1 = document.getElementById("id1"), id2 = document.getElementById("id2");
id1.onmouseover = function () {
id2.innerHTML = "<b>" + document.getElementById("txt").value + "</b>";
}
id1.onmouseout = function () {
    id2.innerHTML = "";
}