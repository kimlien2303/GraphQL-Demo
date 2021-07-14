export const scenes = [
  {
    key: 0,
    name: 'main-world',
    loadScene: {
      url: 'assets/mainWorld/',
      fileName: 'light.babylon',
    },
    meshtasks: [
      {
        taskName: 'LuckyPlaza_VOD_High',
        meshName: '',
        url: 'assets/mainWorld/',
        fileName: 'LuckyPlaza_VOD_High.glb',
      },
      {
        taskName: 'Orchard-LeftOver',
        meshName: '',
        url: 'assets/mainWorld/',
        fileName: 'Orchard-LeftOver.glb',
      },
      {
        taskName: '',
        meshName: '',
        url: 'assets/mainWorld/',
        fileName: 'Shelter_VOD_High.glb',
      },
      {
        taskName: '',
        meshName: '',
        url: 'assets/mainWorld/',
        fileName: 'Statue_VOD_High.glb',
      },
      {
        taskName: '',
        meshName: '',
        url: 'assets/mainWorld/',
        fileName: 'Taka_VOD_High.glb',
      },
      {
        taskName: '',
        meshName: '',
        url: 'assets/mainWorld/',
        fileName: 'Tangs_VOD_High.glb',
      },
      {
        taskName: '',
        meshName: '',
        url: 'assets/mainWorld/',
        fileName: 'Wisma_VOD_High.glb',
      },
    ],
    teleports: [
      {
        name: 'panel_home',
        size: {
          height: 1,
          width: 1.5,
        },
        position: {x: 70, y: 0, z: 40},
        linkto: 'first-interior',
        rotate: 0,
      },
      {
        name: 'panel_world',
        size: {
          height: 1,
          width: 4,
        },
        position: {x: 50, y: 0, z: 70},
        linkto: 'first-interior',
        rotate: 270,
      },
      {
        name: 'panel_avatar',
        size: {
          height: 1,
          width: 3,
        },
        position: {x: 0, y: 0, z: 60},
        linkto: 'second-interior',
        rotate: 180,
      },
      {
        name: 'contact_us',
        size: {
          height: 1,
          width: 2,
        },
        position: {x: -140, y: 0, z: 60},
        linkto: 'first-interior',
        rotate: 90,
      },
    ],
    npc: [
      {
        key: 0,
        posCurrent: {x: -50, y: 0, z: 70},
        rotCurrent: {x: 0, y: 90, z: 0},
        url: 'assets/avatar/',
        file: 'animation-man.glb',
        scalNpc: 2,
        moveStyle: {
          timePerFrame: 30,
          loop: 'cycle',
          frames: [
            { distance: 50, name: 'move' },
            { time: 1, rotateY: Math.PI, name: 'rotation' },
            { distance: 50, name: 'move' },
            { time: 1, rotateY: Math.PI, name: 'rotation' },
          ],
        },
      },
      {
        key: 1,
        posCurrent: {x: 5, y: 0, z: 75},
        rotCurrent: {x: 0, y: 90, z: 0},
        url: 'assets/avatar/',
        file: 'animation-man.glb',
        scalNpc: 2,
        moveStyle: {
          timePerFrame: 30,
          loop: 'cycle',
          frames: [
            { distance: 50, name: 'move' },
            { time: 1, rotateY: Math.PI / 2, name: 'rotation' },
            { distance: 5, name: 'move' },
            { time: 1, rotateY: Math.PI / 2, name: 'rotation' },
            { distance: 50, name: 'move' },
            { time: 1, rotateY: Math.PI / 2, name: 'rotation' },
            { distance: 5, name: 'move' },
          ],
        },
      },
      {
        key: 2,
        posCurrent: {x: 40, y: 0, z: 65},
        rotCurrent: {x: 0, y: 90, z: 0},
        url: 'assets/avatar/',
        file: 'woman-catwalk.glb',
        scalNpc: 2,
      },
    ],
  },
  {
    key: 1,
    name: 'first-interior',
    genericSky: 'assets/skybox/equirectangular.jpg',
    loadScene: {
      url: 'assets/Interior/',
      fileName: 'firstInterior.gltf',
    },
    teleports: [
      {
        name: 'panel_home',
        size: {
          height: 1,
          width: 1.5,
        },
        position: {x: 0, y: 0, z: 14},
        linkto: 'main-world',
        rotate: 0,
      },
    ],
  },
  {
    key: 2,
    name: 'second-interior',
    genericSky: 'assets/skybox/equirectangular.jpg',
    loadScene: {
      url: 'assets/Interior/',
      fileName: 'secondInterior.gltf',
    },
    teleports: [
      {
        name: 'panel_home',
        size: {
          height: 1,
          width: 1.5,
        },
        position: {x: 0, y: 0, z: 9},
        linkto: 'main-world',
        rotate: 0,
      },
    ],
  },
];