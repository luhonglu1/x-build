export const AJAXmock = (data, num = 0.5, successFlag = true) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (successFlag) {
        resolve(data)
      }
      if (Math.random() > num) {
        resolve(data)
      } else {
        resolve({
          success: false,
        })
      }
    }, 1000)
  })
}
