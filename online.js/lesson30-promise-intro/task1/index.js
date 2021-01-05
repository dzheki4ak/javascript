 const imgSource = "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

const addImage = (imgSrc) => {

     const promise = new Promise((resolve, reject) => {
          const imgElem = document.createElement('img');
          imgElem.setAttribute('alt', 'Lake and isles of pines');
          imgElem.src = imgSrc;
          const containerElem = document.querySelector('.page');
          containerElem.append(imgElem);

          const onImageLoaded = () => {
               const { width, height } = imgElem;
               resolve({ width, height });
          };

          imgElem.addEventListener('load', onImageLoaded);
          imgElem.addEventListener('error', () => reject('Image load is failed...'));

     });

     return promise;
   
   };
   

   addImage(imgSource);
