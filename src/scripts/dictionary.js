const routeRect = 'routeRect'
const routePoly = 'routePoly'
const townRect = 'townRect'
const townPoly = 'townPoly'
const lakeRect = 'lakeRect'
const miscRect = 'miscRect'

const DICTIONARY = {
  twinLeafTown: {name: "Twin Leaf Town", method: townRect, bounds: [[64, 140], [105, 170]]},
  sandGemTown: {name: "Sand Gem Town", method: townRect, bounds: [[103, 198], [136, 248]]},
  jubilifeCity: {name: "Jubilife City", method: townRect, bounds: [[160, 179], [230, 254]]},
  floaromaTown: {name: "Floaroma Town", method: townRect, bounds: [[286, 226], [320, 256]]},
  eternaCity: {name: "Eterna City", method: townPoly, bounds: [[365, 355], 
                                                                [365, 375],
                                                                [373, 375],
                                                                [373, 389],
                                                                [391, 389],
                                                                [391, 412],
                                                                [437, 412],
                                                                [437, 362],
                                                                [416, 360],
                                                                [416, 355]]},
  oreburghCity: {name: "Oreburgh City", method: townPoly, bounds: [[162, 351], 
                                                                    [162, 386],
                                                                    [241, 386],
                                                                    [241, 351],
                                                                    [230, 351],
                                                                    [230, 316],
                                                                    [197, 316],
                                                                    [197, 351]]},

  route201: {name: "Route 201", method: routeRect, bounds: [[106, 131], [126, 197]]},
  route202: {name: "Route 202", method: routeRect, bounds: [[137, 215], [159, 235]]},
  route204: {name: "Route 204", method: routePoly, bounds: [[231, 220], 
                                                            [231, 245],
                                                            [252, 245],
                                                            [252, 252],
                                                            [285, 252],
                                                            [285, 232],
                                                            [257, 232],
                                                            [257, 220]
                                                            ]},
  route205a: {name: "Route 205", method: routePoly, bounds: [[292, 257],
                                                              [292, 312],
                                                              [307, 312],
                                                              [307, 291],
                                                              [374, 291],
                                                              [374, 295],
                                                              [390, 295],
                                                              [390, 285],
                                                              [374, 285],
                                                              [374, 274],
                                                              [370, 274],
                                                              [370, 252],
                                                              [358, 252],
                                                              [358, 276],
                                                              [307, 276],
                                                              [307, 257]]},
  route205b: {name: "Route 205", method: routeRect, bounds: [[399, 323], [416, 354]]},
  route206: {name: "Route 206", method: routeRect, bounds: [[242, 355], [364, 375]]},
  route218: {name: "Route 218", method: routeRect, bounds: [[197, 255], [216, 291]]},
  
  fuegoIronworks: {name: "Fuego Ironworks", method: miscRect, bounds: [[358, 222], [384, 251]]},
  vallyWindworks: {name: "Valley Windworks", method: miscRect, bounds: [[292, 313], [325, 329]]},
  eternaForest: {name: "Eterna Forest", method: miscRect, bounds: [[391, 265], [443, 322]]},
  oreburghGate: {name: "Oreburgh Gate", method: miscRect, bounds: [[201, 292], [220, 315]]},

  lakeVarity: {name: "Lake Varity", method: lakeRect, bounds: [[127, 86], [166, 136]]},
}

export { DICTIONARY };

