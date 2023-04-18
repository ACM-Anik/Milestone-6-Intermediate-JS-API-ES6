// Back to the main page: 
document.getElementById('back-to-main').addEventListener('click', function(){
    window.location.href = 'billionaire-diary.html';
});


const fetchBillionaires = (text) => {
    const url = `https://forbes400.onrender.com/api/forbes400/industries${text}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data));
}

function displayData(data) {
    console.log(data);
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    const showAll = document.getElementById('show-all');
        showAll.classList.remove('hidden');
    if(data.length > 10){
        showAll.classList.add('hidden');
    }
    data.forEach(bill => {
        // const div = document.createElement('div');
        container.innerHTML += `
                <div class="card w-96 h-80 bg-[#0E1B34] text-white shadow-xl mx-0">
                    <div class=" flex justify-center my-2">
                        <h2 class="card-title shadow-xl font-mono font-bold">${bill.personName}</h2>
                    </div>
                    <div class="flex justify-center items-center gap-3 p-4">
                        <div>
                            <img class="w-56 " src="${bill.squareImage}" alt="Shoes" class="rounded-xl" />
                            <p>Source: ${bill.source}</p>
                        </div>
                        <div>
                            <h3>Citizenship: ${bill.countryOfCitizenship}</h3>
                            <h3>State:${bill.state ? bill.state : "Not Available!"}</h3>
                            <h3>City:${bill.city}</h3>
                            <h3>Total Share: ${bill.financialAssets[0]?.numberOfShares}</h3>
                            <p>Share Price: ${bill.financialAssets[0]?.sharePrice}</p>
                        </div>
                    </div>
                </div> 
            `;
        // container.appendChild(div);
    })
}


document.getElementById('btn-show-all').addEventListener('click', function(){
    fetchBillionaires('/technology');
    console.log('click');
})

// fetchBillionaires();


