export const buyItem = (id) =>{
  console.log(id);
    return{
        type: 'BUY_ITEM', payload: id
    }
}