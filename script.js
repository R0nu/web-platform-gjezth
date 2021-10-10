class Myapp {
  constructor() {
    this.div = '.myapp';
    this.div2 = '.div';
  }
  getElement(element) {
    let lol = document.querySelector(element);

    return lol
  }
  addClick(element) {
    element.addEventListener('click', () => {
      console.log('works');
    });
  }
}
let some = new Myapp();

some.div2 = some.getElement(some.div2);

some.div = some.getElement(some.div);

some.div2.innerHTML = 'works';
some.div.innerHTML = 'works too';
some.addClick(some.div);
some.addClick(some.div2);
