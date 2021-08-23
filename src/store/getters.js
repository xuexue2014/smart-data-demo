export default {
  selectedItem(state){
    //   解构语法
    const { selectedKey, leftMenuData } = state;  
    let result = null;
    for (let index = 0; index < leftMenuData.length; index++) {
        const item = leftMenuData[index];
        if(item.value === selectedKey){
            result = item
        }else{
            for (let index = 0; index < item.children.length; index++) {
                const child = item.children[index];
                if(child.value === selectedKey){
                    result = item;
                }
            }
        }
    }
    console.log('yyyyy---', result)
    return result;
  },
  aaaa(){return '1'}
}