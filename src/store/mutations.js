export default {
    // increment(state,){
    //     state.count = v
    //   }
    setValue(state, payload){
        debugger
        const { name, value } = payload;
        if(name){
            state[name] = value;
        }
    },
    setSelectedKey(state, value){
        state.selectedKey = value;
    }
}