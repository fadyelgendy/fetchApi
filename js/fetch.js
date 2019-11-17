// Working With TEXT Files
document.getElementById('gettext').addEventListener('click', getText);

function getText() {
    fetch('sample.txt').then((res) =>
        res.text()).then((data) => document.getElementById('output').innerHTML = data).catch((err) => console.log(err));
}

// Working With JSON Files
document.getElementById('getjson').addEventListener('click', getJson);

function getJson() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = "<h3>Users: </h3>";
            data.forEach((user) => {
                output += `<ul class="list-group mb-3"> 
                <li class="list-group-item bg-primary">ID:  ${user.id}</li>
                <li class="list-group-item bg-success">Name:  ${user.name}</li>
                <li class="list-group-item bg-secondary">Email:  ${user.email}</li></ul>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => console.log(err));
}