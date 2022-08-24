

document.addEventListener('alpine:init', () => {
    Alpine.data('enoughAirtimeWidget', function() {
        return {
            usage: '',
            amount: 0,
            msg: '',
            showMsg: false,
            test() {
               this.msg = enoughAirtime(this.usage, this.amount);

            }
        }
    });
});