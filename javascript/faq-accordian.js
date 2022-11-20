function showContent(faq, toggleId){
    let toggle = document.getElementById(toggleId);
    if (toggle.textContent === "+"){
        document.getElementById(faq).style.display = 'block';
        toggle.textContent = "-";
        return
    }
    document.getElementById(faq).style.display = 'none';
    toggle.textContent = "+";
}
