const registerPropertySupport = "CSS" in window

if (registerPropertySupport) {
  window.CSS.registerProperty({
    name: "--hello-world-icon",
    syntax: "<length>",
    inherits: true,
    initialValue: "32px",
  })
}

export default registerPropertySupport
