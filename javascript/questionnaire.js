let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let select3 = document.getElementById('select3');


function submit() {

    if (!(select1.value == "none")) {
        if (!(select2.value == "none")) {
            if (!(select3.value == "none")) {
               console.log(select1.value + select2.value + select3.value)
               window.location.replace(`instrumentresults.html?instruments=["${select1.value}"]&costs=["${select3.value}"]&levels=["${select2.value}"]`)
            }
        }
    }
}