// Database kalimat yang sangat besar
const sentenceDatabase = {
    easy: [
        "Saya suka makan nasi goreng.",
        "Dia pergi ke pasar pagi ini.",
        "Anak kecil bermain di taman.",
        "Buku itu sangat menarik untuk dibaca.",
        "Kucing tidur di atas sofa.",
        "Ibu memasak makanan yang enak.",
        "Hari ini cuaca sangat cerah.",
        "Kami belajar mengetik dengan cepat.",
        "Dia membaca buku di perpustakaan.",
        "Mereka bermain bola di lapangan.",
        "Pagi hari yang indah.",
        "Matahari bersinar terang.",
        "Saya belajar programming.",
        "Ini sangat menyenangkan.",
        "Dia pergi ke sekolah.",
        "Naik sepeda bersama teman.",
        "Bunga mawar berwarna merah.",
        "Harum baunya sangat wangi.",
        "Kopi panas enak diminum.",
        "Di pagi hari yang dingin.",
        "Burung berkicau di pagi hari.",
        "Saya sedang belajar mengetik.",
        "Dia berlari dengan cepat.",
        "Kami pergi ke pantai.",
        "Mereka sedang bermain game.",
        "Ibu membeli sayuran segar.",
        "Ayah pergi ke kantor.",
        "Adik sedang tidur siang.",
        "Kakak belajar matematika.",
        "Nenek sedang merajut."
    ],
    
    medium: [
        "Belajar mengetik dengan cepat membutuhkan latihan yang konsisten setiap hari.",
        "Internet telah mengubah cara kita berkomunikasi dan bekerja dalam beberapa tahun terakhir.",
        "Indonesia adalah negara kepulauan terbesar di dunia dengan keindahan alam yang memukau.",
        "Olahraga teratur sangat penting untuk menjaga kesehatan tubuh dan pikiran kita.",
        "Teknologi berkembang pesat dan membawa banyak perubahan dalam kehidupan sehari-hari.",
        "Membaca buku setiap hari dapat meningkatkan pengetahuan dan memperluas wawasan.",
        "Pendidikan yang berkualitas merupakan kunci keberhasilan di masa depan.",
        "Makan makanan sehat dan bergizi membantu tubuh tetap bugar.",
        "Berkomunikasi dengan baik sangat penting dalam hubungan sosial.",
        "Hutan tropis memiliki keanekaragaman hayati yang sangat tinggi.",
        "Musim hujan membawa berkah bagi petani.",
        "Tanaman tumbuh subur dengan air yang cukup.",
        "Kota besar selalu ramai dengan aktivitas.",
        "Masyarakat sibuk dengan pekerjaan masing-masing.",
        "Seni dan budaya mencerminkan identitas bangsa.",
        "Kita harus melestarikannya dengan bangga.",
        "Transportasi umum membantu mengurangi kemacetan.",
        "Penggunaan kendaraan pribadi bisa dikurangi.",
        "Energi terbarukan adalah masa depan dunia.",
        "Matahari dan angin sumber energi bersih.",
        "Pemerintah sedang membangun infrastruktur transportasi yang modern.",
        "Perkembangan teknologi informasi sangat pesat di era digital ini.",
        "Kesehatan lingkungan menjadi perhatian utama masyarakat dunia.",
        "Literasi digital diperlukan untuk menghadapi revolusi industri 4.0.",
        "Kreativitas dan inovasi menjadi kunci kesuksesan di masa depan.",
        "Globalisasi mempengaruhi berbagai aspek kehidupan.",
        "Budaya lokal harus tetap dijaga.",
        "Pemanasan global menjadi ancaman serius.",
        "Kita harus mengurangi emisi karbon.",
        "Edukasi finansial penting untuk masa depan."
    ],
    
    hard: [
        "Revolusi industri 4.0 telah membawa transformasi digital yang signifikan dalam berbagai aspek kehidupan manusia modern.",
        "Perkembangan artificial intelligence dan machine learning semakin pesat dengan aplikasi yang luas di berbagai bidang.",
        "Pembangunan berkelanjutan harus memperhatikan keseimbangan antara aspek ekonomi, sosial, dan lingkungan hidup.",
        "Literasi digital menjadi kompetensi penting di era informasi untuk menghindari penyebaran hoax dan disinformasi.",
        "Inovasi teknologi blockchain memberikan solusi transparan dan aman untuk sistem keuangan digital masa depan.",
        "Globalisasi telah menghubungkan berbagai budaya dari seluruh penjuru dunia dalam jaringan yang kompleks.",
        "Perubahan iklim global menjadi isu penting yang memerlukan kerjasama internasional untuk mitigasi dampaknya.",
        "Kemandirian ekonomi nasional dapat dicapai melalui penguatan sektor riil dan peningkatan kualitas sumber daya manusia.",
        "Sistem pendidikan harus beradaptasi dengan perkembangan zaman untuk menghasilkan lulusan yang kompetitif.",
        "Kesehatan mental sama pentingnya dengan kesehatan fisik dalam menciptakan masyarakat yang produktif dan bahagia.",
        "Filsafat postmodernisme menantang narasi besar yang selama ini dianggap sebagai kebenaran absolut.",
        "Quantum computing merepresentasikan paradigma baru yang memanfaatkan fenomena mekanika kuantum.",
        "Epigenetik mempelajari perubahan ekspresi gen tanpa alterasi urutan DNA dasar.",
        "Neuroplastisitas membuktikan bahwa otak manusia memiliki kemampuan adaptasi yang luar biasa.",
        "Antropologi struktural menganalisis budaya melalui pendekatan linguistik dan simbolik.",
        "Paradigma sains kontemporer mengintegrasikan berbagai disiplin ilmu untuk memahami kompleksitas alam semesta.",
        "Teknologi nano memungkinkan manipulasi materi pada skala atom dengan aplikasi revolusioner di berbagai bidang.",
        "Ekosistem digital berkembang pesat dengan munculnya platform media sosial dan e-commerce yang terintegrasi.",
        "Kebijakan publik harus berbasis bukti dan data untuk mencapai outcome yang optimal bagi masyarakat.",
        "Transformasi digital di sektor pemerintahan meningkatkan efisiensi dan transparansi dalam pelayanan publik.",
        "Metodologi penelitian kualitatif dan kuantitatif saling melengkapi dalam menghasilkan pengetahuan yang komprehensif.",
        "Konservasi biodiversity memerlukan pendekatan holistik yang melibatkan aspek ekologi, ekonomi, dan sosial budaya.",
        "Teori kompleksitas membantu memahami sistem dinamis yang saling berhubungan dalam skala global.",
        "Revolusi hijau mempromosikan penggunaan energi terbarukan dan praktik pertanian berkelanjutan.",
        "Psikologi positif fokus pada pengembangan potensi dan kesejahteraan manusia secara holistik."
    ]
};

