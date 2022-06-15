input.onButtonPressed(Button.A, function () {
    Aspd += 10
})
input.onButtonPressed(Button.AB, function () {
    Aspd = 0
    Bspd = 0
})
input.onButtonPressed(Button.B, function () {
    Bspd += 10
})
let Bspd = 0
let Aspd = 0
Aspd = 0
Bspd = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Happy)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
let red1 = strip.range(0, 1)
let blue1 = strip.range(1, 1)
basic.forever(function () {
    blue1.showColor(neopixel.colors(NeoPixelColors.Red))
    red1.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    blue1.showColor(neopixel.colors(NeoPixelColors.Blue))
    red1.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
})
basic.forever(function () {
    RingbitCar.freestyle(Bspd, Aspd)
})
