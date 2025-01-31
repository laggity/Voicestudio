input.onSound(DetectedSound.Loud, function () {
    servos.P0.setAngle(180)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    servos.P0.setAngle(0)
})
datalogger.deleteLog()
servos.P0.setAngle(0)
