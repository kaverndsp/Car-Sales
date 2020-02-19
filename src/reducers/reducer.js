export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state = initialState, action) => {
   switch(action.type){
    case "BUY_ITEM":
        const newItem = {
            name: action.payload.name,
            price: action.payload.price
        }
        console.log("this is a new item", newItem);
        return {
            ...state,
            car: { ...state.car, features: [...state.car.features, newItem], price: state.car.price + action.payload.price  }
          }
          
    case "REMOVE_ITEM":
          
       return{
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(car => car.id !== action.payload.id),
          price: state.car.price - action.payload.prices
        }
      
          
       }
    default:
           return state;
   }
}