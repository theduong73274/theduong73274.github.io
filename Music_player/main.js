const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'TD_PLAYER'

// load more và virtual scroll

/* 
* 1. Render playlist
* 2. Scroll top 
* 3. Play / Pause / Seek
* 4. CD rotate
* 5. Next / Prev
* 6. Random
* 7. Next / Repeat when end
* 8. Acitive Song
* 9. Scroll song when in to view
* 10. Play song when click
*/

const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
var count = 0
var arrayTemp = []
const app = {
    currentIndex: 0,
    currentTime: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isTimeupdate: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'Hoa còn vương nắng',
            singer:'Thế Dương',
            path: './assets/music/music1.mp3',
            image: './assets/img/song1.jpg'
        },
        {
            name: 'Hoa còn vương',
            singer:'Thế Dương',
            path: './assets/music/music2.mp3',
            image: './assets/img/song2.jpg'
        },
        {
            name: 'Ghé qua',
            singer:'Thế Dương',
            path: './assets/music/music3.mp3',
            image: './assets/img/song3.jpg'
        },
        {
            name: 'Hương hoa',
            singer:'Thế Dương',
            path: './assets/music/music4.mp3',
            image: './assets/img/song4.jpg'
        },
        {
            name: 'Từng cơn đau',
            singer:'Thế Dương',
            path: './assets/music/music5.mp3',
            image: './assets/img/song5.jpg'
        },
        {
            name: 'Đường tôi trở em về',
            singer:'Thế Dương',
            path: './assets/music/music6.mp3',
            image: './assets/img/song6.jpg'
        },
        {
            name: 'Forever love',
            singer:'Thế Dương',
            path: './assets/music/music7.mp3',
            image: './assets/img/song7.jpg'
        },
        {
            name: 'Diễm xưa',
            singer:'Hà lê',
            path: './assets/music/music8.mp3',
            image: './assets/img/song8.jpg'
        },
        {
            name: 'Đưa nhau đi trốn',
            singer:'Đen Vâu',
            path: './assets/music/music9.mp3',
            image: './assets/img/song9.jpg'
        },
        {
            name: 'Ghé thăm',
            singer:'Đen Vâu',
            path: './assets/music/music10.mp3',
            image: './assets/img/song10.jpg'
        },
        {
            name: 'Không thể bên nhau',
            singer:'Hoa Vinh',
            path: './assets/music/music11.mp3',
            image: './assets/img/song11.jpg'
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function(){
        const htmls = this.songs.map((song,index) => {
            return `  <div data-index="${index}" class="song ${index === this.currentIndex ? 'active' : ''}">
                        <div class="thumb" style="background-image: url('${song.image}')">
                        </div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>`
        })
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function(){
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentIndex]
            }
            
        })
    },
    handleEvents: function(){
        const _this=this
        const cdWidth = cd.offsetWidth
        let checkOnMouseAndTouch = true
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ],{
            duration: 10000, //10 seconds
            iterations: Infinity
        })
        cdThumbAnimate.pause()
        
        // Xử lý phóng to thu nhỏ cd
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop
           

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause()
            }else{
                audio.play()
            }
        }

        // Khi được play
        audio.onplay = function(){
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

         // Khi bị pause
        audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        progress.onmousedown = function(){
            checkOnMouseAndTouch = false
        }

        progress.ontouchstart = function(){
            checkOnMouseAndTouch = false
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration && checkOnMouseAndTouch){
                const progressPersent = Math.floor(audio.currentTime / audio.duration * 100 )
                progress.value = progressPersent
            }

            _this.setConfig('currentTime',audio.currentTime)
        }

        

        // Xử lí khi tua xong
        progress.oninput = function(e){
            const seekTime = audio.duration/100 * e.target.value
            audio.currentTime = seekTime
            checkOnMouseAndTouch = true
            audio.play()
        }

        // khi next bài hát
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

         // khi prev bài hát
        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Khi bài hát phát ngẫu nhiên
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom) 
            randomBtn.classList.toggle("active", _this.isRandom)
        }

        // Khi bài hát click repeat
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat) 
            repeatBtn.classList.toggle("active", _this.isRepeat)
        }



        // Xử lý song next / repeat ended
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{
                nextBtn.click()
            }
        }

        // Xử lí khi click vào playlist
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)')
            if(songNode || e.target.closest('.option')){
                
                //Xử lí khi click vào song
                if(songNode){
                    // console.log(songNode.getAttribute('data-index'))
                    _this.currentIndex  = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }

                //Xử lí khi click vào option
                if(e.target.closest('.option')){
                    
                }
            }
        }
    },
    loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat

        this.currentIndex = this.config.currentIndex || this.currentIndex;
        this.currentTime = this.config.currentTime || this.currentTime;

        // hiển thị trạng thái ban đầu của button Random & Repeat
        repeatBtn.classList.toggle("active", this.isRepeat)
        randomBtn.classList.toggle("active", this.isRandom)

    },
    nextSong: function(){
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function(){
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function(){
        let newIndex
        newIndex = Math.floor(Math.random() * this.songs.length)
        if(count > 0){
            do{
                newIndex = Math.floor(Math.random() * this.songs.length)
                var isCheck = arrayTemp.includes(newIndex)
            }while(isCheck == true)
        }

        // console.log(count,newIndex)
        // console.log(arrayTemp)

        arrayTemp[count] = newIndex
        this.currentIndex = newIndex
        this.loadCurrentSong()
        if(count == this.songs.length-1){
            arrayTemp = [];
            count = -1
        }
        count++
    },
    scrollToActiveSong: function(){
        setTimeout(() => {
            if(this.currentIndex < 3){
                $('.song.active').scrollIntoView({
                    behavior: 'auto',
                    block:'end'
                })
            }else{
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block:'center'
                })
            }
        }, 200)
    },
    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

        if($('.song.active')){
            $('.song.active').classList.remove("active")
        }

        const List = $$('.song')
        List.forEach((song) => {
            if(Number(song.getAttribute('data-index')) == this.currentIndex){
                song.classList.add("active")
            }
        });

        if(this.currentIndex == this.config.currentIndex){
            audio.currentTime = this.config.currentTime
        }else{
            audio.currentTime = 0
        }
        this.setConfig('currentIndex', this.currentIndex)
    },
    start: function(){
        // Gán cấu hình từ Config vào ứng  dụng
        this.loadConfig()

        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        // lấy ra bài hát đầu tiên
        this.loadCurrentSong()

        //Lắng nghe / xử lý các sự kiện (DOM element)
        this.handleEvents();

        //Render playlist
        this.render();

      
    } 
}
app.start()