let speed = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # # . # #
        # . . . #
        `)
    servos.P1.run(100)
    basic.pause(100)
    servos.P1.setPulse(2500)
    basic.pause(100)
    servos.P1.setRange(0, 360)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    servos.P1.setAngle(0)
    basic.pause(100)
    servos.P1.setAngle(180)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    speed = 1
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    servos.P1.setAngle(0)
    basic.pause(100)
    for (let index = 0; index < 89; index++) {
        speed += speed + 2
        basic.pause(100)
        servos.P1.setAngle(speed)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    servos.P1.run(10)
    basic.pause(100)
    servos.P1.setPulse(1000)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    servos.P1.setAngle(180)
    basic.pause(100)
    servos.P1.setAngle(0)
    basic.pause(100)
})
