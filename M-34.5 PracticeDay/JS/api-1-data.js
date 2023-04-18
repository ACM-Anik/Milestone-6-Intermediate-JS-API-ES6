const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: { common: "John", fullName: ["John", "Doe"] },
      age: 32,
      isMale: false,
      address: { street: "13/A St Joseph", house: 10, },
    },
    {
      name: { common: "Humayoun", fullName: ["Humayoun", "Kabir"] },
      age: 33,
      isMale: false,
      address: { street: "13/A St Lucia", house: 11, },
    },
  ]
};

// Task:

const displayData = (results) => {
  console.log(results);
  const container = document.getElementById('container');
  results.forEach(element => {
    const {name, age, address} = element;
    console.log(name, age, address);
  const div = document.createElement('div');
  div.classList.add("cards");
  div.innerHTML = `
    <div class="card w-96 shadow-2xl text-black text-primary-content">
      <div class="card-body border">
        <h2 class="card-title border border-1">Name: ${name.common}</h2>
        <p>age: ${age}</p>
        <p>Street: ${address.street}  House: ${address.house}</p>
      </div>
    </div>
  `;
  container.appendChild(div);
  });
}

displayData(person.result);