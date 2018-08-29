export default class ColorMaterial {
    constructor(color, opacity) {
        // Uses hex instead of rgb is for keeping the syntax similar to .as version
        this.colorString = null;
        this.setColor( color ? color : 0xff0000 );
        this.setOpacity( opacity ? opacity : 1 );
    }

    setColor(color) {
        this.color = color;
        this.updateColorString();
    }

    setOpacity(opacity) {
        this.opacity = opacity;
        this.updateColorString();
    }

    updateColorString() {
        this.colorString = 'rgba(' + (this.color >> 16 & 0xff) + ',' + (this.color >> 8 & 0xff) + ',' + (this.color & 0xff) + ',' + this.opacity + ')';
    }
}
