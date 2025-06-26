// Music data from original script.js
const originalMusicTracks = [
    // Hindi Music
    { id: '1', title: 'Aaj Ki Raat', artist: 'Shubham', album: 'Hindi Hits', duration: '3:45', path: 'Music/Hindi/Aaj Ki Raat.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054613.jpg' },
    { id: '2', title: 'Aaj Phir', artist: 'Shubham', album: 'Hindi Hits', duration: '4:12', path: 'Music/Hindi/Aaj Phir.mp3', category: 'Hindi', coverArt: 'thumbnails/5000000.jpg'},
    { id: '3', title: 'Aayi Nai', artist: 'Shubham', album: 'Hindi Hits', duration: '3:28', path: 'Music/Hindi/Aayi Nai.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054651.jpg' },
    { id: '4', title: 'Apna Bana Le', artist: 'Shubham', album: 'Hindi Hits', duration: '4:01', path: 'Music/Hindi/Apna_Bana_Le.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054592.jpg' },
    { id: '5', title: 'Baarish Ban Jaana', artist: 'Shubham', album: 'Hindi Hits', duration: '3:55', path: 'Music/Hindi/Baarish Ban Jaana.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054607.jpg' },
    { id: '6', title: 'Baby Girl', artist: 'Shubham', album: 'Hindi Hits', duration: '3:33', path: 'Music/Hindi/Baby Girl.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054622.jpg' },
    { id: '7', title: 'Bachpan Ka Pyaar', artist: 'Shubham', album: 'Hindi Hits', duration: '2:58', path: 'Music/Hindi/Bachpan Ka Pyaar.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054619.jpg' },
    { id: '8', title: 'Buzz', artist: 'Shubham', album: 'Hindi Hits', duration: '3:22', path: 'Music/Hindi/Buzz.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054629.jpg' },
    { id: '9', title: 'De Taali', artist: 'Shubham', album: 'Hindi Hits', duration: '4:15', path: 'Music/Hindi/De Taali.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054617.jpg' },
    { id: '10', title: 'Dekhte Dekhte', artist: 'Shubham', album: 'Hindi Hits', duration: '4:28', path: 'Music/Hindi/Dekhte Dekhte.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054633.jpg' },
    { id: '11', title: 'Dheere Dheer', artist: 'Shubham', album: 'Hindi Hits', duration: '3:47', path: 'Music/Hindi/Dheere Dheere.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054618.jpg' },
    { id: '12', title: 'Dil Mein Chhupa Loonga', artist: 'Shubham', album: 'Hindi Hits', duration: '3:52', path: 'Music/Hindi/Dil Mein Chhupa Loonga.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054601.jpg' },
    { id: '13', title: 'Dosti', artist: 'Shubham', album: 'Hindi Hits', duration: '4:05', path: 'Music/Hindi/Dosti.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054602.jpg' },
    { id: '14', title: 'Duniyaa', artist: 'Shubham', album: 'Hindi Hits', duration: '3:41', path: 'Music/Hindi/Duniyaa.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054608.jpg' },
    { id: '15', title: 'Garmi', artist: 'Shubham', album: 'Hindi Hits', duration: '3:18', path: 'Music/Hindi/Garmi.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054626.jpg' },
    { id: '16', title: 'Genda Phool', artist: 'Shubham', album: 'Hindi Hits', duration: '2:48', path: 'Music/Hindi/Genda Phool.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054621.jpg' },
    { id: '17', title: 'Heeriye', artist: 'Shubham', album: 'Hindi Hits', duration: '4:33', path: 'Music/Hindi/Heeriye.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054614.jpg' },
    { id: '18', title: 'Hua Main', artist: 'Shubham', album: 'Hindi Hits', duration: '3:26', path: 'Music/Hindi/Hua Main.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054596.jpg' },
    { id: '19', title: 'Jaana Samjho Na', artist: 'Shubham', album: 'Hindi Hits', duration: '4:07', path: 'Music/Hindi/Jaana Samjho Na.mp3', category: 'Hindi', coverArt: 'thumbnails/1002054587.jpg' },
    { id: '20', title: 'Jai Shri Ram', artist: 'Shubham', album: 'Hindi Hits', duration: '3:15', path: 'Music/Hindi/Jai Shri Ram.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054604.jpg' },
    { id: '21', title: 'Janiye', artist: 'Shubham', album: 'Hindi Hits', duration: '3:59', path: 'Music/Hindi/Janiye.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054660.jpg' },
    { id: '22', title: 'Jo Tum Mere Ho', artist: 'Shubham', album: 'Hindi Hits', duration: '4:21', path: 'Music/Hindi/Jo Tum Mere Ho.mp3', category: 'Hindi', coverArt: 'thumbnails/120.jpg' },
    { id: '23', title: 'Kabhi Jo Baadal Barse', artist: 'Shubham', album: 'Hindi Hits', duration: '4:44', path: 'Music/Hindi/Kabhi Jo Baadal Barse.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054654.jpg' },
    { id: '24', title: 'Khairiyat', artist: 'Shubham', album: 'Hindi Hits', duration: '5:12', path: 'Music/Hindi/Khairiyat.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054585.jpg' },
    { id: '25', title: 'Laal Peeli Akhiyaan', artist: 'Shubham', album: 'Hindi Hits', duration: '3:38', path: 'Music/Hindi/Laal Peeli Akhiyaan .mp3', category: 'Hindi', coverArt: 'thumbnails/1000054590.jpg' },
    { id: '26', title: 'Lut Gaye', artist: 'Shubham', album: 'Hindi Hits', duration: '3:56', path: 'Music/Hindi/Lut Gaye.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054591.jpg' },
    { id: '27', title: 'Maan Meri Jaan', artist: 'Shubham', album: 'Hindi Hits', duration: '3:29', path: 'Music/Hindi/Maan Meri Jaan.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054587.jpg' },
    { id: '28', title: 'Made In India', artist: 'Shubham', album: 'Hindi Hits', duration: '4:18', path: 'Music/Hindi/Made In India.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054581.jpg' },
    { id: '29', title: 'Mehendi Wale Haath', artist: 'Shubham', album: 'Hindi Hits', duration: '4:02', path: 'Music/Hindi/Mehendi Wale Haath.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054655.jpg' },
    { id: '30', title: 'Mere Mehboob Mere Sanam', artist: 'Shubham', album: 'Hindi Hits', duration: '4:36', path: 'Music/Hindi/Mere Mehboob Mere Sanam.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054606.jpg' },
    { id: '31', title: 'Meri Zindagi Hai Tu', artist: 'Shubham', album: 'Hindi Hits', duration: '4:11', path: 'Music/Hindi/Meri Zindagi Hai Tu.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054625.jpg' },
    { id: '32', title: 'Morni', artist: 'Shubham', album: 'Hindi Hits', duration: '3:44', path: 'Music/Hindi/Morni.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054653.jpg' },
    { id: '33', title: 'Naacho Naacho', artist: 'Shubham', album: 'Hindi Hits', duration: '4:25', path: 'Music/Hindi/Naacho Naacho.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054603.jpg' },
    { id: '34', title: 'Nadaaniyan', artist: 'Shubham', album: 'Hindi Hits', duration: '3:51', path: 'Music/Hindi/Nadaaniyan.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054650.jpg' },
    { id: '35', title: 'Paani Paani', artist: 'Shubham', album: 'Hindi Hits', duration: '3:17', path: 'Music/Hindi/Paani Paani.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054623.jpg' },
    { id: '36', title: 'Pal', artist: 'Shubham', album: 'Hindi Hits', duration: '4:39', path: 'Music/Hindi/Pal.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054657.jpg' },
    { id: '37', title: 'Pehle Bhi Main', artist: 'Shubham', album: 'Hindi Hits', duration: '3:48', path: 'Music/Hindi/Pehle Bhi Main.mp3', category: 'Hindi', coverArt: 'thumbnails/18.jpg' },
    { id: '38', title: 'Photo', artist: 'Shubham', album: 'Hindi Hits', duration: '3:24', path: 'Music/Hindi/Photo.mp3', category: 'Hindi', coverArt: 'thumbnails/17.jpg' },
    { id: '39', title: 'Raataan Lambiyan', artist: 'Shubham', album: 'Hindi Hits', duration: '4:13', path: 'Music/Hindi/Raataan Lambiyan.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054627.jpg' },
    { id: '40', title: 'Ram Siya Ram', artist: 'Shubham', album: 'Hindi Hits', duration: '4:07', path: 'Music/Hindi/Ram Siya Ram.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054658.jpg' },
    { id: '41', title: 'Saari Duniya Jalaa Denge', artist: 'Shubham', album: 'Hindi Hits', duration: '3:35', path: 'Music/Hindi/Saari Duniya Jalaa Denge.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054594.jpg' },
    { id: '42', title: 'Saiyaan Ji', artist: 'Shubham', album: 'Hindi Hits', duration: '4:22', path: 'Music/Hindi/Saiyaan Ji.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054610.jpg' },
    { id: '43', title: 'Satranga', artist: 'Shubham', album: 'Hindi Hits', duration: '4:16', path: 'Music/Hindi/Satranga.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054595.jpg' },
    { id: '44', title: 'Soni Soni', artist: 'Shubham', album: 'Hindi Hits', duration: '3:42', path: 'Music/Hindi/Soni Soni.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054659.jpg' },
    { id: '45', title: 'Teri Baaton Mein Aisa Uljha Jiya', artist: 'Shubham', album: 'Hindi Hits', duration: '4:58', path: 'Music/Hindi/Teri Baaton Mein Aisa Uljha Jiya.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054591.jpg' },
    { id: '46', title: 'Thoda Thoda Pyaar', artist: 'Shubham', album: 'Hindi Hits', duration: '3:31', path: 'Music/Hindi/Thoda Thoda Pyaar.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054656.jpg' },
    { id: '47', title: 'Tu Hi Yaar Mera', artist: 'Shubham', album: 'Hindi Hits', duration: '4:45', path: 'Music/Hindi/Tu Hi Yaar Mera.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054620.jpg' },
    { id: '48', title: 'Tum Hi Ho', artist: 'Shubham', album: 'Hindi Hits', duration: '4:20', path: 'Music/Hindi/Tum Hi Ho.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054652.jpg' },
    { id: '49', title: 'Tum Mere Ho', artist: 'Shubham', album: 'Hindi Hits', duration: '3:54', path: 'Music/Hindi/Tum Mere Ho.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054599.jpg' },
    { id: '50', title: 'Tum Se', artist: 'Shubham', album: 'Hindi Hits', duration: '4:08', path: 'Music/Hindi/Tum_Se.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054630.jpg' },
    { id: '51', title: 'Wajah Tum Ho', artist: 'Shubham', album: 'Hindi Hits', duration: '4:29', path: 'Music/Hindi/Wajah Tum Ho.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054601.jpg' },
    { id: '52', title: 'What Jhumka', artist: 'Shubham', album: 'Hindi Hits', duration: '3:37', path: 'Music/Hindi/What Jhumka.mp3', category: 'Hindi', coverArt: 'thumbnails/1000054588.jpg' },
    
    // Bhojpuri Music
    { id: '100', title: 'Arrah Ke Othlali', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '4:07', path: 'Music/Bhojpuri/Arrah_Ke_Othlali.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054361.jpg' },
    { id: '101', title: 'Neelkamal Singh', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:31', path: 'Music/Bhojpuri/Neelkamal Singh.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054352.jpg' },
    { id: '102', title: 'Akhiyan Ke Kajra Jhagda Kara Dele Ba', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Akhiya Ke Kajra Jhagda Kara Dele Ba.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054353.jpg' },
    { id: '103', title: 'Ara Me Dobara', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Ara Me Dobara.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054362.jpg' },
    { id: '104', title: 'Bas Kar Pagli', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Bas Kar Pagli.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054355.jpg' },
    { id: '105', title: 'Humk Dulhan Banaal', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Humk Dulhan Banaal.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054354.jpg' },
    { id: '106', title: 'Kamariya Dole', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Kamariya Dole.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054351.jpg' },
    { id: '107', title: 'Lagelu Jahar', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Lagelu Jahar.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054357.jpg' },
    { id: '108', title: 'Maroon Color Sadiya', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Maroon Color Sadiya.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054356.jpg' },
    { id: '109', title: 'Paani Paani (Bhojpuri)', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Paani Paani.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054645.jpg' },
    { id: '110', title: 'Pagli Dekhave Agrabatti', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Pagli Dekhave Agrabatti.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054350.jpg' },
    { id: '111', title: 'Godi Me Leke', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Godi Me Leke.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054353.jpg' },
    { id: '112', title: 'Piyar Farak Wali', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Piyar Farak Wali.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054354.jpg' },
    { id: '113', title: 'Rajaji Ke Dilwa', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Rajaji Ke Dilwa.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054362.jpg' },
    { id: '114', title: 'Tumsa Koi Pyara', artist: 'Shubham', album: 'Bhojpuri Collection', duration: '3:30', path: 'Music/bhojpuri/Tumsa Koi Pyara.mp3', category: 'Bhojpuri', coverArt: 'thumbnails/1000054362.jpg' },
    
    // Other Music
    { id: '200', title: 'Other Hit 1', artist: 'Shubham', album: 'Other Collection', duration: '3:58', path: 'Music/Other/sample1.mp3', category: 'Other', coverArt: 'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: '201', title: 'Other Hit 2', artist: 'Shubham', album: 'Other Collection', duration: '4:21', path: 'Music/Other/sample2.mp3', category: 'Other', coverArt: 'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=300' },
];

// Global variables
let currentTrack = null;
let currentPlaylist = [];
let currentIndex = 0;
let isPlaying = false;
let currentCategory = 'all';
let searchQuery = '';
let audioPlayer = null;
let allMusicTracks = []; // This will hold all songs: original + from song.json

// DOM elements
const app = document.querySelector('.app');
const sidebar = document.getElementById('sidebar');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const categoryItems = document.querySelectorAll('.category-item');
const searchInput = document.getElementById('searchInput');
const trackList = document.getElementById('trackList');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDescription = document.getElementById('categoryDescription');
const categoryImage = document.getElementById('categoryImage');
const trackCount = document.getElementById('trackCount');
const playAllBtn = document.getElementById('playAllBtn');
const searchResults = document.getElementById('searchResults');
const searchTitle = document.getElementById('searchTitle');
const noResults = document.getElementById('noResults');
const sidebarPlaylists = document.getElementById('sidebarPlaylists'); // Reference to the playlist list in sidebar


// Player elements (Mini Player)
const musicPlayer = document.getElementById('musicPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentTrackTitle = document.getElementById('currentTrackTitle');
const currentTrackArtist = document.getElementById('currentTrackArtist');
const currentTrackImage = document.getElementById('currentTrackImage');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const progressHandle = document.getElementById('progressHandle');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const volumeSlider = document.getElementById('volumeSlider');

// Full-screen Player elements
const fullScreenPlayer = document.getElementById('fullScreenPlayer');
const closeFullScreenPlayerBtn = document.getElementById('closeFullScreenPlayerBtn');
const fullTrackImage = document.getElementById('fullTrackImage');
const fullTrackTitle = document.getElementById('fullTrackTitle');
const fullTrackArtist = document.getElementById('fullTrackArtist');
const fullPlayerAlbum = document.getElementById('fullPlayerAlbum');
const fullProgressBar = document.getElementById('fullProgressBar');
const fullProgressFill = document.getElementById('fullProgressFill');
const fullProgressHandle = document.getElementById('fullProgressHandle');
const fullCurrentTime = document.getElementById('fullCurrentTime');
const fullTotalTime = document.getElementById('fullTotalTime');
const fullPlayPauseBtn = document.getElementById('fullPlayPauseBtn');
const fullPrevBtn = document.getElementById('fullPrevBtn');
const fullNextBtn = document.getElementById('fullNextBtn');
const fullVolumeSlider = document.getElementById('fullVolumeSlider');


// Initialize audio player
audioPlayer = document.getElementById('audioPlayer');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

async function initializeApp() {
    // Load songs from song.json
    let newSongsFromJson = [];
    try {
        const response = await fetch('song.json');
        const jsonData = await response.json();
        // Assign unique IDs to songs from JSON, and a default coverArt
        newSongsFromJson = jsonData.map((song, index) => ({
            id: `json-${index}`, // Unique ID for songs from JSON
            title: song.title.split(' - ')[0].split('(')[0].replace(/::www\..*::/g, '').replace(/@.*\.com/g, '').trim(),
            artist: "Various Artists", // Default artist for these songs
            album: "Shubham 1000 Old Songs", // Assign to the new playlist album
            duration: `${Math.floor(Math.random() * 3) + 3}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`, // Random duration
            path: song.url,
            category: 'Shubham 1000 Old Songs', // New category for these songs
            coverArt: 'https://placehold.co/100x100/1DB954/FFFFFF?text=Old+Songs' // Generic cover art
        }));
        console.log(`Loaded ${newSongsFromJson.length} songs from song.json`);
    } catch (error) {
        console.error('Error loading song.json:', error);
    }

    // Combine original tracks with tracks from song.json
    // Assign new unique IDs to original tracks to prevent conflicts
    const processedOriginalTracks = originalMusicTracks.map((track, index) => ({
        ...track,
        id: `original-${track.id}` // Ensure unique IDs
    }));

    // Filter out potential duplicates if a song title+artist from JSON is already in originalMusicTracks
    // This simple deduplication prioritizes originalMusicTracks if a match is found
    const combinedTracksMap = new Map();

    processedOriginalTracks.forEach(track => {
        const key = `${track.title.toLowerCase()}-${track.artist.toLowerCase()}`;
        combinedTracksMap.set(key, track);
    });

    newSongsFromJson.forEach(track => {
        const key = `${track.title.toLowerCase()}-${track.artist.toLowerCase()}`;
        // Only add if not already present
        if (!combinedTracksMap.has(key)) {
            combinedTracksMap.set(key, track);
        }
    });

    allMusicTracks = Array.from(combinedTracksMap.values());
    console.log(`Total songs after combining: ${allMusicTracks.length}`);

    // Dynamically add "Shubham 1000 Old Songs" to the sidebar playlists
    addPlaylistToSidebar("Shubham 1000 Old Songs");
    
    const initialTracks = getFilteredTracks();
    console.log('Initial filtered tracks count:', initialTracks.length);
    updateDisplay();
    updatePlayerDisplay();
}

function setupEventListeners() {
    // Sidebar toggle for mobile
    hamburgerMenu.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking outside on mobile
    app.addEventListener('click', function(event) {
        if (app.classList.contains('sidebar-open') && !sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            toggleSidebar();
        }
    });

    // Category selection
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            selectCategory(category);
            // Close sidebar if open on mobile after selection
            if (app.classList.contains('sidebar-open')) {
                toggleSidebar();
            }
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        searchQuery = this.value;
        updateDisplay();
    });

    // Play all button
    playAllBtn.addEventListener('click', playAll);

    // Mini Player controls - Added e.stopPropagation() to prevent opening full player
    playPauseBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        togglePlayPause();
    });
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        playPrevious();
    });
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        playNext();
    });

    const shuffleBtn = document.querySelector('.shuffle-btn');
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add shuffle functionality here if needed
            shuffleCurrentPlaylist();
        });
    }
    const repeatBtn = document.querySelector('.repeat-btn');
    if (repeatBtn) {
        repeatBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add repeat functionality here if needed
        });
    }

    // Progress bar
    progressBar.addEventListener('click', function(e) {
        e.stopPropagation(); 
        seekToPosition(e);
    });

    // Volume control
    volumeSlider.addEventListener('input', function(e) {
        e.stopPropagation(); 
        if (audioPlayer) {
            audioPlayer.volume = this.value / 100;
            fullVolumeSlider.value = this.value; // Sync full player volume
        }
    });

    // Full-screen Player functionality
    // This listener now applies to the whole musicPlayer div
    // A click on any non-control part of the music-player will open the full screen player
    musicPlayer.addEventListener('click', openFullScreenPlayer);
    
    closeFullScreenPlayerBtn.addEventListener('click', closeFullScreenPlayer);
    fullPlayPauseBtn.addEventListener('click', togglePlayPause);
    fullPrevBtn.addEventListener('click', playPrevious);
    fullNextBtn.addEventListener('click', playNext);
    fullProgressBar.addEventListener('click', seekToPositionFullScreen);
    fullVolumeSlider.addEventListener('input', function() {
        if (audioPlayer) {
            audioPlayer.volume = this.value / 100;
            volumeSlider.value = this.value; // Sync mini player volume
        }
    });


    // Audio player events
    if (audioPlayer) {
        audioPlayer.addEventListener('loadedmetadata', updateDuration);
        audioPlayer.addEventListener('timeupdate', updateProgress);
        audioPlayer.addEventListener('ended', playNext);
        audioPlayer.addEventListener('error', handleAudioError);
    }

    // Add click listeners to dynamically added playlist items in the sidebar
    sidebarPlaylists.addEventListener('click', function(event) {
        const target = event.target.closest('.playlist-item');
        if (target && target.dataset.playlistName) {
            const playlistName = target.dataset.playlistName;
            selectPlaylist(playlistName);
            if (app.classList.contains('sidebar-open')) {
                toggleSidebar();
            }
        }
    });
}

function toggleSidebar() {
    app.classList.toggle('sidebar-open');
}

function selectCategory(category) {
    currentCategory = category;
    
    // Update active category
    categoryItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });

    updateDisplay();
}