// Variabel game
let gameState = {
    isPlaying: false,
    isPaused: false,
    timeLeft: 60,
    totalTime: 60,
    timer: null,
    startTime: null,
    currentText: '',
    typedText: '',
    correctLines: 0,
    totalLines: 0,
    errorLines: 0,
    difficulty: 'easy',
    score: 0,
    wpm: 0,
    accuracy: 100,
    soundEnabled: true,
    hasStartedTyping: false,
    textHistory: [],
    lastTextTime: null,
    totalCorrectChars: 0,
    totalTypedChars: 0,
    totalWords: 0,
    lastWordTime: null,
    isSubmitting: false
};

// Elemen DOM
const elements = {
    // Stats
    timer: document.getElementById('timer'),
    wpm: document.getElementById('wpm'),
    accuracy: document.getElementById('accuracy'),
    score: document.getElementById('score'),
    correctLines: document.getElementById('correct-lines'),
    errorLines: document.getElementById('error-lines'),
    
    // Text display
    textToType: document.getElementById('text-to-type'),
    textLength: document.getElementById('text-length'),
    textNumber: document.getElementById('text-number'),
    wordCount: document.getElementById('word-count'),
    typedTextDisplay: document.getElementById('typed-text-display'),
    
    // Input
    textInput: document.getElementById('text-input'),
    typedChars: document.getElementById('typed-chars'),
    skipBtn: document.getElementById('skip-btn'),
    clearBtn: document.getElementById('clear-btn'),
    
    // Controls
    startBtn: document.getElementById('start-btn'),
    pauseBtn: document.getElementById('pause-btn'),
    resetBtn: document.getElementById('reset-btn'),
    soundToggle: document.getElementById('sound-toggle'),
    
    // Difficulty
    difficultyBtns: document.querySelectorAll('.difficulty-btn'),
    
    // Results
    resultsPanel: document.getElementById('results-panel'),
    finalTotalLines: document.getElementById('final-total-lines'),
    finalWpm: document.getElementById('final-wpm'),
    finalAccuracy: document.getElementById('final-accuracy'),
    finalScore: document.getElementById('final-score'),
    finalCorrect: document.getElementById('final-correct'),
    finalErrors: document.getElementById('final-errors'),
    ratingStars: document.getElementById('rating-stars'),
    resultMessage: document.getElementById('result-message'),
    
    // History
    textHistoryContainer: document.getElementById('text-history'),
    
    // Modals
    helpModal: document.getElementById('help-modal'),
    aboutModal: document.getElementById('about-modal'),
    closeModals: document.querySelectorAll('.close-modal'),
    helpBtn: document.getElementById('help-btn'),
    aboutBtn: document.getElementById('about-btn')
};

