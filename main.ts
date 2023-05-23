input.onButtonPressed(Button.A, function () {
    selection = 0
})
input.onButtonPressed(Button.AB, function () {
    selection = 2
})
input.onButtonPressed(Button.B, function () {
    selection = 1
})
let distance = 0
let selection = 0
selection = 4
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (selection == 0) {
        Tinybit.RGB_Car_Big2(0, 0, 0)
        basic.showArrow(ArrowNames.South)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
        basic.pause(1000)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        basic.clearScreen()
        selection = 4
    } else if (selection == 1) {
        Tinybit.RGB_Car_Big2(0, 0, 0)
        basic.showArrow(ArrowNames.North)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
        basic.pause(1000)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        basic.clearScreen()
        selection = 4
    } else if (selection == 2) {
        basic.showIcon(IconNames.Diamond)
        distance = Tinybit.Ultrasonic_Car()
        if (distance < 0) {
            Tinybit.RGB_Car_Big2(255, 0, 0)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
            basic.pause(100)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 100)
            basic.pause(100)
        } else if (distance > 15) {
            Tinybit.RGB_Car_Big2(0, 255, 0)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
        }
    }
})
