const Model = function() {
  this.cats = [
    {
      name: "Dave",
      pic: "./pic/Dave.jpg",
      count: 0
    },
    {
      name: "Jack",
      pic: "./pic/Jack.jpg",
      count: 0
    },
    {
      name: "Jerry",
      pic: "./pic/Jerry.jpg",
      count: 0
    },
    {
      name: "Tom",
      pic: "./pic/Tom.jpg",
      count: 0
    },
  ]
}

const View = function() {
  this.name = '<p>Name: <span class="cat-name">%data%</span></p>';
  this.count = '<p>Count: <span class="count">%data%</span></p>';
  this.image = '<img src="%data%" alt="cute cat" class="cat-image"/>';
  this.item = '<li class="cat-item">%data%</li>';
}

View.prototype.renderList = function(cats) {
  $('ul').html('');
  self = this;
  cats.forEach(function(cat) {
    $('ul').append(self.item.replace('%data%', cat.name));
  });
  $('.cat-item').click(function(e) {
    const name = $(e.target).html();
    cats.forEach(function(cat) {
      if (cat.name === name) {
        self.renderDisplay(cat);
      }
    });
  });
};

View.prototype.renderDisplay = function(cat) {
  $('.cat-display').html('');
  $('.cat-display').append(this.name.replace('%data%', cat.name));
  $('.cat-display').append(this.count.replace('%data%', cat.count));
  $('.cat-display').append(this.image.replace('%data%', cat.pic));
  $('.cat-image').click(function(e) {
    cat.count++;
    $('.count').html(cat.count);
  });
};

const Octopus = function() {
  this.view = new View();
  this.model = new Model();
}

Octopus.prototype.start = function() {
  this.view.renderList(this.model.cats);
};

let octopus = new Octopus();
octopus.start();
