// import state from "./state";

export default {
    setValue(state, payload){
//   把当前点击的元素的value值赋值给selectedkey
        // debugger
        const { name, value } = payload;
        if(name){
            state[name] = value;
        }
        // 为什么不直接写成下面这?????
        // state.setSelectedKey = value 

    },
    setSelectedKey(state, value){
        state.selectedKey = value;
    },
    setSelectedOptions(state, v){
        state.selectedOptions = v;
    }
}