function selectPlaylist(playlistName) {
    if (playlistName === "Liked Songs") {
        currentCategory = 'liked'; // Use a specific category for liked songs if you implement liking
        // For now, if 'Liked Songs' is clicked, it behaves like 'All Music'
        // You would implement actual liked songs logic here
        currentCategory = 'all'; // Fallback for now
    } else if (playlistName === "Shubham 1000 Old Songs") {
        currentCategory = 'Shubham 1000 Old Songs';
    } else {
        // Handle other custom playlists if they exist
        currentCategory = 'all'; // Default to all music if playlist not found
    }
    
    // Update active playlist item in sidebar (if you implement visual active state for playlists)
    document.querySelectorAll('.playlist-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.playlistName === playlistName) {
            item.classList.add('active');
        }
    });

    updateDisplay();
}


function updateDisplay() {
    const filteredTracks = getFilteredTracks();
    const categoryInfo = getCategoryInfo();

    // Update category header
    categoryTitle.textContent = categoryInfo.title;
    categoryDescription.textContent = categoryInfo.description;
    categoryImage.src = categoryInfo.coverArt;
    trackCount.textContent = `${filteredTracks.length} songs`;

    // Update search results
    if (searchQuery.trim()) {
        searchResults.classList.remove('hidden');
        searchTitle.textContent = `Search results for "${searchQuery}" (${filteredTracks.length} songs)`;
    } else {
        searchResults.classList.add('hidden');
    }

    // Update track list
    if (filteredTracks.length > 0) {
        renderTrackList(filteredTracks);
        noResults.classList.add('hidden');
    } else {
        trackList.innerHTML = '';
        noResults.classList.remove('hidden');
        noResults.querySelector('p').textContent = searchQuery ? 
            'No songs found matching your search.' : 
            'No songs available in this category.';
    }
}

