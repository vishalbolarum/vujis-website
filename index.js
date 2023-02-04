const videos = {
    apparel_and_accessory: [{ id: '1LVFyQzTzVMDdPzWs0VGUFWdCK9PE-dj7', name: 'fashion-nova'}, { id: '1OzYH97D_KZEEHkODBzbKqHWX1aDCISDv', name: 'soulcal' }, { id: '1LTxR_GcC_doHkIpq58bVyqU1ka7nXwAS', name: 'prettylittlething'}, { id: '1M5POO-o6XzbeF_FnxscQhbbxzq4UDlTm', name: 'will-and-charlie' }, { id: '1O7k-c4mA4rKIWI35R6z9R6LNBqK-X0YM', name: 'divvyup'}, { id: '1C2pMiiktT6UOBk912bAidHuH9JLoNtUu', name: 'private' }],
    cosmetics: [{ id: '1Pgc-R1PVZK7WVjokw-WMi4ARuwqMW6bo', name: 'chanel' }, { id: '1JSlsa6g_yb62GjKdBNJ4gWfdhw4TdBO2', name: 'pixi'}, { id: '1JMQ_TWam8NAx3z-1v3dNRFUpBS73CrBL', name: 'p-louise' }, { id: '1OHjr69RxOc1wYdOeUxWsqDv-ydEppDwP', name: 'florence-by-mills' }],
    dental: [{ id: '1My5WbAfb0-iRJ4ifHsVjPRgFdgaj5bXN', name: 'moon'}],
    eyewear: [{ id: '1PjrhUnLcMRnSbL10409YrkDsfIcmfSCo', name: 'havaianas' }],
    food_and_beverage: [{ id: '1LJy3gcefiIaI3v85h12d34dBdqVqN3HE', name: 'magic-spoon' }, { id: '1J9wDMmHfibEohMIA2A3unCx2CpfWh8FW', name: 'hard-rock-cafe' }, { id: '1ObLMnK6H1MdM7EVlQTyQqy8WzCCjKe59', name: 'Private' }, { id: '1OkOWVDPNLYTcsf1Uy5_zSyEjw-70R93i', name: 'skinte'}],
    footwear: [{ id: '1M_AvUFoPWROrNH3mjwYtd_GK3SS5QYDy', name: 'coddies' }, { id: '1La1K-b9nv-9FZ4C6bKhh-QWouc_FqI8x', name: 'ecco' }, { id: '1LfQpFHfmZEIS6TI9CMSDBrL0lf61SYiW', name: 'lemon-jelly' }],
    fragrance: [{ id: '1JgWFLJER_r1d-zZE4NDJTbSxEO5GbjTB', name: 'maison-margiela'}, { id: '1KkNT9ekdXx4tctFEuRebHNSMhVlf7F9j', name: 'each-and-every' }],
    haircare: [{ id: '1OI_ioyGXmaDCJJEE8uSD65aqxoWgLUBG', name: 'perfect-locks' }, { id: '1MIur0BvnNmaeroMTCFrsfE7XJKZPc6p2', name: 'follicle-revival' }, { id: '1OH3SHQRZYoooHQI3s1rpZZQmND3FONGb', name: 'kitsch-satin' }, { id: '1MEVmhXK0xNBgfatyVKQ96UycXUELDe-P', name: 'Sally Beauty' }],
    jewelry: [],
    pet: [{ id: '1K04_K36urn7RGGUqoH1COHMDoqzHQpnk', name: 'poli pet' }],
    skincare: [{ id: '1MXX8UcJon_9SQ_3qOJ-UZFIFAiAIfAqI', name: 'Avarelle' }, { id: '1Nejg13wDA6JxJGqW1XOmqQXU8m-nr-78', name: 'Ferver' }, { id: '1JdaudZUmYWQ0i4Rto8VA1zeX0g7QeSAF', name: 'Doctor Babor' }, { id: '1K5CG1Gw0I2CoFzhXVPbPUVuHqkkW5Cu-', name: 'The Body Shop' }],
    sports: [],
    supplement: [{ id: '1MP__3P0JTLo6-KLhoFYG7yrqO7aNPX6c', name: 'Imarais Beauty' }, { id: '1Pm94Nyy1LYK7xFE0P8PfrOxRj3WYNtzK', name: 'Bulletproof' }, { id: '1MtjMKj2zglgSob8RUH0I1K9RCAGUDLmC', name: 'Javy' }]
}

// Load options
document.getElementById('niche').innerHTML = Object.keys(videos).map(key => {
    key = key.replaceAll('_', ' ')
    return `<option>${key}</option>`
}).join('')

