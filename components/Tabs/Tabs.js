// I feel like I made this overly complicated, but oh well ¯\_(^_^)_/¯

class Tabs {
  constructor (element) {
    // assign this.element to the tabs container
    this.element = element;
    // collect the tab links
    this.links = this.element.firstElementChild.children;
    // collect the tab items
    this.items = this.element.lastElementChild.children;
    // set the active tab index
    this.activeTab = 0;
    // drum roll, please
    this.init();
  }

  switchTab (i) {
    // deselect the active tab
    this.links[this.activeTab].deselect();
    // select the new tab
    this.links[i].select();
    // set the active tab
    this.activeTab = i;
  }

  init () {
    // map through the tab links and return an array of TabsLinks
    this.links = [...this.links].map((link, i) => new TabsLink(link, this.items[i], i));
    // loop over the TabsLinks and set their click events
    this.links.forEach(link => {
      link.element.addEventListener('click', () => this.switchTab(link.index));
    })
  }
}

class TabsLink {
  constructor (linkElement, itemElement, i) {
    // assign this.element to current tab
    this.element = linkElement;
    // set the tab index
    this.index = i;
    // assign a new instance of TabsItem
    this.itemElement = new TabsItem(itemElement);
  }

  select () {
    // add selected link class
    this.element.classList.add('tabs-link-selected');
    // call associated item select method
    this.itemElement.select();
  }

  deselect () {
    // remove selected link class
    this.element.classList.remove('tabs-link-selected');
    // call associated item deselect method
    this.itemElement.deselect();
  }
}

class TabsItem {
  constructor (itemElement) {
    // assign this.element to current item
    this.element = itemElement;
  }

  select () {
    // add selected item class
    this.element.classList.add('tabs-item-selected');
  }

  deselect () {
    // remove selected item class
    this.element.classList.remove('tabs-item-selected');
  }
}

// initialise tabs class
new Tabs(document.querySelector('.tabs'));