function getFilteredTracks() {
    let tracks = allMusicTracks; // Use the combined list

    // Filter by category
    if (currentCategory === 'all') {
        // No filter needed, 'allMusicTracks' already contains everything
    } else if (currentCategory === 'Shubham 1000 Old Songs') {
        tracks = tracks.filter(track => track.category === 'Shubham 1000 Old Songs');
    }
    // Add other category filters here based on your original categories
    else {
        tracks = tracks.filter(track => track.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        tracks = tracks.filter(track =>
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query) ||
            track.album.toLowerCase().includes(query)
        );
    }

    return tracks;
}

function getCategoryInfo() {
    switch (currentCategory) {
        case 'Hindi':
            return {
                title: 'Hindi Music',
                description: 'The best collection of Hindi songs from Shubham Song',
                coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=500'
            };
        case 'Bhojpuri':
            return {
                title: 'Bhojpuri Music',
                description: 'Traditional and modern Bhojpuri hits',
                coverArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500'
            };
        case 'Other':
            return {
                title: 'Other Music',
                description: 'Diverse collection of music from various genres',
                coverArt: 'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=500'
            };
        case 'Shubham 1000 Old Songs':
            return {
                title: 'Shubham 1000 Old Songs',
                description: 'A massive collection of old hits from various artists.',
                coverArt: 'https://placehold.co/500x500/1DB954/FFFFFF?text=Shubham+Old+Songs'
            };
        default: // 'all' or any unhandled playlist/category
            return {
                title: 'SHUBHAM MUSIC',
                description: 'Complete collection of all your favorite songs',
                coverArt: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=500'
            };
    }
}

