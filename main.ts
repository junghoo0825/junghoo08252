pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
