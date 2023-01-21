const videos = {
    apparel_and_accessory: [{ id: '1LVFyQzTzVMDdPzWs0VGUFWdCK9PE-dj7', name: 'Fashion Nova'}, { id: '1OzYH97D_KZEEHkODBzbKqHWX1aDCISDv', name: 'SoulCal' }, { id: '1LTxR_GcC_doHkIpq58bVyqU1ka7nXwAS', name: 'PrettyLittleThing'}, { id: '1M5POO-o6XzbeF_FnxscQhbbxzq4UDlTm', name: 'Will & Charlie' }, { id: '1O7k-c4mA4rKIWI35R6z9R6LNBqK-X0YM', name: 'DivvyUp'}, { id: '1C2pMiiktT6UOBk912bAidHuH9JLoNtUu', name: 'Private'}],
    cosmetics: [{ id: '1JSlsa6g_yb62GjKdBNJ4gWfdhw4TdBO2', name: 'Pixi'}, { id: '1JMQ_TWam8NAx3z-1v3dNRFUpBS73CrBL', name: 'P Louise' }, { id: '1OHjr69RxOc1wYdOeUxWsqDv-ydEppDwP', name: 'florence by mills' }],
    dental: [{ id: '1My5WbAfb0-iRJ4ifHsVjPRgFdgaj5bXN', name: 'Moon Oral Care'}],
    eyewear: [],
    food_and_beverage: [{ id: '1N5HBYwAItRmoSOLbiiiTyYYSQlsTAket', name: 'HOP WTR' }, { id: '1J9wDMmHfibEohMIA2A3unCx2CpfWh8FW', name: 'Hard Rock Cafe' }, { id: '1ObLMnK6H1MdM7EVlQTyQqy8WzCCjKe59', name: 'Limited Edition' }, { id: '1OkOWVDPNLYTcsf1Uy5_zSyEjw-70R93i', name: 'SkinTe'}],
    footwear: [{ id: '1M_AvUFoPWROrNH3mjwYtd_GK3SS5QYDy', name: 'Coddies' }, { id: '1La1K-b9nv-9FZ4C6bKhh-QWouc_FqI8x', name: 'ECCO' }, { id: '1LfQpFHfmZEIS6TI9CMSDBrL0lf61SYiW', name: 'Lemon Jelly' }],
    fragrance: [{ id: '1JgWFLJER_r1d-zZE4NDJTbSxEO5GbjTB', name: 'Maison Margiela'}, { id: '1KkNT9ekdXx4tctFEuRebHNSMhVlf7F9j', name: 'Each & Every' }],
    haircare: [{ id: '1MIur0BvnNmaeroMTCFrsfE7XJKZPc6p2', name: 'Follice Revival' }, { id: '1OH3SHQRZYoooHQI3s1rpZZQmND3FONGb', name: 'Kitsch Satin' }],
    jewelry: [],
    pet: [],
    skincare: [{ id: '1MXX8UcJon_9SQ_3qOJ-UZFIFAiAIfAqI', name: 'Avarelle' }, { id: '1Nejg13wDA6JxJGqW1XOmqQXU8m-nr-78', name: 'Ferver' }, { id: '1JdaudZUmYWQ0i4Rto8VA1zeX0g7QeSAF', name: 'Doctor Babor' }, { id: '1K5CG1Gw0I2CoFzhXVPbPUVuHqkkW5Cu-', name: 'The Body Shop' }],
    sports: [],
    supplement: [{ id: '1MP__3P0JTLo6-KLhoFYG7yrqO7aNPX6c', name: 'Imarais Beauty' }, { id: '1MtjMKj2zglgSob8RUH0I1K9RCAGUDLmC', name: 'Javy' }]
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
            <p class="brand-name">${video.name}</p>
        </div>`
    ).join('')
}

// Initial videos displayed
changeVideos()