function toggleFilter() {
    let filterItems = document.querySelectorAll('.filterItems');
        filterItems.forEach((item) => {
            item.classList.toggle('hidden')
        })
}

toggleFilter()