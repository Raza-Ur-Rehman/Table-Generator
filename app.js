
function tableGenerate() {
    let input = document.getElementById('table').value;
    let range = document.getElementById('range').value;
    let tableBox = document.getElementById('tablebox');
    // let show = document.getElementById('showtable');

    if (input <= '') {
        Swal.fire({
            icon: "error",
            title: "Invaild",
            text: "Please Enter a Number",
        });
    } else {
        for (let i = 1; i <= range; i++) {
            tableBox.innerHTML = `<p id="showtable">${input} x ${i} = ${input * i}</p> `;

        }
    }return;
    // window.location.reload();
}












