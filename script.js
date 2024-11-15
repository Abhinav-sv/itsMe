function revealInfo() {
    const infoElements = document.querySelectorAll('.info');
    infoElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300); // delay each line for a cascading effect
    });
}
