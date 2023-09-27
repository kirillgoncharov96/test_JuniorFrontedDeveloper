const checkInputsLang = (selector) => {

    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-][a-zA-Z0-9])?\.)+[a-zA-Z]/ig)) {
                event.preventDefault();
            }
        });

        input.addEventListener('input', () => {
            if (input.value.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-][a-zA-Z0-9])?\.)+[a-zA-Z]/ig)) {
               input.value = '';
            }
        });
    });


}

export default checkInputsLang;