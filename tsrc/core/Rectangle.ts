export default class Rectangle {
    x1: number;
    x2: number;
    y1: number;
    y2: number;

    width: number;
    height: number;
    isEmpty: boolean;

    constructor(x1?: number, y1?: number, x2?: number, y2?: number) {
        
        this.x1 = x1 ? x1 : 0;
        this.y1 = y1 ? y1 : 0;
        this.x2 = x2 ? x2 : 0;
        this.y2 = y2 ? y2 : 0;

        this.width = this.x2 - this.x1;
        this.height = this.y2 - this.x2;

        this.isEmpty = false;

    }

    set(x1: number, y1: number, x2: number, y2: number) {
        this.isEmpty = false;

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        this.resize();
    }

    resize() {
        this.width = this.x2 - this.x1;
        this.height = this.y2 - this.y1;
    }

    getX(): number {
        return this.x1 ? this.x1 : 0;
    }

    getX1(): number {
        return this.x1 ? this.x1 : 0;
    }

    getX2(): number {
        return this.x2 ? this.x2 : 0;
    }

    getY(): number {
        return this.y1 ? this.y1 : 0;
    }

    getY1(): number {
        return this.y1 ? this.y1 : 0;
    }

    getY2(): number {
        return this.y2 ? this.y2 : 0;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    addPoint(x: number, y: number) {
        if(this.isEmpty) {
            this.isEmpty = false;
            this.x1= x;
            this.y1 = y;
            this.x2 = x;
            this.y2 = y;
        } else {
            this.x1 = Math.min(this.x1, x);
            this.y1 = Math.min(this.y1, y);
            this.x2 = Math.max(this.x2, x);
            this.y2 = Math.max(this.y2, y);
        }
        this.resize();
    }

    addRectangle(r: Rectangle) {
        if(this.isEmpty) {
            this.isEmpty = false;
            this.x1 = r.getX1();
            this.x2 = r.getX2();

            this.y1 = r.getY1();
            this.y2 = r.getY2();
        } else {
            this.x1 = Math.min(this.x1, r.getX1());
            this.y1 = Math.min(this.y1, r.getY1());
            this.x2 = Math.max(this.x2, r.getX2());
            this.y2 = Math.max(this.y2, r.getY2());
        }
        
        this.resize();
    }

    containsPoint(x: number, y: number): boolean {
        return x > this.x1 && x < this.x2 && y > this.y1 && y < this.y2;
    }

    // 是否相交
    instersects(r: Rectangle): boolean {
        return Math.min(this.x2, r.getX2()) - Math.max(this.x1, r.getX1()) > 0 && 
        Math.min(this.y2, r.getY2()) - Math.max(this.y1, r.getY1()) > 0
    }

    empty() {
        this.isEmpty = true;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
    }

    inflate(v: number) {
        this.x1 -= v;
        this.y1 -= v;

        this.x2 += v;
        this.y2 += v;

        this.resize();
    }

    minSelf(r: Rectangle) {
        this.x1 = Math.max(this.x1, r.getX1());
        this.y1 = Math.max(this.y1, r.getY1());
        this.x2 = Math.min(this.x2, r.getX2());
        this.x1 = Math.min(this.y2, r.getY2());

        this.resize();
    }

    toString() {
        return "Rectangle (x1: " + this.x1 + ", y1: " + this.y2 + ", x2: " + this.x2 + ", y1: " + this.y1 + ", width: " + this.width + ", height: " + this.height + ")";
    }

}