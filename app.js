
function tableGenerate() {
    let input = document.getElementById('table');
    let range = document.getElementById('range');
    let tableBox = document.getElementById('tablebox');
    let show = document.getElementById('showtable');
    if (range <= '') {
        Swal.fire({
            icon: "error",
            title: "Invaild",
            text: "Please Enter a Number",
        });
    } else {
        for (let i = 1; i <= range.value; i++) {
            let result = input * i;
            show.innerText = `${input} * ${i} = ${result} `;
            


            console.log(result);
        }
    }
}












