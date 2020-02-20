class Utils {
    constructor() {
        this.statusCode = null;
        this.type = null;
        this.data = null;
        this.message = null;
    }

    setSuccess(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.type = 'success';
    }

    setError(statusCode, message) {
        console.log('message =',message)
        this.statusCode = statusCode;
        this.message = message;
        this.type = 'error';
    }

    send(res) {
        const result = {
            status: this.type,
            message: this.message,
            data: this.data,
        };

        if (this.type === 'success') {
            return res.status(this.statusCode).json(result);
        }
        console.log('msg =', this.message)
        return res.status(this.statusCode).json({
            status: this.type,
            message:String(this.message) ,
        });
    }
}

module.exports = Utils;