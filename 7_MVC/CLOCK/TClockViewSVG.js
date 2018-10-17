class TClockViewSVG {
    constructor(root) {
        this.root = root;
        this.divOuter = null;
        this.divInner = null;
        this.svg = null;
        this.clock = null;
        this.circle = null;
        this.text = null;
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
        el.setAttribute('transform', 'rotate('+ deg +' 100 100)')
    }

    render(model) {
        // представление создает dom элементы в первый раз
        if (!this.svg) {
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
            this.svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
            this.svg.style.display = 'block';
            this.clock = document.createElementNS('http://www.w3.org/2000/svg','circle');
            this.clock.setAttribute('cx', '100');
            this.clock.setAttribute('cy', '100');
            this.clock.setAttribute('r', '100');
            this.clock.setAttribute('fill', 'orange');
            this.svg.setAttribute('width', '200');
            this.svg.setAttribute('height', '200');
            this.root.appendChild(this.divOuter);
            this.divOuter.appendChild(this.divInner);
            this.divInner.appendChild(this.stop);
            this.divInner.appendChild(this.start);
            this.divInner.appendChild(this.checkbox);
            this.divOuter.appendChild(this.svg);
            this.svg.appendChild(this.clock);
            for (let i = 1, deg = 30; i <= 12; i++, deg += 30) {
                this.circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
                this.text = document.createElementNS('http://www.w3.org/2000/svg','text');
                this.text.textContent = i;
                this.text.setAttribute("x",(95+80*Math.sin(deg * Math.PI/180)) +  'px');
                this.text.setAttribute("y",(105-80*Math.cos(deg * Math.PI/180)) +  'px');
                this.circle.setAttribute("cx","100");
                this.circle.setAttribute("cy","100");
                this.circle.setAttribute("r","15");
                this.circle.setAttribute("fill","green");
                this.circle.style.transformOrigin = "50% 50%";
                this.circle.style.transform = "rotate("+deg+"deg) translate(0, -80px)";
                this.svg.appendChild(this.circle);
                this.svg.appendChild(this.text);
            }
            this.hour = document.createElementNS('http://www.w3.org/2000/svg','rect');
            this.hour.setAttribute('x', '98.5');
            this.hour.setAttribute('y', '52.5');
            this.hour.setAttribute('width', '5');
            this.hour.setAttribute('height', '50');
            this.hour.setAttribute('rx', '2.5');
            this.hour.setAttribute('ry', '2.55');
            this.hour.style.fill = '#333';
            this.hour.style.strokeWidth = '1px';
            this.min = document.createElementNS('http://www.w3.org/2000/svg','rect');
            this.min.setAttribute('x', '98');
            this.min.setAttribute('y', '12.5');
            this.min.setAttribute('width', '3');
            this.min.setAttribute('height', '90');
            this.min.setAttribute('rx', '2');
            this.min.setAttribute('ry', '2');
            this.min.style.fill = '#333';
            this.min.style.strokeWidth = '1px';
            this.sec = document.createElementNS('http://www.w3.org/2000/svg','line');
            this.sec.setAttribute('x1', '100');
            this.sec.setAttribute('y1', '100');
            this.sec.setAttribute('x2', '100');
            this.sec.setAttribute('y2', '20');
            this.sec.style.fill = '#333';
            this.sec.style.strokeWidth = '1px';
            this.sec.style.stroke = '#f55';
            this.svg.appendChild(this.hour);
            this.svg.appendChild(this.min);
            this.svg.appendChild(this.sec);
        }
        // и обновляет время по данным из модели
        TClockViewSVG.r(this.sec, 6*model.date.getSeconds());
        TClockViewSVG.r(this.min, 6*model.date.getMinutes());
        TClockViewSVG.r(this.hour, 30*(model.date.getHours()%12) + model.date.getMinutes()/2);
    }

    setChangeHandler(handler) {
        this.checkedChangeHandler = handler;
    }
}