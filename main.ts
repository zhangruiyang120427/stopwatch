input.onButtonPressed(Button.A, function () {
    basic.showString("" + (h))
    basic.clearScreen()
    basic.showString("h")
    basic.clearScreen()
    basic.showString("" + (min))
    basic.clearScreen()
    basic.showString("m")
    basic.clearScreen()
    basic.showString("" + (s))
    basic.clearScreen()
    basic.showString("s")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    h = 0
    min = 0
    s = 0
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (h))
    basic.clearScreen()
    basic.showString("h")
    basic.clearScreen()
    basic.showString("" + (min))
    basic.clearScreen()
    basic.showString("m")
    basic.clearScreen()
    basic.showString("" + (s))
    basic.clearScreen()
    basic.showString("s")
    basic.clearScreen()
})
let s = 0
let min = 0
let h = 0
h = 0
min = 0
s = 0
basic.forever(function () {
    for (let index = 0; index < 60; index++) {
        for (let index = 0; index < 60; index++) {
            basic.pause(1000)
            s += 1
        }
        s = 0
        min += 1
    }
    min = 0
    h += 1
})
