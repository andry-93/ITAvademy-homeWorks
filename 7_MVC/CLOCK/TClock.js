class TClock {
    constructor(timezone) {
        this.timezone = timezone; // TODO: добавить зоны
        this.changeListener = null;
        // модель предоставляет поле date для чтения извне
        this.date = new Date();
        // модель обновляет себя
        setInterval(() => {
            this.date = new Date();
            if (this.changeListenerCallback) {
                // и нотифицирует слушателя путем вызова
                // его функции обратного вызова
                this.changeListenerCallback();
            }
        }, 1000);
    }

    setChangeListener(changeListener) {
        this.changeListenerCallback = changeListener;
    }
}