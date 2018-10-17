class TClockViewDOM {
    constructor(root) {
        this.root = root;
        this.divOuter = null;
        this.divInner = null;
        this.clock = null;
        this.circle = null;
        this.hour = null;
        this.min = null;
        this.sec = null;
        this.checkbox = null;
        this.start = null;
        this.stop = null;
        this.stopEvent = false;
        this.checkedChangeHandler = null;
    }

    static r(el, deg) {
        //el.setAttribute('transform', 'rotate('+ deg +' 100 100)')

        el.style.transformOrigin = 'bottom right';
        el.style.transform = 'rotate('+ deg +'deg) translateY(1px)';
    }

    render(model) {
        // представление создает dom элементы в первый раз
        if (!this.clock) {
            this.divOuter = document.createElement('div');
            this.divInner = document.createElement('div');
            this.divOuter.style.display = 'inline-block';
            this.divInner.style.display = 'inline-block';
            this.start = document.createElement('input');
            this.stop = document.createElement('input');
            this.start.type = this.stop.type = 'button';
            this.start.value = 'старт';
            this.stop.value = 'стоп';
            this.start.addEventListener('click',
                e => this.stopEvent = false);
            this.stop.addEventListener('click',
                e => this.stopEvent = true);
            this.checkbox = document.createElement('input');
            this.checkbox.type = 'checkbox';
            this.checkbox.checked = true;
            this.checkbox.addEventListener('change',
                e => this.checkedChangeHandler(e.target.checked));
            this.clock = document.createElement('div');
            this.clock.style.width = '200px';
            this.clock.style.height = '200px';
            this.clock.style.backgroundColor = 'orange';
            this.clock.style.borderRadius = '50%';
            this.clock.style.position = 'relative';
            this.root.appendChild(this.divOuter);
            this.divOuter.appendChild(this.divInner);
            this.divInner.appendChild(this.stop);
            this.divInner.appendChild(this.start);
            this.divInner.appendChild(this.checkbox);
            this.divOuter.appendChild(this.clock);
            for (let i = 1, deg = 30; i <= 12; i++, deg += 30) {
                this.circle = document.createElement('div');
                this.circle.textContent = i;
                this.circle.style.textAlign = 'center';
                this.circle.style.lineHeight = '30px';
                this.circle.style.position = 'absolute';
                this.circle.style.left = (100+80*Math.sin(deg * Math.PI/180)-30/2) +  'px';
                this.circle.style.top = (100-80*Math.cos(deg * Math.PI/180)-30/2) +  'px';
                this.circle.style.width = '30px';
                this.circle.style.height = '30px';
                this.circle.style.backgroundColor = 'green';
                this.circle.style.borderRadius = '50%';
                this.clock.appendChild(this.circle);
            }
            this.hour = document.createElement('div');
            this.hour.style.position = 'absolute';
            this.hour.style.width = '5px';
            this.hour.style.height = '50px';
            this.hour.style.borderRadius = '2.5px';
            this.hour.style.backgroundColor = '#333';
            this.hour.style.left = 97.5 +  'px';
            this.hour.style.top = 50 +  'px';
            this.min = document.createElement('div');
            this.min.style.position = 'absolute';
            this.min.style.width = '3px';
            this.min.style.height = '90px';
            this.min.style.borderRadius = '2px';
            this.min.style.backgroundColor = '#333';
            this.min.style.left = 98.5 +  'px';
            this.min.style.top = 10 +  'px';
            this.sec = document.createElement('div');
            this.sec.style.position = 'absolute';
            this.sec.style.width = '1px';
            this.sec.style.height = '80px';
            this.sec.style.backgroundColor = '#f55';
            this.sec.style.left = 99.5 +  'px';
            this.sec.style.top = 20 +  'px';
            this.clock.appendChild(this.hour);
            this.clock.appendChild(this.min);
            this.clock.appendChild(this.sec);
        }
        // и обновляет время по данным из модели
        TClockViewDOM.r(this.sec, 6*model.date.getSeconds());
        TClockViewDOM.r(this.min, 6*model.date.getMinutes());
        TClockViewDOM.r(this.hour, 30*(model.date.getHours()%12) + model.date.getMinutes()/2);
    }

    setChangeHandler(handler) {
        this.checkedChangeHandler = handler;
    }
}