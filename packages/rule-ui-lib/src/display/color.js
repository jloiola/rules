// luminanace = (r, g, b) ->
//   a = [r,g,b].map (v) ->
//     v /= 255
//     value = if v <= 0.03928 then v / 12.92 else ((v + 0.055) / 1.055)
//     Math.pow(value,  2.4)
//   a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722

// exports.contrast = (rgb1, rgb2) ->
//   lum1 = luminanace(rgb1[0], rgb1[1], rgb1[2])
//   lum2 = luminanace(rgb2[0], rgb2[1], rgb2[2])
//   brightest = Math.max(lum1, lum2)
//   darkest = Math.min(lum1, lum2)
//   (brightest + 0.05) / (darkest + 0.05)

//   badgeFontColor(color) {
//     colorParts = [
//       parseInt(color.slice(1,3), 16),
//       parseInt(color.slice(3,5), 16),
//       parseInt(color.slice(5,7), 16),
//     ]

//     white = [255,255,255]
//     gray = [119,119,119]

//     g = contrast colorParts, gray
//     w = contrast colorParts, white

//     if g > w then '#777777' else '#ffffff'
// }