function renderTrackList(tracks) {
    trackList.innerHTML = '';
    
    tracks.forEach((track, index) => {
        const trackItem = document.createElement('div');
        trackItem.className = `track-item ${currentTrack && currentTrack.id === track.id ? 'playing' : ''}`;
        trackItem.dataset.id = track.id; // Add data-id attribute
        
        trackItem.innerHTML = `
            <div class="track-number">
                <span class="track-number-text">${index + 1}</span>
                <i class="fas ${currentTrack && currentTrack.id === track.id && isPlaying ? 'fa-pause' : 'fa-play'} play-icon"></i>
            </div>
            <div class="track-info">
                <img src="${track.coverArt}" alt="${track.title}" class="track-cover" onerror="this.onerror=null;this.src='https://placehold.co/40x40/CCCCCC/000000?text=NA';">
                <div class="track-details">
                    <div class="track-title">${track.title}</div>
                    <div class="track-artist">${track.artist}</div>
                </div>
            </div>
            <div class="track-album">${track.album}</div>
            <div class="track-duration-container">
                <div class="track-actions">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="track-duration">${track.duration}</div>
            </div>
        `;

        trackItem.addEventListener('click', () => playTrack(track, tracks));
        trackList.appendChild(trackItem);
    });
}

function playTrack(track, playlist = []) {
    currentTrack = track;
    currentPlaylist = playlist.length > 0 ? playlist : getFilteredTracks();
    currentIndex = currentPlaylist.findIndex(t => t.id === track.id);

    if (audioPlayer) {
        audioPlayer.src = track.path;
        audioPlayer.load();
        
        audioPlayer.play().then(() => {
            isPlaying = true;
            updatePlayerDisplay();
            updateTrackListDisplay();
        }).catch(error => {
            console.log('Playback failed (autoplay prevented or file error):', error);
            isPlaying = false; // Set to false if play fails
            updatePlayerDisplay();
            // Simulate playback only if the audio object genuinely cannot play (e.g., non-existent file)
            // For autoplay policy issues, the user needs to click play button
            if (error.name === "NotSupportedError" || error.name === "MediaError") {
                simulatePlayback();
            }
        });
    } else {
        // Fallback for extreme cases where audioPlayer isn't found
        simulatePlayback();
    }
}

