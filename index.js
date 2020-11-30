class Mobile {
    constructor(battery, draf, inbox, sent) {
        this._battery = battery;
        this._draf = draf;
        this._inbox = inbox;
        this._sent = sent;
        this._status = true;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    get draft() {
        return this._draf;
    }

    set draft(value) {
        this._draf = value;
    }

    get inbox() {
        return this._inbox;
    }

    set inbox(value) {
        this._inbox = value;
    }

    get sent() {
        return this._sent;
    }

    set sent(value) {
        this._sent = value;
    }


    writeMessage(mess) {
        if (this._status) {
            this._draft = mess;
            this._battery--;
        }
        return;
    }

    receive(mobile) {
        if (this._status) {
            //them vao ds hop thu den thu nháp cua tham so mobile
            this._inbox.push(mobile._draft)
            //them vao ds hop thu gui thu nháp cua tham so mobile
            mobile._sent.push(mobile._draft);
            //lam trống thu nháp
            mobile._draft = ''
            //giam pin
            this._battery--;
        }
        return;


    }

    send(mobile) {
        if (this._status) {
            // them vao ds hop thu den cua tham so mobile thu nháp cua dt hien tai
            mobile._inbox.push(this._draft)
            //them vao ds thu da gui cua dt hien tai thu nháp
            this._sent.push(this._draft)
            //lam trống thư nháp
            this._draft = ""
            //giam pin
            this._battery--
        }
        return;


    }
    showInbox() {
        //pin giam khi hien thi mess
        if (this._status) {
            this._battery--;
            return this._inbox
        }
        return;
    }

    showSent() {
        //pin giam khi da gui tin
        if (this._status) {
            this._battery--;
            return this._sent;
        }
        return;

    }
    turnOnOff(check) {
        //trang thai bat,tat
        this._status = check;
        // giam pin
        this._battery--;
    }

    chargeBattery() {
        //set pin 100%
        this._battery = 100;
    }

    checkBattery() {
        // kiem tra pin
        if (this._status) {
            this._battery--;
            return this._battery;
        }
        return;
    }
}


let dtTrung = new Mobile(100, "", [], [])
let dtThinh = new Mobile(100, "", [], [])
let dtDat = new Mobile(100, "", [], [])