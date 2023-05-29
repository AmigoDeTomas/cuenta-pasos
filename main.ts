input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(steps)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0.76 * steps)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    steps = 0
    basic.showNumber(steps)
})
let steps = 0
basic.clearScreen()
steps = 0
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1600) {
        steps += 2
        basic.showNumber(steps)
    }
    if (input.acceleration(Dimension.Y) > 1600) {
        steps += 0
        basic.showNumber(steps)
    }
    if (input.acceleration(Dimension.Z) > 1600) {
        steps += 0
        basic.showNumber(steps)
    }
})