function simulatePlayback() {
    console.log('Simulating playback for demo/unplayable audio.');
    isPlaying = true;
    updatePlayerDisplay();
    
    // Clear any existing simulation interval
    if (window.simulatedPlaybackInterval) {
        clearInterval(window.simulatedPlaybackInterval);
    }

    // Attempt to parse duration from currentTrack, default to 180 seconds if not found/invalid
    const duration = parseDuration(currentTrack?.duration) || 180;
    let simulatedTime = 0;
    
    window.simulatedPlaybackInterval = setInterval(() => {
        if (!isPlaying || simulatedTime >= duration) {
            clearInterval(window.simulatedPlaybackInterval);
            if (simulatedTime >= duration) {
                playNext(); // Automatically play next if simulation ends
            }
            return;
        }
        
        simulatedTime += 1; // Increment by 1 second
        updateSimulatedProgress(simulatedTime, duration);
        
    }, 1000); // Update every second
}

function parseDuration(durationStr) {
    if (!durationStr || typeof durationStr !== 'string') return 0;
    const parts = durationStr.split(':');
    if (parts.length === 2) {
        return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
    return 0; // Default to 0 if format is unexpected
}


function updateSimulatedProgress(current, duration) {
    const progress = (current / duration) * 100;
    progressFill.style.width = `${progress}%`;
    progressHandle.style.left = `${progress}%`;
    currentTime.textContent = formatTime(current);
    totalTime.textContent = formatTime(duration);
    
    // Update full player
    fullProgressFill.style.width = `${progress}%`;
    fullProgressHandle.style.left = `${progress}%`;
    fullCurrentTime.textContent = formatTime(current);
    fullTotalTime.textContent = formatTime(duration);
}

function playAll() {
    const filteredTracks = getFilteredTracks();
    if (filteredTracks.length > 0) {
        playTrack(filteredTracks[0], filteredTracks);
    } else {
        alert("No songs available to play in this category/search result.");
    }
}

function togglePlayPause() {
    if (!currentTrack) return;

    if (isPlaying) {
        if (audioPlayer && !audioPlayer.paused) {
            audioPlayer.pause();
        }
        isPlaying = false;
        if (window.simulatedPlaybackInterval) {
            clearInterval(window.simulatedPlaybackInterval);
        }
    } else {
        if (audioPlayer && audioPlayer.paused) {
            audioPlayer.play().catch(error => {
                console.log('Playback failed during toggle (autoplay prevented):', error);
                // If it fails to play due to autoplay policy, simulate
                if (error.name === "NotAllowedError" || error.name === "AbortError") {
                    simulatePlayback();
                }
            });
        } else {
            // If audioPlayer is not initialized or not in a paused state,
            // and we want to play, means we need to load and play, or simulate.
            // This case might happen if no song was loaded yet, or a previous play failed.
            if (currentTrack) {
                audioPlayer.src = currentTrack.path;
                audioPlayer.load();
                audioPlayer.play().catch(error => {
                    console.log('Playback failed (re-attempt):', error);
                    simulatePlayback();
                });
            } else {
                simulatePlayback(); // If no currentTrack for some reason, just simulate.
            }
        }
        isPlaying = true;
    }

    updatePlayerDisplay();
    updateTrackListDisplay();
}

function playNext() {
    if (currentPlaylist.length === 0) return;
    
    const nextIndex = (currentIndex + 1) % currentPlaylist.length;
    const nextTrack = currentPlaylist[nextIndex];
    
    if (nextTrack) {
        playTrack(nextTrack, currentPlaylist);
    }
}

function playPrevious() {
    if (currentPlaylist.length === 0) return;
    
    const prevIndex = currentIndex === 0 ? currentPlaylist.length - 1 : currentIndex - 1;
    const prevTrack = currentPlaylist[prevIndex];
    
    if (prevTrack) {
        playTrack(prevTrack, currentPlaylist);
    }
}

function seekToPosition(event) {
    if (!currentTrack) return;
    
    const rect = progressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const duration = audioPlayer.duration || parseDuration(currentTrack.duration); // Use actual duration if available, else simulated
    const newTime = percent * duration;
    
    if (audioPlayer && !isNaN(audioPlayer.duration) && isFinite(audioPlayer.duration)) {
        audioPlayer.currentTime = newTime;
    } else {
        // For simulated playback
        if (window.simulatedPlaybackInterval) {
            clearInterval(window.simulatedPlaybackInterval);
        }
        updateSimulatedProgress(newTime, duration);
        // Restart simulation from new time if playing
        if (isPlaying) {
            let simulatedTime = newTime;
            window.simulatedPlaybackInterval = setInterval(() => {
                if (!isPlaying || simulatedTime >= duration) {
                    clearInterval(window.simulatedPlaybackInterval);
                    if (simulatedTime >= duration) playNext();
                    return;
                }
                simulatedTime += 1;
                updateSimulatedProgress(simulatedTime, duration);
            }, 1000);
        }
    }
}

function seekToPositionFullScreen(event) {
    if (!currentTrack) return;
    
    const rect = fullProgressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const duration = audioPlayer.duration || parseDuration(currentTrack.duration); // Use actual duration if available, else simulated
    const newTime = percent * duration;
    
    if (audioPlayer && !isNaN(audioPlayer.duration) && isFinite(audioPlayer.duration)) {
        audioPlayer.currentTime = newTime;
    } else {
        // For simulated playback, similar logic as seekToPosition
        if (window.simulatedPlaybackInterval) {
            clearInterval(window.simulatedPlaybackInterval);
        }
        updateSimulatedProgress(newTime, duration);
        if (isPlaying) {
            let simulatedTime = newTime;
            window.simulatedPlaybackInterval = setInterval(() => {
                if (!isPlaying || simulatedTime >= duration) {
                    clearInterval(window.simulatedPlaybackInterval);
                    if (simulatedTime >= duration) playNext();
                    return;
                }
                simulatedTime += 1;
                updateSimulatedProgress(simulatedTime, duration);
            }, 1000);
        }
    }
}


function updateDuration() {
    if (audioPlayer && currentTrack && !isNaN(audioPlayer.duration)) {
        totalTime.textContent = formatTime(audioPlayer.duration);
        fullTotalTime.textContent = formatTime(audioPlayer.duration);
    }
}

function updateProgress() {
    if (audioPlayer && !isNaN(audioPlayer.duration) && isFinite(audioPlayer.duration)) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressFill.style.width = `${progress}%`;
        progressHandle.style.left = `${progress}%`;
        currentTime.textContent = formatTime(audioPlayer.currentTime);

        // Update full player
        fullProgressFill.style.width = `${progress}%`;
        fullProgressHandle.style.left = `${progress}%`;
        fullCurrentTime.textContent = formatTime(audioPlayer.currentTime);
    }
}

