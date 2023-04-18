// to go to industrial page: 
document.getElementById('industrial-page').addEventListener('click', function(){
    window.location.href = 'industrial.html';
})


const fetchAllBills = (bills) =>{
    const url = `https://forbes400.onrender.com/api/forbes400/${Bills}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data));
}

const displayData = (data) =>{
    // console.log(data);
    const container = document.getElementById('data-container');
    data.forEach(bill => {
        // const div = document.createElement('div');
        container.innerHTML = `
            <tr>
                <td>${bill.person.uri}</td>
                <td>${bill.countryOfCitizenship}</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
            </tr>
        `;
    });
    // container.appendChild(div);
}
fetchAllBills('getAllBillionaires');