"use strict";function showCover(){var o=document.createElement("div");o.classList.add("cover"),document.body.appendChild(o)}function hideCover(){document.body.removeChild(document.querySelector(".cover"))}var form=document.querySelector(".contest__form"),submitBtn=document.querySelector(".submit__btn"),popupError=document.querySelector(".popup--error"),popupSuccess=document.querySelector(".popup--success"),closePopup=document.querySelectorAll(".popup__button");form&&submitBtn.addEventListener("click",function(o){o.preventDefault(),form.checkValidity()?(showCover(),form.classList.remove("validation-error"),popupSuccess.classList.add("popup--show"),form.reset()):(showCover(),popupError.classList.add("popup--show"),form.classList.add("validation-error"))}),window.addEventListener("keydown",function(o){27!==o.keyCode&&13!==o.keyCode||(popupError.classList.contains("popup--show")||popupSuccess.classList.contains("popup--show"))&&(o.preventDefault(),hideCover(),popupError.classList.remove("popup--show"),popupSuccess.classList.remove("popup--show"))});for(var i=0;i<closePopup.length;i++)closePopup[i].addEventListener("click",function(o){o.preventDefault(),hideCover(),popupError.classList.remove("popup--show"),popupSuccess.classList.remove("popup--show")});