// Inisialisasi game
function initGame() {
    // Set event listeners
    elements.startBtn.addEventListener('click', toggleGame);
    elements.pauseBtn.addEventListener('click', togglePause);
    elements.resetBtn.addEventListener('click', resetGame);
    elements.soundToggle.addEventListener('click', toggleSound);
    
    // Input event dengan auto-start
    elements.textInput.addEventListener('input', handleInput);
    elements.textInput.addEventListener('keydown', handleKeyDown);
    elements.textInput.addEventListener('keyup', handleKeyUp);
    
    elements.skipBtn.addEventListener('click', skipText);
    elements.clearBtn.addEventListener('click', clearInput);
    
    elements.difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => changeDifficulty(btn.dataset.level));
    });
    
    // Modal events
    elements.closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.helpModal.classList.remove('active');
            elements.aboutModal.classList.remove('active');
        });
    });
    
    elements.helpBtn.addEventListener('click', () => {
        elements.helpModal.classList.add('active');
    });
    
    elements.aboutBtn.addEventListener('click', () => {
        elements.aboutModal.classList.add('active');
    });
    
    // Tutup modal saat klik di luar
    window.addEventListener('click', (e) => {
        if (e.target === elements.helpModal || e.target === elements.aboutModal) {
            elements.helpModal.classList.remove('active');
            elements.aboutModal.classList.remove('active');
        }
    });
    
    // Generate teks pertama
    generateNewText();
    updateUI();
    
    // Enable input dan auto-focus dari awal
    elements.textInput.disabled = false;
    elements.textInput.focus();
    
    // Setup auto-start
    setupAutoStart();
    
    // Update tombol
    elements.startBtn.disabled = false;
    elements.startBtn.innerHTML = '<i class="fas fa-play"></i> Mulai Game';
    elements.pauseBtn.disabled = true;
    
    // Initialize sound toggle
    updateSoundButton();
}

// Setup auto-start saat mengetik
function setupAutoStart() {
    let autoStartTriggered = false;
    
    elements.textInput.addEventListener('input', function(e) {
        if (!gameState.isPlaying && !gameState.isPaused && !autoStartTriggered && this.value.length > 0) {
            autoStartTriggered = true;
            setTimeout(() => {
                startGame();
                autoStartTriggered = false;
            }, 100);
        }
    });
}

// Update sound button appearance
function updateSoundButton() {
    if (gameState.soundEnabled) {
        elements.soundToggle.innerHTML = '<i class="fas fa-volume-up"></i> Suara';
        elements.soundToggle.classList.remove('btn-sound');
        elements.soundToggle.classList.add('btn-info');
    } else {
        elements.soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i> Suara';
        elements.soundToggle.classList.remove('btn-info');
        elements.soundToggle.classList.add('btn-sound');
    }
}

// Generate teks baru secara acak
function generateNewText() {
    let textPool = [];
    const level = gameState.difficulty;
    
    if (level === 'mixed') {
        // Campur teks dari semua level dengan proporsi berbeda
        textPool = [
            ...sentenceDatabase.easy,
            ...sentenceDatabase.medium,
            ...sentenceDatabase.hard
        ];
    } else {
        textPool = sentenceDatabase[level];
    }
    
    // Pilih teks acak
    const randomIndex = Math.floor(Math.random() * textPool.length);
    gameState.currentText = textPool[randomIndex];
    
    // Update display
    updateTextDisplay();
}

// Update tampilan teks
function updateTextDisplay() {
    const container = elements.textToType;
    
    // Split teks menjadi baris jika terlalu panjang
    const words = gameState.currentText.split(' ');
    let lines = [];
    let currentLine = '';
    
    for (const word of words) {
        if ((currentLine + ' ' + word).length > 60 && currentLine.length > 0) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = currentLine ? currentLine + ' ' + word : word;
        }
    }
    
    if (currentLine) {
        lines.push(currentLine);
    }
    
    // Update container
    container.innerHTML = '';
    lines.forEach((line, index) => {
        const lineElement = document.createElement('div');
        lineElement.className = 'text-line';
        lineElement.id = `text-line-${index + 1}`;
        lineElement.textContent = line;
        container.appendChild(lineElement);
    });
    
    // Update info
    const totalChars = gameState.currentText.length;
    const wordCount = words.length;
    
    elements.textLength.textContent = `${totalChars} karakter`;
    elements.wordCount.textContent = `${wordCount} kata`;
    elements.textNumber.textContent = `Kalimat #${gameState.totalLines + 1}`;
    
    // Animasi
    container.classList.remove('pulse');
    void container.offsetWidth; // Trigger reflow
    container.classList.add('pulse');
}

