'use strict';

class ServerStorage {
    constructor() {
        this.ajaxHandlerScript="http://fe.it-academy.by/AjaxStringStorage2.php";
        this.stringName='DRINK_STORAGE';
        this.messages = {};
    }

    getAllServerStorage() {
        $.ajax( {
                url : this.ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'READ', n : this.stringName },
                cache : false,
                success : (a) => {console.log('Сохраненное на сервере:'); console.log(a)},
                error : this.errorHandler
            }
        );
    }

    getServerStorage(name) {
        $.ajax( {
                url : this.ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'READ', n : this.stringName },
                cache : false,
                success : (a) => this.readReady(a, name),
                error : this.errorHandler
            }
        );
    }

    readReady(callresult,name) { // сообщения получены - показывает
        if ( callresult.error != undefined )
            alert(callresult.error);
        else {
            if ( callresult.result != "" ) { // либо строка пустая - сообщений нет
                // либо в строке - JSON-представление массива сообщений
                this.messages = JSON.parse(callresult.result);
            }
            if (name in this.messages) {
                console.log('Сохраненное на сервере:');
                console.log(this.messages[name]);
            } else {
                console.log('Такого напитка нет');
            }
        }
    }

    sendMessage(name, alc, recipe) {
        this.updatePassword = Math.random();
        $.ajax(
            {
                url : this.ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'LOCKGET', n : this.stringName,
                    p : this.updatePassword },
                cache : false,
                success : (a) => this.lockGetReady(a, (name, alc, recipe) => {
                    this.messages[name] = {"Алкогольный": alc, "Рецепт приготовления": recipe};
                }, name, alc, recipe ),
                error : this.errorHandler
            }
        );
    }

    deleteLockget(name) {
        this.updatePassword = Math.random();
        $.ajax(
            {
                url : this.ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'LOCKGET', n : this.stringName,
                    p : this.updatePassword },
                cache : false,
                success : (a) => this.lockGetReady(a, (name) => {
                    if (name in this.messages) {
                        delete this.messages[name];
                    } else {
                        console.log('Такого напитка нет');
                    };
                }, name),
                error : this.errorHandler
            }
        );
    }

    lockGetReady(callresult, func, name, alc, recipe) {
        if ( callresult.error != undefined )
            alert(callresult.error);
        else {
            if ( callresult.result != "" ) // либо строка пустая - сообщений нет
            {
                // либо в строке - JSON-представление массива сообщений
                this.messages = JSON.parse(callresult.result);
            }
            func(name, alc, recipe);
            $.ajax( {
                    url : this.ajaxHandlerScript,
                    type : 'POST', dataType:'json',
                    data : { f : 'UPDATE', n : this.stringName,
                        v : JSON.stringify(this.messages), p : this.updatePassword },
                    cache : false,
                    success : this.updateReady,
                    error : this.errorHandler
                }
            );
        }
    }

    lockGetNewDrink(callresult, name, alc, recipe) {
        this.messages[name] = {"Алкогольный": alc, "Рецепт приготовления": recipe};
        this.lockGetReady(callresult/*, ((name, alc, recipe) => {
        } )(name, alc, recipe)*/);
    }

    deleteDrink(callresult, name) {
        if (name in callresult) {
            delete callresult[name];
        } else {
            alert('Такого напитка нет');
        }
        /*this.lockGetReady(callresult, ((callresult, name) => {
        }) (callresult, name));*/
    }

    updateReady(callresult) {
        if ( callresult.error != undefined )
            alert(callresult.error);
    }

    errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }
}