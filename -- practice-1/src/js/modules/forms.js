import  postData  from "../service/requests";

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelector('[name="upload"]'),
          span = document.querySelector('.placeholder'),
          labels = document.querySelectorAll('label'),
          btn = document.querySelector('.btn__close'),
          head = document.querySelector('h2'),
          btnDelete = document.querySelector('.upload-icon__delete');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с Вами свяжемся...',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };   

    const path = {
        server: 'assets/server.php'
    };



    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        span.classList.remove('image');
        span.textContent = "Логотип (jpeg, png)";
        labels.forEach(label => {
           label.style.opacity = 1; 
        });
    };

    
    upload.addEventListener('input', () => {
        console.log(upload.files[0]);
        let dots;
        const arr = upload.files[0].name.split('.');
        arr[0].length > 6 ? dots = "..." : dots = '.';
        const name = arr[0].substring(0, 10) + dots + arr[1];
        span.textContent = name;
        span.classList.add('image');
    });

    btnDelete.addEventListener('click', () => {
        upload.value = '';
        span.classList.remove('image');
        span.textContent = "Логотип (jpeg, png)";
    });
    
    
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.style.textAlign = 'center';
            statusMessage.style.justifyContent = 'center';
            item.parentNode.appendChild(statusMessage);
            item.style.display = 'none';
            btn.style.opacity = 0;
            head.style.display = 'none';

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

        
            const formData = new FormData(item);
            let api = path.server;
            

            for (let key of formData.entries()) {
                console.log(key);
            }

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    formData.delete('upload');
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        btn.style.opacity = 1;
                        head.style.display = 'block';
                    }, 5000);
                });
        });
    });
};

export default forms;


