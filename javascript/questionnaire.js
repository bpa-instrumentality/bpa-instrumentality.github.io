let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let select3 = document.getElementById('select3');


function submit() {

    if (!(select1.value == "none")) {
        if (!(select2.value == "none")) {
            if (!(select3.value == "none")) {
               let filter = select1.value + select2.value + select3.value
               window.location.replace(`instrumentresults.html?filter=${filter}`)
            }
        }
    }
}