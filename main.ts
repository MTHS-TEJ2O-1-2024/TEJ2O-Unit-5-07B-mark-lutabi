/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: mark lutabi
 * Created on: October, 2024
 * This program rotates the srvo motor from 30 degrees to 180 degrees
*/
// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 30)
    basic.clearScreen()
    basic.showString('30')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 145)
    basic.clearScreen()
    basic.showString('145')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
