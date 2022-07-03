const reducer = (cards = [], action) => {
    switch(action.type) {
        case 'CREATE':
            return cards;
        default:
            return cards;
    }   
}