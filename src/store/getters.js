export default {
    selectedItem(state) {
        //   解构语法-相当于state.selectedKey
        const { selectedKey, leftMenuData } = state;
        let result = null;
        // 将拿到的key值与leftMenuData做对比，去leftMenuData里拿对应的值
        for (let index = 0; index < leftMenuData.length; index++) {
            const item = leftMenuData[index];
            if (item.value === selectedKey) {
                // 符合条件，就将整个对象赋值，方便后期取值
                result = item
            } else {      
                for (let index = 0; index < item.children.length; index++) {
                    const child = item.children[index];
                    if (child.value === selectedKey) {
                        result = item;
                    }
                }
            }
        }
        console.log('yyyyy111---', result)
        return result;
    },
    //   aaaa(){return '1'}
    selectedDataSource(state) {
        const { selectedKey, leftMenuData } = state;
        // let result = null;  等于null和等于[]有区别吗
        let result = [ ];
        for (let index = 0; index < leftMenuData.length; index++) {
            const item = leftMenuData[index];
            if (item.value === selectedKey) {
                result = item.children;
                break
                // 将数组转换对对象
               /*  item.children.reduce((acc,value) =>{
                    return result = {...acc,...value}
                }) */

            } else {
                for (let index = 0; index < item.children.length; index++) {
                    const child = item.children[index];
                    if (child.value === selectedKey) {
                        result = [item.children[index]];
                        break
                    }
                }
            }
        }
        console.log('yyyyy222---', result)
        return result;
    }
}