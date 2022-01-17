const mobiles = ['abc', 'pqr', 'lmn', 'xyz', 'hij']

const mobs = document.getElementById('mobs') // 1

mobiles.forEach(mb => {
    const liMb = document.createElement('li') // 2
    liMb.textContent = mb

    mobs.appendChild(liMb) // 3
})