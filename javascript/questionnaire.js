function submit() {
    let select1 = document.getElementById('select1');
    let select2 = document.getElementById('select2');
    let select3 = document.getElementById('select3');
    if (select1.value == "none") {
        select1 = "all"
    } else {
        select1 = select1.value
    }
    if (select2.value == "none") {
        select2 = "all"
    }else {
        select2 = select2.value
    }
    if (select3.value == "none") {
        select3 = "all"
    }else {
        select3 = select3.value
    }
    console.log(select1, select2, select3)
    window.location.replace(`instrumentresults.html?instruments=["${select1}"]&costs=["${select3}"]&levels=["${select2}"]`)
}