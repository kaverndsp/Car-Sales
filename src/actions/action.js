export const buyItem = (id) =>{
  console.log(id);
    return{
        type: 'BUY_ITEM', payload: id
    }
}

export const removeFeature = (id) => {
    console.log("remove feature props", id);
    return{
        type: 'REMOVE_ITEM', payload: id
    }
}