// Toggle game (start/pause)
function toggleGame() {
    if (!gameState.isPlaying) {
        startGame();
    } else {
        if (gameState.isPaused) {
            resumeGame();
        } else {
            pauseGame();
        }
    }
}

// Mulai game
function startGame() {
    if (gameState.isPlaying) return;
    
    gameState.isPlaying = true;
    gameState.isPaused = false;
    gameState.startTime = new Date();
    gameState.timeLeft = gameState.totalTime;
    gameState.hasStartedTyping = true;
    gameState.lastTextTime = new Date();
    gameState.lastWordTime = new Date();
    
    // Update tombol
    elements.startBtn.innerHTML = '<i class="fas fa-pause"></i> Jeda';
    elements.startBtn.classList.remove('btn-primary');
    elements.startBtn.classList.add('btn-secondary');
    elements.pauseBtn.disabled = false;
    elements.skipBtn.disabled = false;
    elements.clearBtn.disabled = false;
    
    // Update hasil panel
    elements.resultsPanel.style.opacity = '0.7';
    elements.resultMessage.innerHTML = '<i class="fas fa-info-circle"></i> Game sedang berjalan...';
    
    // Mulai timer
    startTimer();
    
    // Reset statistik jika belum ada input
    if (gameState.typedText === '') {
        resetStats();
    }
    updateStats();
    
    // Play sound jika enabled
    if (gameState.soundEnabled) {
        playSound('start');
    }
    
    // Focus ke input
    elements.textInput.focus();
}

// Jeda game
function pauseGame() {
    if (!gameState.isPlaying || gameState.isPaused) return;
    
    gameState.isPaused = true;
    clearInterval(gameState.timer);
    
    // Update tombol
    elements.startBtn.innerHTML = '<i class="fas fa-play"></i> Lanjutkan';
    elements.pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Terjeda';
    
    // Update hasil panel
    elements.resultMessage.innerHTML = '<i class="fas fa-info-circle"></i> Game dijeda';
    
    // Disable input sementara
    elements.textInput.disabled = true;
    elements.skipBtn.disabled = true;
    elements.clearBtn.disabled = true;
}

// Lanjutkan game
function resumeGame() {
    if (!gameState.isPlaying || !gameState.isPaused) return;
    
    gameState.isPaused = false;
    gameState.startTime = new Date() - (gameState.totalTime - gameState.timeLeft) * 1000;
    
    // Update tombol
    elements.startBtn.innerHTML = '<i class="fas fa-pause"></i> Jeda';
    elements.pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Jeda';
    
    // Update hasil panel
    elements.resultMessage.innerHTML = '<i class="fas fa-info-circle"></i> Game sedang berjalan...';
    
    // Enable input kembali
    elements.textInput.disabled = false;
    elements.skipBtn.disabled = false;
    elements.clearBtn.disabled = false;
    elements.textInput.focus();
    
    // Lanjutkan timer
    startTimer();
}

// Reset game
function resetGame() {
    clearInterval(gameState.timer);
    
    gameState.isPlaying = false;
    gameState.isPaused = false;
    gameState.timeLeft = gameState.totalTime;
    gameState.typedText = '';
    gameState.correctLines = 0;
    gameState.totalLines = 0;
    gameState.errorLines = 0;
    gameState.score = 0;
    gameState.wpm = 0;
    gameState.accuracy = 100;
    gameState.hasStartedTyping = false;
    gameState.textHistory = [];
    gameState.lastTextTime = null;
    gameState.totalCorrectChars = 0;
    gameState.totalTypedChars = 0;
    gameState.totalWords = 0;
    gameState.lastWordTime = null;
    gameState.isSubmitting = false;
    
    // Reset input
    elements.textInput.value = '';
    elements.textInput.disabled = false;
    elements.textInput.focus();
    
    // Reset tombol
    elements.startBtn.innerHTML = '<i class="fas fa-play"></i> Mulai Game';
    elements.startBtn.classList.remove('btn-secondary');
    elements.startBtn.classList.add('btn-primary');
    elements.startBtn.disabled = false;
    elements.pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Jeda';
    elements.pauseBtn.disabled = true;
    elements.skipBtn.disabled = true;
    elements.clearBtn.disabled = true;
    
    // Generate teks baru
    generateNewText();
    
    // Reset tampilan
    updateUI();
    updateTypedTextDisplay();
    updateTextHistory();
    updateStats();
    
    // Update hasil panel
    elements.resultsPanel.style.opacity = '0.7';
    elements.resultMessage.innerHTML = '<i class="fas fa-info-circle"></i> Mulai mengetik untuk memulai game';
}

