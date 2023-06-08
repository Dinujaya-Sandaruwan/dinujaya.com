// const pageUp = () => {
//     document.getElementById('container').style.transform = 'translateX(-100%)'
// }
// const pageDown = () => {
//     document.getElementById('container').style.transform = 'translateX(0%)'
// }

const pageUp = () => {
    window.scrollBy(0, -window.innerHeight);
  };
  
  const pageDown = () => {
    window.scrollBy(0, window.innerHeight);
  };
  