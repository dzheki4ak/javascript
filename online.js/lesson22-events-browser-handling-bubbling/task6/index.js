const clkBtn = document.querySelector('.single-use-btn');

     function clkLogger() {
          console.log('clicked');
          clkBtn.removeEventListener('click', clkLogger);
     };
     
clkBtn.addEventListener('click', clkLogger);