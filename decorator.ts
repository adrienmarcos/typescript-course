function MenuItem(target: Function) {
  target.prototype.id = 'abc';
}

@MenuItem
class Pizza {
  id: string;
}

class Hamburguer {
  id: string;
}

console.log(new Pizza().id);