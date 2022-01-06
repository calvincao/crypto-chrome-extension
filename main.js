document.addEventListener('DOMContentLoaded', () => {
    // fetch request to coinbase api to retrieve BTC price data
    const button = document.querySelector('.search-btn')

    button.addEventListener('click', () => {
        const input = document.getElementById("coin").value;
        console.log("The term searched for was " + input);

        // fetch price data from coinbase api
        fetch('https://api.coinbase.com/v2/prices/' + input + '-USD/buy')
            .then((data) => data.json())
            .then((data) => {
                console.log(data)
                const removeImg = document.querySelector('img');
                if (removeImg) removeImg.remove();
                // add logic here to determine which icon to show
                if (input.toLowerCase() !== 'doge' && input.toLowerCase() !== 'btc' && input.toLowerCase() !== 'eth') imageLink = 'images/elon.jpg'
                else imageLink = 'images/' + input.toLowerCase() + '.jpg'
                // imageLinkDefault = 'images/elon.jpg'
                // if imageLink doesn't exist, DOM manipulate img with alternate image
                const image = document.createElement('img');
                image.setAttribute('src', imageLink)
                // if (checkFileExist(imageLink)) image.setAttribute('src', imageLink);
                // else image.setAttribute('src', imageLinkDefault);
                document.querySelector('.price-display').appendChild(image)
                const removeThis = document.querySelector('.price');
                if (removeThis) removeThis.remove();
                const btcPrice = `$${data.data.amount} ${data.data.currency}`
                const price = document.createElement('div');
                price.setAttribute('class', 'price')
                price.innerText = `${data.data.base} Price : ` + btcPrice;
                document.querySelector('.price-display').appendChild(price);
            }).catch((error) => {
                console.log(error)
                const removeThis = document.querySelector('.price');
                if (removeThis) removeThis.remove();
                const removeImg = document.querySelector('img');
                if (removeImg) removeImg.remove();
                const price = document.createElement('div');
                price.innerText = "Cryptocurrency not found";
                price.setAttribute('class', 'price')
                document.querySelector('.price-display').appendChild(price);
            })
    })
})

// const coin = document.getElementById("coin").value
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://api.coinbase.com/v2/prices/' + coin + '-USD/buy')
//         .then((data) => data.json())
//         .then((data) => {
//             console.log(data)
//             const btcPrice = `$${data.data.amount} ${data.data.currency}`
//             const price = document.createElement('div');
//             price.innerText = " Price : " + btcPrice;
//             price.setAttribute('class', 'price')
//             document.querySelector('body').appendChild(price);
//         }).catch((error) => {
//             console.log(error)
//             const price = document.createElement('div');
//             price.innerText = "Cryptocurrency not found";
//             document.querySelector('body').appendChild(price);
//         })
// })


//     {data: {…}}
// data: {base: 'BTC', currency: 'USD', amount: '43034.19'}
// [[Prototype]]: Object