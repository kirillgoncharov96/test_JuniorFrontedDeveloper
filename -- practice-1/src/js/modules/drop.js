

const drop = () => {

    const fileInputs = document.querySelectorAll('[name="upload"]'),
          span = document.querySelector('.placeholder');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.modal__input-label').style.backgroundColor = "grey";
        item.closest('.modal__input-label').style.borderRadius = "5px";
        item.closest('.modal__input-label').style.border = "2px solid black";
    }

    function unhighlight(item) {
        item.closest('.modal__input-label').style.border = "none";
        item.closest('.modal__input-label').style.backgroundColor = "#fff";
        item.closest('.modal__input-label').style.borderRadius = "0px";
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].lenght > 6 ? dots = "..." : dots = ".";
            const name = arr[0].substring(0, 10) + dots + arr[1];
            span.textContent = name;
            span.classList.add('image');
        });
    });

};

export default drop;