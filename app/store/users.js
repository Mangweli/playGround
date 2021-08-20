const state = () => ({
    data: []
})

const mutations = {
    storeData: (state, data) => {
        state.data = data;
    }
}

export { state, mutations };