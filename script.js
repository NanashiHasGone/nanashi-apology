// Daftar puisi per bait
const puisiList = [
    {
        judul: "Ultimate Apology by Nanashi",
        isi: []
    },
    {
        judul: "Ultimate Apology by Nanashi",
        isi: [
            "Oh Stuffdzh, lend me your ear, I’m desperate to explain,",
            "I stumbled on my words, now I’m drowning in pain.",
            "Senandyck? He’s just static, white noise in the air,",
            "Compared to you, he’s a Duelist defeated without a single kill."
        ]
    },
    {
        judul: "Ultimate Apology by Nanashi",
        isi: [
            "I misspoke, I’m sorry, I’m begging for reprieve,",
            "My heart’s caught in a bind, and it’s you I believe.",
            "You’re Jett in the clutch, dashing through the storm,",
            "Meanwhile Senandyck’s camping like a coward, safe and warm."
        ]
    },
    {
        judul: "Ultimate Apology by Nanashi",
        isi: [
            "You’re the MVP, always holding the line,",
            "Dominating the map, it’s your moment to shine.",
            "Like Phoenix, you blaze, but you never burn out,",
            "While I’m the Reyna, fading in crippling doubt."
        ]
    },
    {
        judul: "Ultimate Apology by Nanashi",
        isi: [
            "Stuffdzh, please listen, I’m down on my knees,",
            "No more stutters or stumbles, just setting you free.",
            "You’re the Omen, my shadow, my light in the dark,",
            "With you by my side, we’ll ignite a new spark."
        ]
    },
    {
        judul: "Ultimate Apology by Nanashi",
        isi: [
            "Senandyck’s just a misstep, a round gone astray,",
            "In this ranked game of life, you’re the ace on display.",
            "Forgive this old initiator, for words that have strayed,",
            "I swear to uphold, my loyalty won’t fade."
        ]
    },
    {
        judul: "Ultimate Apology by Nanashi",
        isi: [
            "So come plant the spike, let’s defuse all this hurt,",
            "You’re the heart of my squad, my reason to fight.",
            "Together we’ll rise, like a team in full swing,",
            "With you as my anchor, I’m ready for anything."
        ]
    },
    {
        judul: "Ultimate Apology by Nanashi",
        isi: [
            "So take my hand, Stuffdzh, let’s heal what I broke,",
            "With a heart full of hope, I’m ready to invoke."
        ]
    },
    {
        judul: "Maaf Maaf Maaf",
        isi: [
            "maafmaafmaafmaafmaafmaafmaafmaaf"
        ]
    }
];

let currentPuisiIndex = 0;
let currentBaitIndex = 0;

// Fungsi untuk mengganti puisi yang ditampilkan
function gantiPuisi() {
    const judulElement = document.getElementById('judul-puisi');
    const isiElement = document.getElementById('isi-puisi');

    // Cek apakah sudah menampilkan semua bait puisi
    if (currentBaitIndex >= puisiList[currentPuisiIndex].isi.length) {
        // Reset bait dan ganti puisi
        currentBaitIndex = 0;
        currentPuisiIndex = (currentPuisiIndex + 1) % puisiList.length;

        // Ganti judul puisi
        judulElement.innerText = puisiList[currentPuisiIndex].judul;
    }

    // Animasi fade-out semua bait yang ada
    const baitElements = isiElement.getElementsByClassName('bait');
    for (let bait of baitElements) {
        bait.style.opacity = 0; // Menghilangkan bait yang ada
    }

    setTimeout(() => {
        // Update isi bait puisi
        isiElement.innerHTML = ''; // Kosongkan isi sebelum menambah bait baru
        for (let i = 0; i < 4; i++) {
            // Tambahkan hingga 4 bait
            if (currentBaitIndex < puisiList[currentPuisiIndex].isi.length) {
                const baitElement = document.createElement('p');
                baitElement.className = 'bait';
                baitElement.innerText = puisiList[currentPuisiIndex].isi[currentBaitIndex];
                isiElement.appendChild(baitElement);
                currentBaitIndex++;
            }
        }

        // Animasi fade-in untuk semua bait baru
        for (let bait of isiElement.getElementsByClassName('bait')) {
            bait.style.opacity = 1;
        }
    }, 500); // Waktu delay sesuai dengan durasi fade-out
}

// Fungsi untuk toggle mute
function toggleMute() {
    const audio = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');
    const muteIcon = document.getElementById('mute-icon');

    // Toggle mute
    audio.muted = !audio.muted;

    // Ubah ikon sesuai status mute
    if (audio.muted) {
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-mute');
    } else {
        muteIcon.classList.remove('fa-volume-mute');
        muteIcon.classList.add('fa-volume-up');
    }
}

// Inisialisasi dengan bait pertama puisi pertama
window.onload = function() {
    const judulElement = document.getElementById('judul-puisi');
    const isiElement = document.getElementById('isi-puisi');
    const audio = document.getElementById('background-music');

    // Set audio untuk autoplay dan loop
    audio.autoplay = true;
    audio.loop = true;

    judulElement.innerText = puisiList[currentPuisiIndex].judul;
    
    // Tampilkan bait pertama
    for (let i = 0; i < 4; i++) {
        if (currentBaitIndex < puisiList[currentPuisiIndex].isi.length) {
            const baitElement = document.createElement('p');
            baitElement.className = 'bait';
            baitElement.innerText = puisiList[currentPuisiIndex].isi[currentBaitIndex];
            isiElement.appendChild(baitElement);
            currentBaitIndex++;
        }
    }
};
