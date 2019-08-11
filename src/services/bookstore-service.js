export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'JavaScript Design Patterns',
                author: 'Addy Osmani'  
            },
            {
                id: 2,
                title: 'JavaScript: The Good Parts',
                author: 'Douglas Crockford'
            }
        ];
    }
}