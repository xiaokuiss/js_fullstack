import { mapGetters, mapActions, mapMutations } from 'vuex';

export const searchMixin = {
    data () {
        return {
            query: '',
            refreshDelay: 120
        }
    },
    computed: {
        ...mapGetters([
            'searchHistory'
        ])
    },
    methods: {
        onQueryChange (query) {
            // console.log(query)
            this.query = query.trim()
        },
        blurInput () {
            this.$refs.searchBox.blur()  //父组件调用子组件方法用ref直接调用
        },
        addQuery (query) {
            this.$refs.searchBox.setQuery(query)
        },
        saveSearch (song) {
            console.log(song)
            this.selectPlaySong(song)
            this.savaSearchHistory(this.query)
            // this.$store.dispatch('savaSearchHistory', data)调用action里的方法 第一种
        },
        ...mapActions([
            'savaSearchHistory',
            'selectPlaySong'
        ])
    },
}

export const playerMixin = {
    computed: {
        ...mapGetters([
            'playList',
            'currentSong',
            'currentIndex',
            'favoriteList'
        ]),
        favoriteIcon () {
            return this.getFavoriteIcon(this.currentSong)
        }
    },
    methods: {
        toggleFavorite (song) {
            if (this.isFavorite(song)) {
                this.deleteFavoriteList(song)
            } else {
                this.saveFavoriteList(song)
            }
        },
        getFavoriteIcon (song) {
            if (this.isFavorite(song)) {
                return 'icon-favorite'
            }
            return 'icon-not-favorite'
        },
        isFavorite (song) {
            const index = this.favoriteList.findIndex((item) => {
                return item.id === song.id
            })
            return index > -1
        },
        ...mapMutations({
            setPlaylist: 'SET_PLAYLIST',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setPlaying: 'SET_PLAYING'
        }),
        ...mapActions([
            'saveFavoriteList'
        ])
    },
}