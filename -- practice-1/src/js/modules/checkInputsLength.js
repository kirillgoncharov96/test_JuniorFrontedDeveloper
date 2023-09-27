const checkInputsLength = (selector, selectorForlabel) => {

    const inputs = document.querySelector(selector),
          labels = document.querySelector(selectorForlabel);

          

    inputs.addEventListener('input', () => {
        if (inputs.value.length > 0) {
           labels.style.opacity = 0;
        } else {
            labels.style.opacity = 1;
        } 
    })

}

export default checkInputsLength;