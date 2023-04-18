const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:"Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "Mito-Sedan",
      price: "221",
      description:"Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description: "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description: "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
    },
  ];

// Task-2:

const displayCars = (data) => {
    const container = document.getElementById('container');
    data.forEach(element => {
        const {name, description, imageURL, price} = element;
        // console.log(name, description, imageURL, price);
        // if(Object.keys(imageURL) == )
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="${imageURL}" alt="car" /></figure>
        <div class="card-body">
          <h2 class="card-title">Name: ${name}</h2>
          <p class="my-4 text-lg">Description: ${description}</p>
          <div class="card-actions justify-start">
            <button class="btn btn-primary px-6">Price: ${price}</button>
          </div>
        </div>
      </div>
        `;
        container.appendChild(div);
    });
}

displayCars(data);