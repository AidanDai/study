function safeHtml() {
  console.log(arguments)
}

var name = 'Aidan'
safeHtml `<p>sdfssf${name}sdf${name}sfsf</p>`