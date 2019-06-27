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
        addquery (query) {
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