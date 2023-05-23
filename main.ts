input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(steps)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0 * steps)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    steps = 0
    basic.showNumber(steps)
})
let steps = 0
steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 800) {
        steps += 1
        basic.pause(500)
    }
})