// Change difficulty
function changeDifficulty(level) {
    if (gameState.isPlaying && !gameState.isPaused) {
        if (!confirm("Game sedang berjalan. Apakah Anda yakin ingin mengubah mode? Skor akan direset.")) {
            return;
        }
        resetGame();
    }
    
    gameState.difficulty = level;
    
    // Update tombol aktif
    elements.difficultyBtns.forEach(btn => {
        if (btn.dataset.level === level) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Generate teks baru
    generateNewText();
    
    // Update total waktu
    gameState.timeLeft = gameState.totalTime;
    elements.timer.textContent = gameState.timeLeft;
}

// Start timer
function startTimer() {
    clearInterval(gameState.timer);
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timer.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 0) {
            endGame();
        }
        
        updateStats();
    }, 1000);
}

// Handle input text
function handleInput() {
    const inputValue = elements.textInput.value;
    
    // Update karakter yang diketik
    gameState.typedText = inputValue;
    elements.typedChars.textContent = inputValue.length;
    
    // Update tampilan dengan highlight
    updateTypedTextDisplay();
    
    // Cek untuk auto-submit jika sudah sesuai panjang
    checkAutoSubmit(inputValue);
}

// Handle key down events
function handleKeyDown(e) {
    // Skip dengan Ctrl+S
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        skipText();
    }
    
    // Clear dengan Ctrl+L
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        clearInput();
    }
    
    // Handle spasi khusus untuk auto-submit
    if (e.key === ' ') {
        // Cek jika sudah mendekati akhir kalimat
        const inputValue = elements.textInput.value.trim();
        const targetLength = gameState.currentText.length;
        
        if (inputValue.length >= targetLength * 0.8) {
            // Delay sedikit untuk memberikan waktu spasi ditambahkan
            setTimeout(() => {
                checkAutoSubmit(elements.textInput.value);
            }, 50);
        }
    }
}

// Handle key up events (untuk tracking kata)
function handleKeyUp(e) {
    if (e.key === ' ' || e.key === 'Backspace') {
        // Update waktu untuk perhitungan WPM
        gameState.lastWordTime = new Date();
    }
}

// Check untuk auto-submit
function checkAutoSubmit(inputValue) {
    if (!gameState.isPlaying || gameState.isPaused || gameState.isSubmitting) return;
    
    const trimmedInput = inputValue.trim();
    const targetText = gameState.currentText;
    
    // Auto-submit jika:
    // 1. Input sudah sama atau lebih panjang dari target
    // 2. Atau jika input sudah 95% dari target dan ada spasi di akhir
    if (trimmedInput.length >= targetText.length || 
        (trimmedInput.length >= targetText.length * 0.95 && trimmedInput.endsWith(' '))) {
        
        gameState.isSubmitting = true;
        
        // Tambahkan animasi submitting
        elements.textInput.classList.add('submitting');
        
        // Delay untuk memberikan waktu mengetik karakter terakhir
        setTimeout(() => {
            checkText();
            elements.textInput.classList.remove('submitting');
            gameState.isSubmitting = false;
        }, 300);
    }
}