function handleAudioError() {
    console.warn('Audio playback error for:', currentTrack ? currentTrack.path : 'unknown song');
    // If there's an error loading the audio, try to simulate playback.
    // This is useful for dummy URLs or unavailable resources.
    if (currentTrack) {
        simulatePlayback();
    }
    // Optionally, alert the user or show a message box
    // alert("Could not load the audio for this track. Simulating playback.");
}

function updatePlayerDisplay() {
    if (!currentTrack) {
        // Mini player
        currentTrackTitle.textContent = 'Select a song to start playing';
        currentTrackArtist.textContent = '';
        currentTrackImage.src = '';
        currentTrackImage.style.display = 'none';
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';

        // Full player
        fullTrackTitle.textContent = 'Select a song to start playing';
        fullTrackArtist.textContent = '';
        fullPlayerAlbum.textContent = '';
        fullTrackImage.src = '';
        fullTrackImage.style.display = 'none';
        fullPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        return;
    }

    // Mini player updates
    currentTrackTitle.textContent = currentTrack.title;
    currentTrackArtist.textContent = currentTrack.artist;
    currentTrackImage.src = currentTrack.coverArt;
    currentTrackImage.style.display = 'block';
    playPauseBtn.innerHTML = isPlaying ? 
        '<i class="fas fa-pause"></i>' : 
        '<i class="fas fa-play"></i>';

    // Full-screen player updates
    fullTrackImage.src = currentTrack.coverArt;
    fullTrackImage.style.display = 'block';
    fullTrackTitle.textContent = currentTrack.title;
    fullTrackArtist.textContent = currentTrack.artist;
    fullPlayerAlbum.textContent = currentTrack.album;
    fullPlayPauseBtn.innerHTML = isPlaying ?
        '<i class="fas fa-pause"></i>' :
        '<i class="fas fa-play"></i>';
}

