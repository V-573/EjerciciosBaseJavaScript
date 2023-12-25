let bookCar = [];
const ADD_ACTION = 'addToCar'
const REMOVE_ACTION = 'removeToCar'
const VIEW_ACTION = 'viewCar'


function viewCar() {
    console.log("Current car of books ", bookCar )  


}
function performCarAction(action, newBook) {
    switch (action) {
        case ADD_ACTION:
            bookCar.push(newBook);
            break;
        case REMOVE_ACTION:
            if (bookCar === 0) {
                console.log("not element")
            } else {
                const removeBook = bookCar.pop(newBook);
                console.log(`El libro eliminado fue: ${removeBook} ` )
            }
            break;
        case VIEW_ACTION:
            viewCar();
            break;
    
        default:
           console.log("choose an valid option")
    }




}