// Check text (dipanggil saat auto-submit)
function checkText() {
    if (!gameState.isPlaying || gameState.isPaused) return;
    
    const inputText = elements.textInput.value.trim();
    
    if (inputText === '') return;
    
    // Hitung waktu untuk teks ini
    const now = new Date();
    const timeTaken = gameState.lastTextTime ? (now - gameState.lastTextTime) / 1000 : 0;
    gameState.lastTextTime = now;
    
    // Hitung karakter yang benar
    const correctChars = calculateCorrectChars(inputText, gameState.currentText);
    const totalChars = Math.max(inputText.length, gameState.currentText.length);
    gameState.totalTypedChars += inputText.length;
    gameState.totalCorrectChars += correctChars;
    
    // Hitung kata yang benar
    const inputWords = inputText.split(/\s+/).length;
    const targetWords = gameState.currentText.split(/\s+/).length;
    gameState.totalWords += Math.min(inputWords, targetWords);
    
    // Cek apakah teks benar (toleransi 90%)
    const accuracy = (correctChars / totalChars) * 100;
    const isCorrect = accuracy >= 90;
    
    // Update statistik
    gameState.totalLines++;
    if (isCorrect) {
        gameState.correctLines++;
        playSound('correct');
    } else {
        gameState.errorLines++;
        playSound('incorrect');
    }
    
    // Tambahkan ke riwayat
    gameState.textHistory.unshift({
        text: gameState.currentText,
        typed: inputText,
        correct: isCorrect,
        time: timeTaken,
        accuracy: Math.round(accuracy),
        timestamp: now
    });
    
    // Keep only last 10 items in history
    if (gameState.textHistory.length > 10) {
        gameState.textHistory.pop();
    }
    
    // Clear input
    elements.textInput.value = '';
    gameState.typedText = '';
    elements.typedChars.textContent = '0';
    
    // Generate teks baru
    generateNewText();
    
    // Update tampilan
    updateTypedTextDisplay();
    updateTextHistory();
    updateStats();
    
    // Scroll otomatis ke teks baru
    elements.textToType.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Calculate correct characters (dengan toleransi)
function calculateCorrectChars(input, target) {
    let correct = 0;
    const minLength = Math.min(input.length, target.length);
    
    for (let i = 0; i < minLength; i++) {
        // Case-insensitive comparison
        if (input[i].toLowerCase() === target[i].toLowerCase()) {
            correct++;
        }
    }
    
    return correct;
}

// Skip text
function skipText() {
    if (!gameState.isPlaying || gameState.isPaused) return;
    
    // Tambahkan ke statistik sebagai kalimat salah (karena dilewati)
    gameState.totalLines++;
    gameState.errorLines++;
    
    // Tambahkan ke riwayat
    gameState.textHistory.unshift({
        text: gameState.currentText,
        typed: '[dilewati]',
        correct: false,
        time: 0,
        accuracy: 0,
        timestamp: new Date()
    });
    
    // Keep only last 10 items in history
    if (gameState.textHistory.length > 10) {
        gameState.textHistory.pop();
    }
    
    // Clear input
    elements.textInput.value = '';
    gameState.typedText = '';
    elements.typedChars.textContent = '0';
    
    // Generate teks baru
    generateNewText();
    
    // Update tampilan
    updateTypedTextDisplay();
    updateTextHistory();
    updateStats();
    
    // Play sound
    playSound('skip');
}

// Clear input
function clearInput() {
    elements.textInput.value = '';
    gameState.typedText = '';
    elements.typedChars.textContent = '0';
    updateTypedTextDisplay();
    playSound('clear');
}

// Update typed text display dengan highlight
function updateTypedTextDisplay() {
    const container = elements.typedTextDisplay;
    const inputText = elements.textInput.value;
    const targetText = gameState.currentText;
    
    if (inputText === '') {
        container.innerHTML = '<div class="empty-message">Mulai mengetik di bawah...</div>';
        container.className = 'typed-text-display';
        return;
    }
    
    // Buat tampilan dengan highlight
    let displayHTML = '';
    
    // Karakter per karakter
    for (let i = 0; i < targetText.length; i++) {
        if (i < inputText.length) {
            if (inputText[i].toLowerCase() === targetText[i].toLowerCase()) {
                displayHTML += `<span class="correct-char">${targetText[i]}</span>`;
            } else {
                displayHTML += `<span class="incorrect-char">${targetText[i]}</span>`;
            }
        } else if (i === inputText.length) {
            displayHTML += `<span class="current-char">${targetText[i]}</span>`;
        } else {
            displayHTML += targetText[i];
        }
    }
    
    // Jika input lebih panjang dari target
    if (inputText.length > targetText.length) {
        for (let i = targetText.length; i < inputText.length; i++) {
            displayHTML += `<span class="incorrect-char">${inputText[i]}</span>`;
        }
    }
    
    container.innerHTML = displayHTML;
    
    // Tambahkan kelas berdasarkan kesesuaian
    const accuracy = calculateCorrectChars(inputText, targetText) / Math.max(inputText.length, targetText.length);
    if (accuracy >= 0.9) {
        container.className = 'typed-text-display correct';
    } else if (accuracy >= 0.7) {
        container.className = 'typed-text-display';
    } else {
        container.className = 'typed-text-display incorrect';
    }
}

// Update text history
function updateTextHistory() {
    const container = elements.textHistoryContainer;
    
    if (gameState.textHistory.length === 0) {
        container.innerHTML = '<div class="empty-message">Belum ada riwayat teks</div>';
        return;
    }
    
    container.innerHTML = '';
    
    gameState.textHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = `history-item ${item.correct ? 'correct' : 'incorrect'}`;
        
        const timeStr = item.time > 0 ? `${item.time.toFixed(1)}s` : '-';
        const accuracyStr = item.accuracy > 0 ? `${item.accuracy}%` : '-';
        const statusText = item.correct ? 'Benar' : 'Salah';
        
        // Potong teks jika terlalu panjang
        const displayText = item.text.length > 100 ? 
            item.text.substring(0, 100) + '...' : item.text;
        
        historyItem.innerHTML = `
            <div class="history-text">${displayText}</div>
            <div class="history-info">
                <span>${timeStr}</span>
                <span>${accuracyStr}</span>
                <span class="history-status ${item.correct ? 'correct' : 'incorrect'}">${statusText}</span>
            </div>
        `;
        
        container.appendChild(historyItem);
    });
}

