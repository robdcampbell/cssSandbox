// console.log('test');

const list = document.querySelector('ul');
const bubble = document.querySelector('.bubble');

list.addEventListener('click', (e)=> {
  const target = e.target;
  if(target.tagName === 'A'){
    const { width, left} = target.getBoundingClientRect();
    bubble.style.cssText = `width: ${width}px; left: ${left}px;`
  }
})