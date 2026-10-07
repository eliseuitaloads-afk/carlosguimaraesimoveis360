(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.Container_04703DA4_0BC0_469B_418C_E99C811468A2",
  "this.Container_193B3BA1_0BC0_4332_4192_EE1E9A16C507"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "definitions": [{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "label": "IMG_20261001_104805_00_028",
 "hfovMin": "150%",
 "id": "panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37",
 "overlays": [
  "this.overlay_22717AD9_0C40_C68E_4193_2FDC15409DD8",
  "this.overlay_22996DB7_0C40_C281_41A6_E2465FDA2212",
  "this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -155.92,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.72,
   "panorama": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_100449_00_004",
 "hfovMin": "150%",
 "id": "panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF",
 "overlays": [
  "this.overlay_12847D2F_0C41_C3B3_416A_BE1A571BB499",
  "this.overlay_07438EE0_1349_3516_419F_CC371E4AD3A0",
  "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 0.84,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.91,
   "panorama": "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_100937_00_013",
 "hfovMin": "150%",
 "id": "panorama_01B8745A_0BC3_C618_4162_33FFC5315781",
 "overlays": [
  "this.overlay_2D2BA893_0C40_C297_4188_ECFF15BF2173",
  "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A47A98_0BC3_C218_41A1_D322C71C584E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 141.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_192CF803_179B_8E11_4194_8882F2926F36",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101136_00_017",
 "hfovMin": "150%",
 "id": "panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9",
 "overlays": [
  "this.overlay_2A11BE0E_0C40_418A_41A2_71B0F1A19385",
  "this.panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_104702_00_026",
 "hfovMin": "150%",
 "id": "panorama_01BD2F59_0BC0_C265_4193_8578340ED591",
 "overlays": [
  "this.overlay_247BAA48_0C40_418C_41A3_F0E253C3EFAC",
  "this.overlay_23894ED2_0C40_3E9D_4192_DBF2BAEF9044",
  "this.overlay_25CF7C23_0C41_C183_419F_91506F0FD65E",
  "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 29.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -13.35,
   "panorama": "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D",
   "distance": 1
  },
  {
   "yaw": -159.44,
   "class": "AdjacentPanorama",
   "backwardYaw": 146.17,
   "panorama": "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C",
   "distance": 1
  },
  {
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_100618_00_007",
 "hfovMin": "150%",
 "id": "panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4",
 "overlays": [
  "this.overlay_1055BBE9_0C40_C6B1_4192_24F6073ED3C6",
  "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -113.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_194D7824_179B_8E16_41A0_452BC36562D4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101235_00_020",
 "hfovMin": "150%",
 "id": "panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66",
 "overlays": [
  "this.overlay_28589C29_0C41_C188_41A7_4582B74A73DD",
  "this.panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_104625_00_025",
 "hfovMin": "150%",
 "id": "panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C",
 "overlays": [
  "this.overlay_25D538DD_0C40_C285_418C_4D4272EED104",
  "this.overlay_18588751_164D_DC9D_41A7_4CCC53B7D00A",
  "this.overlay_19E354BF_164D_BD84_41A7_682FAF1943E3",
  "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 146.17,
   "class": "AdjacentPanorama",
   "backwardYaw": -159.44,
   "panorama": "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591",
   "distance": 1
  },
  {
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -33.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_196ED83F_179B_8E71_419B_AFFF46FC885C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101116_00_016",
 "hfovMin": "150%",
 "id": "panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9",
 "overlays": [
  "this.overlay_2B63B995_0C40_429C_4195_01CCD1705E40",
  "this.overlay_2BA7F7BD_0C40_CE8C_419E_7985ECE698D4",
  "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_104608_00_024",
 "hfovMin": "150%",
 "id": "panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF",
 "overlays": [
  "this.overlay_26CEC0AC_0C41_C28B_41A7_7A25A13EA9CE",
  "this.overlay_242C3F7C_0C40_5F84_4199_4675ED6675AE",
  "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -156.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 62.14,
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01B8745A_0BC3_C618_4162_33FFC5315781_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 24.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_193237F5_179B_81F1_41B1_D8F93C131E98",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_104821_00_029",
 "hfovMin": "150%",
 "id": "panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D",
 "overlays": [
  "this.overlay_214191B8_0C41_C28F_4178_A7665DC085C7",
  "this.overlay_21EABB10_0C40_479F_41A6_A4E6E296FAD3",
  "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -13.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 29.36,
   "panorama": "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591",
   "distance": 1
  },
  {
   "panorama": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -150.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_19F6E7B9_179B_827E_41A9_87117B0298F6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_100811_00_010",
 "hfovMin": "150%",
 "id": "panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2",
 "overlays": [
  "this.overlay_2F111692_0C40_CE90_41A0_8AC69BB3D0FA",
  "this.overlay_2FB60E02_0C40_C170_41AC_76F8705D19E9",
  "this.overlay_2FE52C10_0C40_C190_41A1_4533F256ACAC",
  "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 66.91,
   "class": "AdjacentPanorama",
   "backwardYaw": -161.95,
   "panorama": "this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49",
   "distance": 1
  },
  {
   "panorama": "this.panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_101214_00_019",
 "hfovMin": "150%",
 "id": "panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9",
 "overlays": [
  "this.overlay_2817BC41_0C40_41F9_419A_53A9A6AFCD3D",
  "this.overlay_0B53F0C1_134B_2D1E_419A_8A2780CF8497",
  "this.panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101006_00_014",
 "hfovMin": "150%",
 "id": "panorama_01A47A98_0BC3_C218_41A1_D322C71C584E",
 "overlays": [
  "this.overlay_2DBBA54C_0C41_C3F2_41A7_8B46848D7641",
  "this.overlay_2DEC3CBC_0C41_C292_4188_1D8C2BA17E42",
  "this.panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_100508_00_005",
 "hfovMin": "150%",
 "id": "panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1",
 "overlays": [
  "this.overlay_110E3450_0C40_C1ED_41AC_A247C7CB6106",
  "this.overlay_05AF093E_134F_5F66_41A7_C9B3CE40FA3C",
  "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 167.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.84,
   "panorama": "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF",
   "distance": 1
  },
  {
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_100533_00_006",
 "hfovMin": "150%",
 "id": "panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
 "overlays": [
  "this.overlay_10472C9E_0C40_4292_41AD_C38F19B121C7",
  "this.overlay_10C19DB9_0C40_429F_4199_88EEF4C53617",
  "this.overlay_3E7D7D71_0CC1_C383_41A7_BC11B04B0C28",
  "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 62.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -156.04,
   "panorama": "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF",
   "distance": 1
  },
  {
   "panorama": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 23.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_190157E7_179B_8211_4191_E53FD882F29E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_100357_00_002",
 "hfovMin": "150%",
 "id": "panorama_01920874_0BC0_CE14_4195_8C83933A94EE",
 "overlays": [
  "this.overlay_12419519_0C41_C39D_4198_CFBDD1C9B253",
  "this.overlay_0BACDF49_134B_5328_41A5_35FD6C5D2021",
  "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -164.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.97,
   "panorama": "this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A",
   "distance": 1
  },
  {
   "panorama": "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_100714_00_008",
 "hfovMin": "150%",
 "id": "panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350",
 "overlays": [
  "this.overlay_108C18F9_0C40_4291_4194_CE489E5205D5",
  "this.overlay_04C14D01_134E_F71D_41B1_D73FB2AAE8E5",
  "this.panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_104746_00_027",
 "hfovMin": "150%",
 "id": "panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
 "overlays": [
  "this.overlay_24CA822E_0C40_4182_4194_B8A109C7DC7D",
  "this.overlay_236CADD6_0C40_4282_4198_D824788DADD7",
  "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -38.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -155.92,
   "panorama": "this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37",
   "distance": 1
  },
  {
   "panorama": "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_100423_00_003",
 "hfovMin": "150%",
 "id": "panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0",
 "overlays": [
  "this.overlay_12342E30_0C40_41AC_4194_78C42635E35F",
  "this.overlay_00AC8477_134B_35F8_417D_348306D22183",
  "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 20.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_19A4D78F_179B_8211_4198_97545AF701BB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101403_00_022",
 "hfovMin": "150%",
 "id": "panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E",
 "overlays": [
  "this.overlay_27A988F1_0C40_C29B_4182_F74F9A630863",
  "this.panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_camera"
  },
  {
   "media": "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE_camera"
  },
  {
   "media": "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_camera"
  },
  {
   "media": "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_camera"
  },
  {
   "media": "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_camera"
  },
  {
   "media": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_camera"
  },
  {
   "media": "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_camera"
  },
  {
   "media": "this.panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_camera"
  },
  {
   "media": "this.panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_camera"
  },
  {
   "media": "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_camera"
  },
  {
   "media": "this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_camera"
  },
  {
   "media": "this.panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_camera"
  },
  {
   "media": "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781_camera"
  },
  {
   "media": "this.panorama_01A47A98_0BC3_C218_41A1_D322C71C584E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_camera"
  },
  {
   "media": "this.panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_camera"
  },
  {
   "media": "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_camera"
  },
  {
   "media": "this.panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_camera"
  },
  {
   "media": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_camera"
  },
  {
   "media": "this.panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_camera"
  },
  {
   "media": "this.panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_camera"
  },
  {
   "media": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288_camera"
  },
  {
   "media": "this.panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_camera"
  },
  {
   "media": "this.panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_camera"
  },
  {
   "media": "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_camera"
  },
  {
   "media": "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_camera"
  },
  {
   "media": "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591_camera"
  },
  {
   "media": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_camera"
  },
  {
   "media": "this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_camera"
  },
  {
   "media": "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "label": "IMG_20261001_100739_00_009",
 "hfovMin": "150%",
 "id": "panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C",
 "overlays": [
  "this.overlay_10C39209_0C40_4170_4193_44133D269C96",
  "this.overlay_04A9A4E0_1349_351C_41A9_4AB481A12C8E",
  "this.panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -117.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_19E7A7C7_179B_8212_41B4_DC14FDA3E6B7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101028_00_015",
 "hfovMin": "150%",
 "id": "panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664",
 "overlays": [
  "this.overlay_2B93FAC8_0C41_C6F4_419E_E0E269849356",
  "this.panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A0B57E_0BC0_461D_4176_870008DC0288_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -12.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_19C4F7A9_179B_821E_41AB_FB04059C8E5F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101422_00_023",
 "hfovMin": "150%",
 "id": "panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6",
 "overlays": [
  "this.overlay_27B83E1D_0C40_418B_419D_2AFC7137E3D9",
  "this.overlay_2544B9F5_0C40_C285_4199_9048DDF739DD",
  "this.panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_100333_00_001",
 "hfovMin": "150%",
 "id": "panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A",
 "overlays": [
  "this.overlay_12331490_0C4F_C16B_41A5_CCA62876B3FC",
  "this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 0.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.08,
   "panorama": "this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 18.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_19A91787_179B_8211_41AA_5ABF96C8BF45",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101159_00_018",
 "hfovMin": "150%",
 "id": "panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542",
 "overlays": [
  "this.overlay_2970FF2F_0C43_DF89_41A3_2AF53DFB8C2F",
  "this.overlay_29A9E327_0C43_C7B9_41AC_B52DE201CF58",
  "this.panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "label": "IMG_20261001_100910_00_012",
 "hfovMin": "150%",
 "id": "panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC",
 "overlays": [
  "this.overlay_2ED3B6F3_0C5F_CE97_41A8_B5F83EF104A0",
  "this.panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01B8745A_0BC3_C618_4162_33FFC5315781",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 400,
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "class": "SlideOutEffect",
 "to": "left",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_101304_00_021",
 "hfovMin": "150%",
 "id": "panorama_01A0B57E_0BC0_461D_4176_870008DC0288",
 "overlays": [
  "this.overlay_289BECE9_0C40_428B_4197_45581700C3B9",
  "this.overlay_2791483A_0C4F_C189_41A3_DCD6994EF6D0",
  "this.panorama_01A0B57E_0BC0_461D_4176_870008DC0288_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 166.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_197EA831_179B_8E71_41AB_8C02D2714442",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_19D6B797_179B_8231_41A9_85942A3BFB23",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01920874_0BC0_CE14_4195_8C83933A94EE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 15.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_191727D4_179B_8237_41A0_A8BA1F4AC652",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20261001_100832_00_011",
 "hfovMin": "150%",
 "id": "panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49",
 "overlays": [
  "this.overlay_2E86C689_0C40_4173_4195_863CDF5F6CBB",
  "this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -161.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 66.91,
   "panorama": "this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_195CB811_179B_8E0E_4196_301C3CEE67AA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_01BD2F59_0BC0_C265_4193_8578340ED591_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "bottom": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.Container_047C4DA2_0BC0_469F_4188_72261119768E",
  "this.Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E"
 ],
 "id": "Container_04703DA4_0BC0_469B_418C_E99C811468A2",
 "left": "0.54%",
 "width": 324,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_193F4B9F_0BC0_430E_4175_45828A290529"
 ],
 "id": "Container_193B3BA1_0BC0_4332_4192_EE1E9A16C507",
 "left": "0%",
 "width": 1658,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.74,
   "yaw": -80.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AED6875_1357_7DE3_41A8_E0E59F5E023D",
   "pitch": -11.93,
   "hfov": 25.74,
   "yaw": -80.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_22717AD9_0C40_C68E_4193_2FDC15409DD8",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.22,
   "yaw": -155.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E, this.camera_192CF803_179B_8E11_4194_8882F2926F36); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AEC8875_1357_7DE3_41A7_F8F81D128E77",
   "pitch": -9.3,
   "hfov": 24.22,
   "yaw": -155.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_22996DB7_0C40_C281_41A6_E2465FDA2212",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.36,
   "yaw": 0.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1, this.camera_19C4F7A9_179B_821E_41AB_FB04059C8E5F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0ADBF86F_1357_7DFF_4187_1BD7DCD92C43",
   "pitch": -7.16,
   "hfov": 22.36,
   "yaw": 0.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_12847D2F_0C41_C3B3_416A_BE1A571BB499",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.03,
   "yaw": 166.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0ADB186F_1357_7DFF_41A7_FD60AD0FF02C",
   "pitch": -8.79,
   "hfov": 21.03,
   "yaw": 166.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07438EE0_1349_3516_419F_CC371E4AD3A0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.55,
   "yaw": -6.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE5D871_1357_7DE3_41B3_37EE578B3B21",
   "pitch": -18.59,
   "hfov": 17.55,
   "yaw": -6.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2D2BA893_0C40_C297_4188_ECFF15BF2173",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01B8745A_0BC3_C618_4162_33FFC5315781_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.38,
   "yaw": 152.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE34872_1357_7DE1_41AB_E850B93EF691",
   "pitch": -18.47,
   "hfov": 26.38,
   "yaw": 152.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2A11BE0E_0C40_418A_41A2_71B0F1A19385",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.71,
   "yaw": -159.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C, this.camera_196ED83F_179B_8E71_419B_AFFF46FC885C); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AEF6874_1357_7DE1_41AD_E529D8BF6DB5",
   "pitch": -18.47,
   "hfov": 24.71,
   "yaw": -159.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_247BAA48_0C40_418C_41A3_F0E253C3EFAC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.98,
   "yaw": 141.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AEEA875_1357_7DE3_4199_32025BC1835E",
   "pitch": -8.92,
   "hfov": 26.98,
   "yaw": 141.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_23894ED2_0C40_3E9D_4192_DBF2BAEF9044",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.33,
   "yaw": 29.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D, this.camera_197EA831_179B_8E71_41AB_8C02D2714442); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AEEC875_1357_7DE3_417F_279950F96021",
   "pitch": -11.68,
   "hfov": 21.33,
   "yaw": 29.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_25CF7C23_0C41_C183_419F_91506F0FD65E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01BD2F59_0BC0_C265_4193_8578340ED591_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.18,
   "yaw": -5.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AD91870_1357_7DE1_41AC_214A2F06D56C",
   "pitch": -32.53,
   "hfov": 22.18,
   "yaw": -5.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1055BBE9_0C40_C6B1_4192_24F6073ED3C6",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.59,
   "yaw": 158.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE2E873_1357_7DE7_4184_5EEEA638C605",
   "pitch": -13.82,
   "hfov": 23.59,
   "yaw": 158.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28589C29_0C41_C188_41A7_4582B74A73DD",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.48,
   "yaw": -161.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0559EA80_164C_D47E_4195_6CE031136084",
   "pitch": -8.92,
   "hfov": 26.48,
   "yaw": -161.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_25D538DD_0C40_C285_418C_4D4272EED104",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.05,
   "yaw": -120.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_05567A80_164C_D47E_4195_F981A30AEBD0",
   "pitch": -13.69,
   "hfov": 26.05,
   "yaw": -120.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_18588751_164D_DC9D_41A7_4CCC53B7D00A",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.48,
   "yaw": 146.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591, this.camera_19A4D78F_179B_8211_4198_97545AF701BB); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0556CA80_164C_D47E_41AF_D9D3C2A8CB48",
   "pitch": -8.92,
   "hfov": 26.48,
   "yaw": 146.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_19E354BF_164D_BD84_41A7_682FAF1943E3",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.8,
   "yaw": -76.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE3B872_1357_7DE1_41B0_B01CB911A680",
   "pitch": -19.47,
   "hfov": 24.8,
   "yaw": -76.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2B63B995_0C40_429C_4195_01CCD1705E40",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.49,
   "yaw": 62.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE3C872_1357_7DE1_41B2_C226E4F8C8CC",
   "pitch": -22.61,
   "hfov": 18.49,
   "yaw": 62.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2BA7F7BD_0C40_CE8C_419E_7985ECE698D4",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.9,
   "yaw": -156.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D, this.camera_19E7A7C7_179B_8212_41B4_DC14FDA3E6B7); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE00874_1357_7DE1_41B1_6B55FE18E708",
   "pitch": -21.73,
   "hfov": 31.9,
   "yaw": -156.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_26CEC0AC_0C41_C28B_41A7_7A25A13EA9CE",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.75,
   "yaw": -21.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE07874_1357_7DE1_4190_A68575593B88",
   "pitch": -22.23,
   "hfov": 25.75,
   "yaw": -21.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_242C3F7C_0C40_5F84_4199_4675ED6675AE",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.47,
   "yaw": -79.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AEC6876_1357_7DE1_41A8_21AB7054310A",
   "pitch": -12.56,
   "hfov": 23.47,
   "yaw": -79.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_214191B8_0C41_C28F_4178_A7665DC085C7",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.35,
   "yaw": -13.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BD2F59_0BC0_C265_4193_8578340ED591, this.camera_19F6E7B9_179B_827E_41A9_87117B0298F6); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AEBA876_1357_7DE1_41A8_41FC51096926",
   "pitch": -11.43,
   "hfov": 21.35,
   "yaw": -13.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_21EABB10_0C40_479F_41A6_A4E6E296FAD3",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.12,
   "yaw": 66.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49, this.camera_19A91787_179B_8211_41AA_5ABF96C8BF45); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE7D871_1357_7DE3_41A6_AEA19F9077A8",
   "pitch": -27.38,
   "hfov": 19.12,
   "yaw": 66.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F111692_0C40_CE90_41A0_8AC69BB3D0FA",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.92,
   "yaw": -83.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE77871_1357_7DE3_41A5_07847194EF29",
   "pitch": -29.27,
   "hfov": 24.92,
   "yaw": -83.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2FB60E02_0C40_C170_41AC_76F8705D19E9",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.35,
   "yaw": -2.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE68871_1357_7DE3_41A2_36EF705ECE03",
   "pitch": -23.11,
   "hfov": 22.35,
   "yaw": -2.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2FE52C10_0C40_C190_41A1_4533F256ACAC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.07,
   "yaw": 15.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE32873_1357_7DE7_4187_A0FA6CC8FAB6",
   "pitch": -17.34,
   "hfov": 20.07,
   "yaw": 15.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2817BC41_0C40_41F9_419A_53A9A6AFCD3D",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.12,
   "yaw": 143.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE34873_1357_7DE7_41A8_F50901FFFF22",
   "pitch": -24.62,
   "hfov": 19.12,
   "yaw": 143.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B53F0C1_134B_2D1E_419A_8A2780CF8497",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.4,
   "yaw": -38.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE56872_1357_7DE1_4170_CA3DCE211EBE",
   "pitch": -22.74,
   "hfov": 19.4,
   "yaw": -38.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2DBBA54C_0C41_C3F2_41A7_8B46848D7641",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.58,
   "yaw": -12.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE49872_1357_7DE1_419F_50F1D43678AC",
   "pitch": -12.06,
   "hfov": 19.58,
   "yaw": -12.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2DEC3CBC_0C41_C292_4188_1D8C2BA17E42",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.61,
   "yaw": -12.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0ADB586F_1357_7DFF_41B2_F5E25700EFE9",
   "pitch": -16.46,
   "hfov": 21.61,
   "yaw": -12.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_110E3450_0C40_C1ED_41AC_A247C7CB6106",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.01,
   "yaw": 167.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF, this.camera_19D6B797_179B_8231_41A9_85942A3BFB23); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0ADAC870_1357_7DE1_41A5_36C29A6F5252",
   "pitch": -21.23,
   "hfov": 21.01,
   "yaw": 167.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_05AF093E_134F_5F66_41A7_C9B3CE40FA3C",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.25,
   "yaw": 62.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF, this.camera_190157E7_179B_8211_4191_E53FD882F29E); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0ADA0870_1357_7DE1_41B0_D13C358BE5A6",
   "pitch": -9.67,
   "hfov": 18.25,
   "yaw": 62.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_10472C9E_0C40_4292_41AD_C38F19B121C7",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.64,
   "yaw": -1.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0ADA5870_1357_7DE1_4197_1FA0D908BFAF",
   "pitch": -15.95,
   "hfov": 22.64,
   "yaw": -1.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_10C19DB9_0C40_429F_4199_88EEF4C53617",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.62,
   "yaw": 131.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AD9E870_1357_7DE1_41B0_FCBD967E5417",
   "pitch": -11.31,
   "hfov": 20.62,
   "yaw": 131.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E7D7D71_0CC1_C383_41A7_BC11B04B0C28",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.17,
   "yaw": -12.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30104000_0CC3_C182_41A4_6E39FEB7FA00",
   "pitch": -13.19,
   "hfov": 23.17,
   "yaw": -12.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_12419519_0C41_C39D_4198_CFBDD1C9B253",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.16,
   "yaw": -164.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A, this.camera_195CB811_179B_8E0E_4196_301C3CEE67AA); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_044558AF_134A_FD68_41AD_78666E7CA167",
   "pitch": -39.07,
   "hfov": 23.16,
   "yaw": -164.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0BACDF49_134B_5328_41A5_35FD6C5D2021",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01920874_0BC0_CE14_4195_8C83933A94EE_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.57,
   "yaw": -122,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AD89870_1357_7DE1_41AF_6C1E64338C6E",
   "pitch": -22.74,
   "hfov": 23.57,
   "yaw": -122,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_108C18F9_0C40_4291_4194_CE489E5205D5",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.98,
   "yaw": 109.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AD82870_1357_7DE1_41AA_C5A9ACC7BA4E",
   "pitch": -34.79,
   "hfov": 20.98,
   "yaw": 109.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04C14D01_134E_F71D_41B1_D73FB2AAE8E5",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.33,
   "yaw": -38.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37, this.camera_193237F5_179B_81F1_41B1_D8F93C131E98); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AEE4875_1357_7DE3_41B2_28310AA5BF2B",
   "pitch": -15.95,
   "hfov": 24.33,
   "yaw": -38.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24CA822E_0C40_4182_4194_B8A109C7DC7D",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.65,
   "yaw": 136.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AEDE875_1357_7DE3_4184_9007AB6400E9",
   "pitch": -12.81,
   "hfov": 25.65,
   "yaw": 136.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_236CADD6_0C40_4282_4198_D824788DADD7",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.65,
   "yaw": -32.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0ADC386F_1357_7DFF_41B2_856EA840CB15",
   "pitch": -6.53,
   "hfov": 17.65,
   "yaw": -32.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_12342E30_0C40_41AC_4194_78C42635E35F",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.42,
   "yaw": -167.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0ADBB86F_1357_7DFF_41A1_244E7B19410F",
   "pitch": -13.32,
   "hfov": 22.42,
   "yaw": -167.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_00AC8477_134B_35F8_417D_348306D22183",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.76,
   "yaw": -8.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3019400C_0CC3_C182_4180_47776B30EEA2",
   "pitch": -29.27,
   "hfov": 20.76,
   "yaw": -8.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27A988F1_0C40_C29B_4182_F74F9A630863",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.27,
   "yaw": -117.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AD87870_1357_7DE1_41AD_53443DB8FEB5",
   "pitch": -23.11,
   "hfov": 23.27,
   "yaw": -117.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_10C39209_0C40_4170_4193_44133D269C96",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.47,
   "yaw": 109.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE79871_1357_7DE3_41A2_DE23DBAACE68",
   "pitch": -27.38,
   "hfov": 22.47,
   "yaw": 109.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04A9A4E0_1349_351C_41A9_4AB481A12C8E",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.44,
   "yaw": -169.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE43872_1357_7DE1_416B_9A7D791C11F6",
   "pitch": -17.96,
   "hfov": 21.44,
   "yaw": -169.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2B93FAC8_0C41_C6F4_419E_E0E269849356",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.76,
   "yaw": -163.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE15874_1357_7DE1_41B1_1CA1B5B25512",
   "pitch": -37.18,
   "hfov": 27.76,
   "yaw": -163.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27B83E1D_0C40_418B_419D_2AFC7137E3D9",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.91,
   "yaw": 49.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_301E700C_0CC3_C182_418C_CA67CE1F6409",
   "pitch": -5.8,
   "hfov": 30.91,
   "yaw": 49.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2544B9F5_0C40_C285_4199_9048DDF739DD",
 "data": {
  "label": "Circle Arrow 06"
 }
},
{
 "inertia": false,
 "id": "panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.51,
   "yaw": 0.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01920874_0BC0_CE14_4195_8C83933A94EE, this.camera_191727D4_179B_8237_41A0_A8BA1F4AC652); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30134FFF_0CC3_FE7F_41AB_72FF7F8D7543",
   "pitch": -14.32,
   "hfov": 24.51,
   "yaw": 0.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_12331490_0C4F_C16B_41A5_CCA62876B3FC",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.17,
   "yaw": -54.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE29872_1357_7DE1_419A_0059CED02CF4",
   "pitch": -20.48,
   "hfov": 28.17,
   "yaw": -54.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2970FF2F_0C43_DF89_41A3_2AF53DFB8C2F",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.43,
   "yaw": 64.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE23873_1357_7DE7_4167_229974197B9A",
   "pitch": -23.99,
   "hfov": 22.43,
   "yaw": 64.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29A9E327_0C43_C7B9_41AC_B52DE201CF58",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.76,
   "yaw": -163.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE5A871_1357_7DE3_41A6_C74DE67C179F",
   "pitch": -15.83,
   "hfov": 26.76,
   "yaw": -163.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2ED3B6F3_0C5F_CE97_41A8_B5F83EF104A0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.7,
   "yaw": -154.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE27873_1357_7DE7_41B0_FEF832808450",
   "pitch": -40.2,
   "hfov": 24.7,
   "yaw": -154.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_289BECE9_0C40_428B_4197_45581700C3B9",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.55,
   "yaw": -11.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE1A873_1357_7DE7_4190_8D86D0DC18A9",
   "pitch": -39.32,
   "hfov": 20.55,
   "yaw": -11.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2791483A_0C4F_C189_41A3_DCD6994EF6D0",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A0B57E_0BC0_461D_4176_870008DC0288_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.05,
   "yaw": -161.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2, this.camera_194D7824_179B_8E16_41A0_452BC36562D4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0AE63871_1357_7DE3_4182_133482228D27",
   "pitch": -34.42,
   "hfov": 26.05,
   "yaw": -161.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2E86C689_0C40_4173_4195_863CDF5F6CBB",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "inertia": false,
 "id": "panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_tcap0",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_tcap0.png",
    "width": 1254,
    "class": "ImageResourceLevel",
    "height": 1254
   }
  ],
  "class": "ImageResource"
 }
},
{
 "children": [
  "this.Container_047C2DA2_0BC0_469F_419A_69D22518CCED"
 ],
 "id": "Container_047C4DA2_0BC0_469F_4188_72261119768E",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- COLLAPSE"
 },
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_047CFDA2_0BC0_469F_41A5_059DE3E8758A"
 ],
 "id": "Container_047C0DA2_0BC0_469F_41A7_0C16D0970E4E",
 "left": 0,
 "width": 259,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- EXPANDED"
 },
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_193F5B9F_0BC0_430E_4168_3FC5C8FFCBC9",
  "this.IconButton_193F6B9F_0BC0_430E_4160_004333F6CFEF"
 ],
 "id": "Container_193F4B9F_0BC0_430E_4175_45828A290529",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- COLLAPSE"
 },
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AED6875_1357_7DE3_41A8_E0E59F5E023D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01B80E4D_0BC0_C27D_41A4_3E541C85DE37_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AEC8875_1357_7DE3_41A7_F8F81D128E77",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0ADBF86F_1357_7DFF_4187_1BD7DCD92C43",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01B5D791_0BC0_42EA_41A1_F40071AD81EF_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0ADB186F_1357_7DFF_41A7_FD60AD0FF02C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01B8745A_0BC3_C618_4162_33FFC5315781_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE5D871_1357_7DE3_41B3_37EE578B3B21",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A41E58_0BC3_C218_41A2_24598AA9B5B9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE34872_1357_7DE1_41AB_E850B93EF691",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AEF6874_1357_7DE1_41AD_E529D8BF6DB5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AEEA875_1357_7DE3_4199_32025BC1835E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BD2F59_0BC0_C265_4193_8578340ED591_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AEEC875_1357_7DE3_417F_279950F96021",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BEEC98_0BC0_461A_4191_6B1591BF10F4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AD91870_1357_7DE1_41AC_214A2F06D56C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A4268D_0BC0_42FE_41A4_8A3B5F945A66_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE2E873_1357_7DE7_4184_5EEEA638C605",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0559EA80_164C_D47E_4195_6CE031136084",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_05567A80_164C_D47E_4195_F981A30AEBD0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BD606C_0BC0_DE3C_415A_00AA8C5AAC1C_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0556CA80_164C_D47E_41AF_D9D3C2A8CB48",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE3B872_1357_7DE1_41B0_B01CB911A680",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A42781_0BC3_C2E8_41A3_A599EB347CF9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE3C872_1357_7DE1_41B2_C226E4F8C8CC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE00874_1357_7DE1_41B1_6B55FE18E708",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BF31D9_0BC0_BE64_419C_6BBC0A8488BF_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE07874_1357_7DE1_4190_A68575593B88",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AEC6876_1357_7DE1_41A8_21AB7054310A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BD6D19_0BC0_47E2_41A7_1FCE3C62821D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AEBA876_1357_7DE1_41A8_41FC51096926",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE7D871_1357_7DE3_41A6_AEA19F9077A8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE77871_1357_7DE3_41A5_07847194EF29",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A6811C_0BC0_5E1A_4177_FDE4C2AEC5E2_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE68871_1357_7DE3_41A2_36EF705ECE03",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE32873_1357_7DE7_4187_A0FA6CC8FAB6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A7B6CC_0BC3_C27F_41A3_4F3A358CABB9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE34873_1357_7DE7_41A8_F50901FFFF22",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE56872_1357_7DE1_4170_CA3DCE211EBE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A47A98_0BC3_C218_41A1_D322C71C584E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE49872_1357_7DE1_419F_50F1D43678AC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0ADB586F_1357_7DFF_41B2_F5E25700EFE9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BA4EDD_0BC0_421A_416F_633FC49FC0B1_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0ADAC870_1357_7DE1_41A5_36C29A6F5252",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0ADA0870_1357_7DE1_41B0_D13C358BE5A6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0ADA5870_1357_7DE1_4197_1FA0D908BFAF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BBF5B4_0BC0_462B_41A3_0DE8B083152D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AD9E870_1357_7DE1_41B0_FCBD967E5417",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30104000_0CC3_C182_41A4_6E39FEB7FA00",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01920874_0BC0_CE14_4195_8C83933A94EE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_044558AF_134A_FD68_41AD_78666E7CA167",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AD89870_1357_7DE1_41AF_6C1E64338C6E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A1334A_0BC0_427E_417D_B67ADC8B1350_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AD82870_1357_7DE1_41AA_C5A9ACC7BA4E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AEE4875_1357_7DE3_41B2_28310AA5BF2B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01BA3FAC_0BC0_C222_41A2_6AE1965BD81E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AEDE875_1357_7DE3_4184_9007AB6400E9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0ADC386F_1357_7DFF_41B2_856EA840CB15",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01B4401B_0BC0_BE1D_419C_E2DDF2C67AF0_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0ADBB86F_1357_7DFF_41A1_244E7B19410F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A2047F_0BC0_461B_41A2_F2C92E83075E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_3019400C_0CC3_C182_4180_47776B30EEA2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AD87870_1357_7DE1_41AD_53443DB8FEB5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A6CA26_0BC0_4229_41A5_F3837D7CE87C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE79871_1357_7DE3_41A2_DE23DBAACE68",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A4C0EF_0BC3_DE38_419C_210DC73C1664_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE43872_1357_7DE1_416B_9A7D791C11F6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE15874_1357_7DE1_41B1_1CA1B5B25512",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A32310_0BC0_43E5_419D_8B4D5A3C64A6_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_301E700C_0CC3_C182_418C_CA67CE1F6409",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01668F1D_0BC0_C215_41A6_20E34E87D63A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_30134FFF_0CC3_FE7F_41AB_72FF7F8D7543",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE29872_1357_7DE1_419A_0059CED02CF4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A6F582_0BC3_C6E8_416D_B7B702B41542_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE23873_1357_7DE7_4167_229974197B9A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A18DE0_0BC0_4629_419F_27CF518F65AC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE5A871_1357_7DE3_41A6_C74DE67C179F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE27873_1357_7DE7_41B0_FEF832808450",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A0B57E_0BC0_461D_4176_870008DC0288_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE1A873_1357_7DE7_4190_8D86D0DC18A9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01A7A7A8_0BC0_4239_41A5_C964FA047F49_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_0AE63871_1357_7DE3_4182_133482228D27",
 "rowCount": 6,
 "colCount": 4
},
{
 "id": "Container_047C2DA2_0BC0_469F_419A_69D22518CCED",
 "left": "0%",
 "width": 36,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_047CEDA2_0BC0_469F_4198_B20A901BFDCD"
 ],
 "id": "Container_047CFDA2_0BC0_469F_41A5_059DE3E8758A",
 "left": "0%",
 "width": "92.664%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container"
 },
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_193F5B9F_0BC0_430E_4168_3FC5C8FFCBC9",
 "left": "0%",
 "width": 36,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_193F6B9F_0BC0_430E_4160_004333F6CFEF",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_193F6B9F_0BC0_430E_4160_004333F6CFEF_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_193F6B9F_0BC0_430E_4160_004333F6CFEF.png",
 "click": "this.setComponentVisibility(this.Container_193F4B9F_0BC0_430E_4175_45828A290529, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.Image_047CDDA2_0BC0_469F_41A4_B04BD80943C8",
  "this.Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2",
  "this.Container_047E6DA2_0BC0_469F_416B_8A460CF07A58"
 ],
 "id": "Container_047CEDA2_0BC0_469F_4198_B20A901BFDCD",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 40,
 "paddingLeft": 40,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0.91
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "bottom": "4.65%",
 "backgroundColor": [
  "#000066"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 40,
 "height": "89.967%",
 "paddingTop": 40,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "horizontal",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_047CDDA2_0BC0_469F_41A4_B04BD80943C8",
 "width": "94.375%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_047CDDA2_0BC0_469F_41A4_B04BD80943C8.png",
 "paddingLeft": 0,
 "minHeight": 30,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "3.18%",
 "height": "22.658%",
 "verticalAlign": "top",
 "minWidth": 40,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 }
},
{
 "children": [
  "this.Button_047C8DA2_0BC0_469F_4191_1CE4847ED327",
  "this.Container_047D7DA2_0BC0_469F_418F_EF5ECCEB4792",
  "this.Button_047D6DA2_0BC0_469F_4198_A414673F6877",
  "this.Container_047D5DA2_0BC0_469F_41A6_79E3A94E689F",
  "this.Button_047D4DA2_0BC0_469F_417F_8381E89D626A",
  "this.Container_047D2DA2_0BC0_469F_41A1_57F0A51C5F1D",
  "this.Button_047D1DA2_0BC0_469F_418F_47B17304F464",
  "this.Container_047DEDA2_0BC0_469F_419A_B232F6904CA2",
  "this.Button_047DDDA2_0BC0_469F_4199_7ECCB895A877",
  "this.Container_047DADA2_0BC0_469F_4177_204B8C4D0BE5",
  "this.Button_047D9DA2_0BC0_469F_418F_1F3C1F67AFF4",
  "this.Container_047E7DA2_0BC0_469F_419F_F753964E89BF",
  "this.Button_1B5CC5DE_0DC0_42D2_41AA_D9CAE30BB1F5"
 ],
 "id": "Container_047CCDA2_0BC0_469F_4182_4C28E334A1E2",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "28.71%",
 "bottom": "22.49%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 1"
 },
 "verticalAlign": "middle",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_18B1B772_0BC0_C313_4181_6AE92C5D9BA9"
 ],
 "id": "Container_047E6DA2_0BC0_469F_416B_8A460CF07A58",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "bottom": "2.18%",
 "scrollBarVisible": "rollOver",
 "height": 124,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "gap": 5,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container footer"
 },
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "id": "Button_047C8DA2_0BC0_469F_4191_1CE4847ED327",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 3)",
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Entrada",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_047D7DA2_0BC0_469F_418F_EF5ECCEB4792",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": 1,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "id": "Button_047D6DA2_0BC0_469F_4198_A414673F6877",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 26); this.mainPlayList.set('selectedIndex', 27); this.mainPlayList.set('selectedIndex', 28)",
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "\u00c1rea de Lazer",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_047D5DA2_0BC0_469F_41A6_79E3A94E689F",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": 1,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "pressedLabel": "Inserdt Text",
 "id": "Button_047D4DA2_0BC0_469F_417F_8381E89D626A",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 7)",
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Escrit\u00f3rio",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_047D2DA2_0BC0_469F_41A1_57F0A51C5F1D",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": 1,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "id": "Button_047D1DA2_0BC0_469F_418F_47B17304F464",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Cozinha",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_047DEDA2_0BC0_469F_419A_B232F6904CA2",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": 1,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "id": "Button_047DDDA2_0BC0_469F_4199_7ECCB895A877",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Sala",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Photoalbum"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_047DADA2_0BC0_469F_4177_204B8C4D0BE5",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": 1,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "id": "Button_047D9DA2_0BC0_469F_418F_1F3C1F67AFF4",
 "width": "73.064%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 16); this.mainPlayList.set('selectedIndex', 17); this.mainPlayList.set('selectedIndex', 18); this.mainPlayList.set('selectedIndex', 19); this.mainPlayList.set('selectedIndex', 20); this.mainPlayList.set('selectedIndex', 21); this.mainPlayList.set('selectedIndex', 22)",
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Quartos",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_047E7DA2_0BC0_469F_419F_F753964E89BF",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": 1,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "id": "Button_1B5CC5DE_0DC0_42D2_41AA_D9CAE30BB1F5",
 "width": "73.064%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Varanda",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "children": [
  "this.Container_18C36758_0BC0_C31F_41A3_D10CE0AABADE",
  "this.Container_18C07759_0BC0_C311_4148_995E1DCC74C3"
 ],
 "id": "Container_18B1B772_0BC0_C313_4181_6AE92C5D9BA9",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 124,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "gap": 5,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container footer"
 },
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_18C1B759_0BC0_C311_419A_A545CF713E55",
  "this.IconButton_18C1C759_0BC0_C311_4185_B06DB37D9DB1",
  "this.IconButton_18C08758_0BC0_C31F_4191_53EC95A463C4"
 ],
 "id": "Container_18C36758_0BC0_C31F_41A3_D10CE0AABADE",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 43,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 1"
 },
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_3ACF0090_0CC0_4287_417B_CD8B627F2464"
 ],
 "id": "Container_18C07759_0BC0_C311_4148_995E1DCC74C3",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 49,
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 2"
 },
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_18C1B759_0BC0_C311_419A_A545CF713E55",
 "width": 45,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_18C1B759_0BC0_C311_419A_A545CF713E55.png",
 "click": "this.openLink('https://api.whatsapp.com/send/?phone=558881217575', '_top')",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_18C1C759_0BC0_C311_4185_B06DB37D9DB1",
 "width": 47,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_18C1C759_0BC0_C311_4185_B06DB37D9DB1.png",
 "click": "this.openLink('https://www.instagram.com/carlosguimaraesimoveis/', '_top')",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_18C08758_0BC0_C31F_4191_53EC95A463C4",
 "width": 43,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 43,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_18C08758_0BC0_C31F_4191_53EC95A463C4.png",
 "click": "this.openLink('https://www.tiktok.com/@carlosguimaraes.imoveis', '_top')",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_3ACF0090_0CC0_4287_417B_CD8B627F2464",
 "width": 45,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_3ACF0090_0CC0_4287_417B_CD8B627F2464.png",
 "click": "this.openLink('https://carlosguimaraesimoveis.com.br', '_top')",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand"
}],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Player",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Player455"
 },
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "downloadEnabled": true,
 "defaultVRPointer": "laser",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
