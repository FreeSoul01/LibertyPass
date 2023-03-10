import QRCode from 'qrcode'
const canvas = document.getElementById('qrcode')

QRCode.toCanvas(canvas, 'https://example.com', function (error) {
  if (error) console.error(error)
  console.log('QRcode successfully generated ')
})