// Update statistik
function updateStats() {
    // Hitung WPM berdasarkan kata
    if (gameState.isPlaying && gameState.startTime) {
        const timeElapsedInMinutes = (gameState.totalTime - gameState.timeLeft) / 60;
        gameState.wpm = timeElapsedInMinutes > 0 ? 
            Math.round(gameState.totalWords / timeElapsedInMinutes) : 0;
    } else {
        gameState.wpm = 0;
    }
    
    // Hitung akurasi kalimat
    if (gameState.totalLines > 0) {
        gameState.accuracy = Math.round((gameState.correctLines / gameState.totalLines) * 100);
    } else {
        gameState.accuracy = 100;
    }
    
    // Hitung akurasi karakter
    let charAccuracy = 100;
    if (gameState.totalTypedChars > 0) {
        charAccuracy = Math.round((gameState.totalCorrectChars / gameState.totalTypedChars) * 100);
    }
    
    // Hitung skor dengan multiplier berdasarkan difficulty
    let multiplier = 1;
    switch(gameState.difficulty) {
        case 'easy': multiplier = 1; break;
        case 'medium': multiplier = 1.5; break;
        case 'hard': multiplier = 2; break;
        case 'mixed': multiplier = 1.2; break;
    }
    
    // Skor = (kalimat benar × 25) × akurasi karakter × multiplier
    gameState.score = Math.round(gameState.correctLines * 25 * (charAccuracy / 100) * multiplier);
    
    // Update tampilan
    elements.wpm.textContent = gameState.wpm;
    elements.accuracy.textContent = `${gameState.accuracy}%`;
    elements.score.textContent = gameState.score;
    elements.correctLines.textContent = gameState.correctLines;
    elements.errorLines.textContent = gameState.errorLines;
    elements.timer.textContent = gameState.timeLeft;
}

// Reset statistik
function resetStats() {
    gameState.typedText = '';
    gameState.correctLines = 0;
    gameState.totalLines = 0;
    gameState.errorLines = 0;
    gameState.score = 0;
    gameState.wpm = 0;
    gameState.accuracy = 100;
    gameState.textHistory = [];
    gameState.lastTextTime = null;
    gameState.totalCorrectChars = 0;
    gameState.totalTypedChars = 0;
    gameState.totalWords = 0;
    gameState.lastWordTime = null;
    
    elements.textInput.value = '';
    elements.typedChars.textContent = '0';
    
    updateTypedTextDisplay();
    updateTextHistory();
}

// Akhiri game
function endGame() {
    clearInterval(gameState.timer);
    gameState.isPlaying = false;
    gameState.hasStartedTyping = false;
    
    // Disable input
    elements.textInput.disabled = true;
    elements.skipBtn.disabled = true;
    elements.clearBtn.disabled = true;
    
    // Update tombol
    elements.startBtn.innerHTML = '<i class="fas fa-play"></i> Mulai Lagi';
    elements.startBtn.classList.remove('btn-secondary');
    elements.startBtn.classList.add('btn-primary');
    elements.pauseBtn.disabled = true;
    
    // Tampilkan hasil akhir
    showResults();
    
    // Play sound
    if (gameState.soundEnabled) {
        playSound('complete');
    }
}