function updateTrackListDisplay() {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach(item => {
        const playIcon = item.querySelector('.play-icon');
        const trackNumberText = item.querySelector('.track-number-text');

        const isCurrentItem = currentTrack && item.dataset.id === currentTrack.id;
        
        item.classList.toggle('playing', isCurrentItem);
        
        if (isCurrentItem) {
            if (isPlaying) {
                playIcon.className = 'fas fa-pause play-icon';
                if (trackNumberText) trackNumberText.style.display = 'none';
            } else {
                playIcon.className = 'fas fa-play play-icon';
                if (trackNumberText) trackNumberText.style.display = 'none';
            }
            playIcon.style.display = 'block'; // Ensure icon is visible for playing/paused track
        } else {
            playIcon.className = 'fas fa-play play-icon'; // Default to play icon
            playIcon.style.display = 'none'; // Hide by default
            if (trackNumberText) trackNumberText.style.display = 'block'; // Show number by default
        }

        // Add hover effect for play icon on non-playing tracks
        item.onmouseenter = () => {
            if (!isCurrentItem) {
                playIcon.style.display = 'block';
                if (trackNumberText) trackNumberText.style.display = 'none';
            }
        };
        item.onmouseleave = () => {
            if (!isCurrentItem) {
                playIcon.style.display = 'none';
                if (trackNumberText) trackNumberText.style.display = 'block';
            }
        };
    });
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function openFullScreenPlayer() {
    fullScreenPlayer.classList.add('visible');
    updatePlayerDisplay(); // Ensure full player content is up-to-date
}

function closeFullScreenPlayer(e) {
    e.stopPropagation(); 
    fullScreenPlayer.classList.remove('visible');
}

function addPlaylistToSidebar(playlistName) {
    const playlistItem = document.createElement('div');
    playlistItem.className = 'playlist-item';
    playlistItem.dataset.playlistName = playlistName;
    playlistItem.innerHTML = `
        <i class="fas fa-music"></i> 
        <span>${playlistName}</span>
    `;
    sidebarPlaylists.appendChild(playlistItem);
}

function shuffleCurrentPlaylist() {
    if (!currentPlaylist || currentPlaylist.length <= 1) return;

    // Fisher-Yates (Knuth) shuffle algorithm
    for (let i = currentPlaylist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentPlaylist[i], currentPlaylist[j]] = [currentPlaylist[j], currentPlaylist[i]];
    }

    // If a song was playing, find its new index and play it.
    // Otherwise, play the first song in the shuffled list.
    if (currentTrack) {
        currentIndex = currentPlaylist.findIndex(t => t.id === currentTrack.id);
        if (currentIndex === -1) { // If current song somehow not in shuffled list (shouldn't happen)
            currentIndex = 0;
            currentTrack = currentPlaylist[0];
        }
    } else {
        currentIndex = 0;
        currentTrack = currentPlaylist[0];
    }
    
    // Play the current song again to reflect the new shuffled order.
    // This also updates the UI to reflect the shuffled list.
    playTrack(currentTrack, currentPlaylist); 
}
