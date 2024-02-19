class Polygon {
    constructor(name) {
      this.name = name;
    }
  
    toString() {
      return `Shape: ${this.name}`;
    }
  }
  
  class Rectangle extends Polygon {
    constructor(width, height) {
      super("Rectangle");
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    toString() {
      return `${super.toString()}, Width: ${this.width}, Heiht: ${this.height}, area: ${this.area()}`;
    }
  }
  
  class Square extends Polygon {
    constructor(Width) {
      super('Square');
      this.Width = Width;
    }
  
    area() {
      return this.Width * this.Width;
    }
  
    toString() {
      return `${super.toString()}, width:${this.Width}, area:${this.area()}`;
    }
  }
  
  class Circe extends Polygon {
    constructor(radius) {
      super('Circe');
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  
    toString() {
      return `${super.toString()}, radius:${this.radius}, area: ${this.area()}`;
    }
  }
  
  class Tri extends Polygon {
    constructor(base, height) {
      super('triangle');
      this.base = base;
      this.height = height;
    }
  
    area() {
      return ((this.base * this.height) / 2 );
    }
  
    toString() {
      return `${super.toString()}, base: ${this.base}, height: ${this.height}, araa: ${this.area()}`;
    }
  }
  
  let r = new Rectangle(1, 3);
  let s = new Square(4);
  let c = new Circe(2);
  let tri = new Tri(3, 5);

  console.log(r.toString());
  console.log(s.toString());
  console.log(c.toString());
  console.log(tri.toString());


  console.log("////////////////////////////TASK3////////////////////////////");

  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`error that status is : ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }


  let link = "https://jsonplaceholder.typicode.com/users";

fetchData(link)
.then((data) => {
    let table = document.getElementById("datatable");
      data.forEach((user) => {
        let datar = document.createElement("tr");
        let hr = document.createElement("hr");
        datar.innerHTML = `<td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>`;

        table.appendChild(datar);
        datar.style.height=`7vh`;
      });
    })
  .catch(error => {
    console.error(`error ${error}`);
  });