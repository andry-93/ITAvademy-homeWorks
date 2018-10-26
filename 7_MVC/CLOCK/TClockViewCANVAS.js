class TClockViewCANVAS {
    constructor(root) {
        this.root = root;
        this.divOuter = null;
        this.divInner = null;
        this.canvas = null;
        this.clock = null;
        this.circle = null;
        this.text = null;
        this.hour = null;
        this.min = null;
        this.sec = null;
        this.start = null;
        this.stop = null;
        this.context = null;
        this.startedChangeHandler = null;
    }

    static r(el, h, min, sec, date) {
        el.fillStyle = 'orange';
        el.beginPath();
        el.arc(100,100,100,0,Math.PI*2);
        el.fill();

        for (let i = 1, deg = 30; i <= 12; i++, deg += 30) {
            el.fillStyle = 'green';
            el.beginPath();
            el.arc(100+80*Math.sin(deg * Math.PI/180),100-80*Math.cos(deg * Math.PI/180),15,0,Math.PI*2);
            el.fill();

            el.fillStyle = 'black';
            el.font = '16px Times';
            el.fillText(i,95+80*Math.sin(deg * Math.PI/180),105-80*Math.cos(deg * Math.PI/180))
        }

        el.strokeStyle = h.color;
        el.lineWidth = h.width;
        el.lineCap = 'round';
        el.beginPath();
        el.moveTo(100,100);
        el.lineTo(100+h.height*Math.sin((30*(date.getHours()%12) + date.getMinutes()/2) * Math.PI/180),100-h.height*Math.cos((30*(date.getHours()%12) + date.getMinutes()/2) * Math.PI/180));
        el.stroke();

        el.strokeStyle = min.color;
        el.lineWidth = min.width;
        el.lineCap = 'round';
        el.beginPath();
        el.moveTo(100,100);
        el.lineTo(100+min.height*Math.sin((6*date.getMinutes()) * Math.PI/180),100-min.height*Math.cos((6*date.getMinutes()) * Math.PI/180));
        el.stroke();

        el.strokeStyle = sec.color;
        el.lineWidth = sec.width;
        el.lineCap = 'round';
        el.beginPath();
        el.moveTo(100,100);
        el.lineTo(100+sec.height*Math.sin((6*date.getSeconds()) * Math.PI/180),100-sec.height*Math.cos((6*date.getSeconds()) * Math.PI/180));
        el.stroke();
    }

    render(model) {
        // представление создает dom элементы в первый раз
        if (!this.canvas) {
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
                e => this.startedChangeHandler(true));
            this.stop.addEventListener('click',
                e => this.startedChangeHandler(false));
            this.canvas = document.createElement('canvas');
            this.canvas.width = 200;
            this.canvas.height = 200;
            this.canvas.style.display = 'block';
            this.root.appendChild(this.divOuter);
            this.divOuter.appendChild(this.divInner);
            this.divInner.appendChild(this.stop);
            this.divInner.appendChild(this.start);
            this.divOuter.appendChild(this.canvas);
            this.context = this.canvas.getContext('2d');

            this.hour = {
                color: 'rgba(0,0,0,1)',
                width: 5,
                height: 50
            };
            this.min = {
                color: 'rgba(0,0,0,1)',
                width: 3,
                height: 90
            };
            this.sec = {
                color: 'rgba(255,85,85,1)',
                width: 1,
                height: 80
            };
        }
        // и обновляет время по данным из модели
        TClockViewCANVAS.r(this.context, this.hour, this.min, this.sec, model.date);
    }

    setChangeHandler(handler) {
        this.startedChangeHandler = handler;
    }
}