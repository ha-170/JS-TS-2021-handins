const DOS_Detector = require('./dosDetector')

const dosDetector = new DOS_Detector(1000)

const url = 'https://docs.google.com/document/d/16uX1YKzWGGz4tG112zlxp93oSTtH7SNiNvpXtdLW7nM/edit#'
dosDetector.addUrl(url)

setTimeout(() => {
    dosDetector.addUrl(url)
}, 500)
