function timerTwoSeconds() {
  setInterval(
    () => console.log(new Date().toLocaleTimeString()),
    2000
  )
}

timerTwoSeconds()