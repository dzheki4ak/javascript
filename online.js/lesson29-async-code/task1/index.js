const imgSource = "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

export const addImage = (imgSrc, callback) => {
     const imgElem = document.createElement('img');
     imgElem.setAttribute('alt', 'Lake and isles of pines');
     imgElem.src = imgSrc;
     const containerElem = document.querySelector('.page');
     containerElem.append(imgElem);
   
     const onImageLoaded = () => {
          callback(null, imgElem);
     };
   
     imgElem.addEventListener('load', onImageLoaded);
     imgElem.addEventListener('error', () => callback('Image has faild to load'));
   };
   
   const onImageLoaded = (error, imgElem) => {
     if (error) {
       console.log(error);
       return;
     }
     const { width, height } = imgElem;
     const measures = document.querySelector('.image-size');
     measures.textContent = `${width} x ${height}`;
   };

   addImage(imgSource, onImageLoaded);

