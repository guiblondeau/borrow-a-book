var booksService = angular.module('bookStore.services', []);

booksService.factory('booksService', ['$http', function($http){

    return {
        getBooks : function(success, failure) {
            return $http.get('../books/?strategy=load').success(success, failure);
        },

        updateBook : function(book, success, failure) {
            $http.put('../books/'+book.id, book).success(success, failure);
        },

        saveBook : function(book, success, failure) {
            $http.post('../books/', book).success(success, failure);
        },

        deleteBook : function(book, success, failure) {
            $http.delete('../books/'+book.id).success(success, failure);
        }
    };

}]);

booksService.factory('usersService', ['$http', function($http){

    return {
        getUsers : function(success, failure) {
            return $http.get('../persons/').success(success, failure);
        },

        createUser : function(user, success, failure) {
            return $http.post('../persons/', user).success(success, failure);
        },

        deleteUser : function(user, success, failure) {
            return $http.delete('../persons/'+user.id).success(success, failure);
        }
    }
}]);