// Tampilkan hasil
function showResults() {
    // Update nilai akhir
    elements.finalTotalLines.textContent = gameState.totalLines;
    elements.finalWpm.textContent = `${gameState.wpm} KPM`;
    elements.finalAccuracy.textContent = `${gameState.accuracy}%`;
    elements.finalScore.textContent = gameState.score;
    elements.finalCorrect.textContent = gameState.correctLines;
    elements.finalErrors.textContent = gameState.errorLines;
    
    // Hitung rating bintang
    const stars = calculateStarRating();
    updateStarRating(stars);
    
    // Tampilkan pesan berdasarkan performa
    let message = '';
    let icon = '';
    
    // Hitung akurasi karakter untuk pesan
    const charAccuracy = gameState.totalTypedChars > 0 ? 
        Math.round((gameState.totalCorrectChars / gameState.totalTypedChars) * 100) : 0;
    
    if (gameState.wpm < 20) {
        message = `Pemula: ${gameState.correctLines} kalimat benar (${charAccuracy}% akurasi karakter). Terus berlatih!`;
        icon = '<i class="fas fa-seedling"></i>';
    } else if (gameState.wpm < 40) {
        message = `Menengah: ${gameState.correctLines} kalimat benar (${charAccuracy}% akurasi karakter). Bagus!`;
        icon = '<i class="fas fa-thumbs-up"></i>';
    } else if (gameState.wpm < 60) {
        message = `Lancar: ${gameState.correctLines} kalimat benar (${charAccuracy}% akurasi karakter). Hebat!`;
        icon = '<i class="fas fa-trophy"></i>';
    } else if (gameState.wpm < 80) {
        message = `Ahli: ${gameState.correctLines} kalimat benar (${charAccuracy}% akurasi karakter). Luar biasa!`;
        icon = '<i class="fas fa-crown"></i>';
    } else {
        message = `Master: ${gameState.correctLines} kalimat benar (${charAccuracy}% akurasi karakter). Fantastis!`;
        icon = '<i class="fas fa-fire"></i>';
    }
    
    // Tambahkan komentar tentang akurasi
    if (gameState.accuracy < 70) {
        message += ' Fokus pada ketepatan mengetik setiap kalimat.';
    } else if (gameState.accuracy >= 90) {
        message += ' Konsistensi yang sangat baik!';
    }
    
    elements.resultMessage.innerHTML = `${icon} ${message}`;
    elements.resultsPanel.style.opacity = '1';
    
    // Animasi
    elements.resultsPanel.classList.remove('slide-in');
    void elements.resultsPanel.offsetWidth; // Trigger reflow
    elements.resultsPanel.classList.add('slide-in');
}

// Hitung rating bintang
function calculateStarRating() {
    let stars = 0;
    
    // Berdasarkan WPM
    if (gameState.wpm >= 15) stars++;
    if (gameState.wpm >= 30) stars++;
    if (gameState.wpm >= 45) stars++;
    if (gameState.wpm >= 60) stars++;
    if (gameState.wpm >= 75) stars++;
    
    // Bonus untuk akurasi tinggi
    const charAccuracy = gameState.totalTypedChars > 0 ? 
        (gameState.totalCorrectChars / gameState.totalTypedChars) * 100 : 0;
    
    if (charAccuracy >= 85 && stars < 5) stars++;
    if (charAccuracy >= 95 && stars < 5) stars++;
    
    // Bonus untuk kalimat benar banyak
    if (gameState.correctLines >= 10 && stars < 5) stars++;
    if (gameState.correctLines >= 20 && stars < 5) stars++;
    
    return Math.min(5, stars);
}

// Update star rating display
function updateStarRating(stars) {
    const starElements = elements.ratingStars.querySelectorAll('i');
    starElements.forEach((star, index) => {
        if (index < stars) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

// Update UI
function updateUI() {
    elements.timer.textContent = gameState.timeLeft;
    elements.wpm.textContent = gameState.wpm;
    elements.accuracy.textContent = `${gameState.accuracy}%`;
    elements.score.textContent = gameState.score;
    elements.correctLines.textContent = gameState.correctLines;
    elements.errorLines.textContent = gameState.errorLines;
}

// Toggle sound
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    updateSoundButton();
}

// Play sound effect
function playSound(type) {
    if (!gameState.soundEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        switch(type) {
            case 'start':
                playNote(audioContext, 523.25, 0.1); // C5
                break;
            case 'correct':
                playNote(audioContext, 659.25, 0.1); // E5
                break;
            case 'incorrect':
                playNote(audioContext, 220.00, 0.1); // A3
                break;
            case 'skip':
                playNote(audioContext, 349.23, 0.1); // F4
                break;
            case 'clear':
                playNote(audioContext, 392.00, 0.1); // G4
                break;
            case 'complete':
                // Chord C-E-G
                setTimeout(() => playNote(audioContext, 261.63, 0.3), 0);   // C4
                setTimeout(() => playNote(audioContext, 329.63, 0.3), 100); // E4
                setTimeout(() => playNote(audioContext, 392.00, 0.3), 200); // G4
                break;
        }
    } catch (e) {
        console.log('Audio tidak didukung di browser ini');
    }
}

// Helper function untuk memainkan not
function playNote(audioContext, frequency, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Toggle pause
function togglePause() {
    if (!gameState.isPlaying) return;
    
    if (gameState.isPaused) {
        resumeGame();
    } else {
        pauseGame();
    }
}

// Initialize game saat halaman dimuat
document.addEventListener('DOMContentLoaded', initGame);