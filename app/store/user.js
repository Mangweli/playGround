export const state = () => ({
    id: '',
    name: '',
    email: '',
    password: ''
})

export const mutatations = (state, data) => ({
    storeID: (state, data) => { state.id = data },
    storeName: (state, data) => { state.name = data},
    storeEmail: (state, data) => { state.email = data },
    storePassword: () => { state.password = data}
})