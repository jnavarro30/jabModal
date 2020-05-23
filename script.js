

const Modal = (_ => {

    const init = _ => {
        listeners();
    }

    const listeners = _ => {
        const containerJoin = document.querySelector(".container__join"),
              screenEl = document.querySelector(".black__screen"),
              modalEl = document.querySelector(".modal"),
              modalExit = document.querySelector(".modal__exit"),
              modalJoin = document.querySelector(".modal__join"),
              modalInputEl = document.querySelector(".form__input"),
              joinBannerEl = document.querySelector(".join__banner"),
              joinExit = document.querySelector(".join__exit"),
              joinTaglineEl = document.querySelector(".join__tagline"),
              containerEl = document.querySelector(".container");

              //Display/Exit Modal & Join Banner

              containerJoin.addEventListener("click", () => {
                screenEl.classList.toggle("hide");
                modalEl.classList.toggle("hide");
              })

              screenEl.addEventListener("click", () => {
                screenEl.classList.toggle("hide");
                modalEl.classList.add("hide");
                joinBannerEl.classList.add("hide");
              })

              modalExit.addEventListener("click", () => {
                screenEl.classList.toggle("hide");
                modalEl.classList.toggle("hide");
              })

              modalJoin.addEventListener("click", () => {

                if(/@/.test(modalInputEl.value)) {
                    joinBannerEl.classList.toggle("hide");
                    modalEl.classList.toggle("hide");
                    joinTaglineEl.innerHTML = `Email sent to: <br> ${
                        modalInputEl.value
                    }`;
                    modalInputEl.value = "";
                }
                  
              })

               joinExit.addEventListener("click", () => {
                screenEl.classList.toggle("hide");
                joinBannerEl.classList.toggle("hide");
              })


             
    }

    return {
        init
    }

})();

Modal.init();