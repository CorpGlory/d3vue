export default class {
  constructor(elem, data, simulation) {
    this.elem = elem;
    this.data = data;
    this.simulation = simulation;
  }
  init() {
    //alert('ебать')
  }
  enter() {

  }
  exit() {
    this.simulation
      .force("link", null)
      .links(this.data.links);
  }
}
