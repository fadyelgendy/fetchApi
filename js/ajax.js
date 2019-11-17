document.getElementById('gettext').addEventListener('click', getText);

function getText() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'sample.txt', true);
    xhr.onload = function () {
        if (this.status == 200) {
            document.getElementById('output').innerHTML = this.responseText;
        } else {
            document.getElementById('output').innerHTML = "ERROR: 404 PAge Not Found.";
        }
    }
    xhr.send();
}