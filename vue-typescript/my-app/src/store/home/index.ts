import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie';
const getters = {

}

const state: State = {
    movieList: [
        {
          name: "霸王龙",
          title: "排名第一的华语电影",
          id: "123456"
        }
    ]
}
const mutations = {};
const actions = {
    // 跟api的交流 前后端的分离点
    // commit mutations
    async movieList(context: {commit: Commit}, cate: string) {
        const res = await getMovieList(cate)
        .then((response) => response)
        return res;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}