// Change videos
const changeVideos = () => {
    const e = document.getElementById('niche')
    let niche = e.options[e.selectedIndex].text
    // Convert into lowercase and join.
    niche = niche.toLowerCase().replace(/\s/g, '_')
    document.getElementById('videos').innerHTML = videos[niche].map(video => 
        `<div>
            <video controls controlsList="nodownload">
                <source src="https://drive.google.com/uc?export=view&id=${video.id}"/>
            </video>
            <div class="brand-logo">
                <img src="./images/brand logos/${video.name}.png"/>
            </div>
        </div>`
    ).join('')
}

// Initial videos displayed
changeVideos()


// Reviews Section
const reviews = [
    { shopifyResult: '1IJbufheR9ofrl0rgNH2F3uMY0IwIWoBj', picture: '1dq0eA0ZNH1kOGiDXyQTsiZU2V9DWMTkJ', name: 'Bonnie Kathi', date: '12/26/2022', rating: 5, quote: "I highly recommend working with the Vujis team. I hired them for 2 video ads and after shipping them my products, they delivered within 2 days. I can't wait to work with them again." },
    { shopifyResult: '1ILpGO6xcxHJXiknOnaPkQWtQmb7ZIjtI', picture: '1e-oAQIEK5Y67yRpNSmMGC0jsgBE01z0d', name: 'Eddie Brown', date: '1/2/2023', rating: 5, quote: "This was the first time I worked with them and they did an excellent job. I ran the videos they produced for me as ads on TikTok and I managed to secure a 5x return on ad spend!" },
    { shopifyResult: '1IcQQGlocWwhWABlP4Hi5WJVO6u0fEV5j', picture: '1eNP8OvnnrFNbo_cG-2WJdatUZomIjzJZ', name: 'Ollie Nolan', date: '12/27/2022', rating: 5, quote: "My results after buying 4 videos from them - thanks guys!" },
    { shopifyResult: '1If9fOG9J7DUPJpKlkvTDnCnS3A8TEaC5', picture: '1fgCvWpsJsxpK4qSPlrf-b542Vzx5pZQh', name: 'Ian Cheung', date: '12/27/2022', rating: 5, quote: "I've used these guys several times and it's much cheaper than hiring an agency or influencer directly. They delivered the videos very quickly and I can't recommend them enough." },
    { shopifyResult: '1IknYi73Y-Xaq0gDjpQDgTZc2eizR7PYB', picture: '1e8Yybj7Go-UK6et-lVJYXroCMPZDTH-J', name: 'Kyle Watson', date: '1/3/2023', rating: 5, quote: "I ordered just one video ad with background music & subtitles and you can tell the creator put a lot of effort into it. Thanks again!"},
    { shopifyResult: '1IlYpGlqZiLKFbOZHzk5moUCAIbX5fsAK', picture: '1eCHuJK9h_M0oBXeDKx-RbLchXwQt7h7T', name: 'Marilyn Narelle', date: '12/23/2022', rating: 5, quote: "Got my first sale using one of their videos. I'm expecting many more to come!" },
    { shopifyResult: '1Kj7MRsIvDsAf5QrsHpj-an4_ZcbCQ1E9', picture: '1eP6ST-ZedN7eTSDlTH5lKgZxcWKi1kae', name: 'Tobias Neal', date: '12/20/2022', rating: 5, quote: "Got a decent amount of sales from running their video ads. Although the store wasn't profitable, their ads were top-notch." },
    { shopifyResult: '1KpS24iulC85PrCh3io1MqRpI51QY5n2r', picture: '1fDSMRdlLY8DiOVDOcP7i11sdl-PW_w87', name: 'Maria Hernandez', date: '12/20/2022', rating: 5, quote: "As promised, here are my Shopify results from using your ads." }
]
document.getElementById('reviews').innerHTML = reviews.sort((a, b) => new Date(b.date) - new Date(a.date)).map(review => 
    `<div class="review">
        <img src="https://drive.google.com/uc?export=view&id=${review.shopifyResult}"/>
        <div class="content">
            <div class="user">
                <img class="picture" src="https://drive.google.com/uc?export=view&id=${review.picture}"/>
                <div>
                    <div class="name">${review.name}</div>
                    <div class="date">${review.date}</div>
                </div>
            </div>
            <div class="rating">${'&#9733;'.repeat(review.rating)}</div>
            <div class="quote">${review.quote}</div>
        </div>
    </div>`
).join('')