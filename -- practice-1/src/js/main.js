import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import checkInputsLength from "./modules/checkInputsLength";
import checkInputsLang from "./modules/checkInputsLang";
import forms from "./modules/forms";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    checkInputsLength('[name="nameOrganization"]', '.text');
    checkInputsLength('[name="phone"]', '.phone');
    checkInputsLength('[name="email"]', '.email');
    checkInputsLength('[name="direction-company"]', '.direction');
    checkInputsLength('[name="name"]', '.name');
    checkTextInputs('[name="name"]');
    checkInputsLang('[name="address"]');
    mask('[name="phone"]');
    forms();
    drop();

    const trigger = document.querySelector(".open__modal"),
          modal = document.querySelector(".modal"),
          close = document.querySelector(".btn__close");

        
        trigger.addEventListener('click', () => {
            modal.classList.toggle('is-active');
        }); 

        close.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });

}); 