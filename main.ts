enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
    export const NPC6 = SpriteKind.create()
    export const NPC7 = SpriteKind.create()
    export const NPC8 = SpriteKind.create()
    export const NPC9 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    270,
    50,
    100,
    0,
    2.5
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (otherSprite == level_4_ghost) {
        timer.throttle("action", 3000, function () {
            level_4_ghost.sayText("Hello you have entered the shop, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == gray_line_head_ghost) {
        timer.throttle("action", 3000, function () {
            gray_line_head_ghost.sayText("Hello you have entered the cave, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == level_10_ghost) {
        timer.throttle("action", 3000, function () {
            level_10_ghost.sayText("Hello you have entered the cave, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == level_11_ghost) {
        timer.throttle("action", 3000, function () {
            level_11_ghost.sayText("Hello you have entered the cave, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == level_105_ghost) {
        timer.throttle("action", 3000, function () {
            level_105_ghost.sayText("Hello you have entered the cave, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == level_101_ghost) {
        timer.throttle("action", 3000, function () {
            level_101_ghost.sayText("Hello you have entered the Space craft, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == level_102_ghost) {
        timer.throttle("action", 3000, function () {
            level_102_ghost.sayText("Hello you have entered the Space craft, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == level_103_sprite) {
        timer.throttle("action", 3000, function () {
            level_103_sprite.sayText("Hello you have entered the Space craft, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == level_104_ghost) {
        timer.throttle("action", 3000, function () {
            level_104_ghost.sayText("Hello you have entered the Space craft, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == level_3_ghost) {
        timer.throttle("action", 3000, function () {
            level_3_ghost.sayText("Hello you have entered the Mega Cave, SIR HARRY", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile36, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 43))
        level_103_sprite = sprites.create(assets.image`Ghost3`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_103_sprite, myTiles.tile29)
        animation.runMovementAnimation(
        level_103_sprite,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 103
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile38, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Mega Cave`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 21))
        level_3_ghost = sprites.create(assets.image`Ghost10`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_3_ghost, myTiles.tile50)
        animation.runMovementAnimation(
        level_3_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 3
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile35, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 43))
        level_104_ghost = sprites.create(assets.image`Ghost6`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_104_ghost, myTiles.tile29)
        animation.runMovementAnimation(
        level_104_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 104
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile34, function (sprite, location) {
    if (level == 102) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        level = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 14))
    }
    if (level == 103) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        level = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 45))
    }
    if (level == 101) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        level = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(77, 60))
    }
    if (level == 104) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        level = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(52, 29))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile46, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(250, 300)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 43))
        level_102_ghost = sprites.create(assets.image`Ghost4`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_102_ghost, myTiles.tile29)
        animation.runMovementAnimation(
        level_102_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 102
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    180,
    50,
    100,
    0,
    2.5
    )
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile52, function (sprite, location) {
    if (level == 11) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(55, 52))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile40, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Shop`)
        mySprite.setPosition(400, 250)
        level_4_ghost = sprites.create(assets.image`Ghost1`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_4_ghost, myTiles.tile19)
        animation.runMovementAnimation(
        level_4_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 4
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile45, function (sprite, location) {
    if (level == 13) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(73, 12))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile44, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 18))
        level_11_ghost = sprites.create(assets.image`Ghost10`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_11_ghost, myTiles.tile50)
        animation.runMovementAnimation(
        level_11_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 11
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile37, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 43))
        level_101_ghost = sprites.create(assets.image`Ghost2`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_101_ghost, myTiles.tile29)
        animation.runMovementAnimation(
        level_101_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 101
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile42, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 21))
        gray_line_head_ghost = sprites.create(assets.image`Ghost8`, SpriteKind.NPC)
        tiles.placeOnRandomTile(gray_line_head_ghost, myTiles.tile50)
        animation.runMovementAnimation(
        gray_line_head_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 13
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    0,
    50,
    100,
    0,
    2.5
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    90,
    50,
    100,
    0,
    2.5
    )
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile41, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 20))
        level_105_ghost = sprites.create(assets.image`Ghost7`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_105_ghost, myTiles.tile50)
        animation.runMovementAnimation(
        level_105_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 105
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile43, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        level_10_ghost = sprites.create(assets.image`Ghost9`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_10_ghost, myTiles.tile50)
        animation.runMovementAnimation(
        level_10_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 10
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile53, function (sprite, location) {
    if (level == 10) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(31, 48))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile39, function (sprite, location) {
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(41, 33))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile51, function (sprite, location) {
    if (level == 105) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 10))
        level = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == EnemyGhost300) {
        timer.throttle("action", 3000, function () {
            EnemyGhost300.sayText("I'm ready for action!", 3500, true)
        })
    }
    if (otherSprite == EnemyGhost301) {
        timer.throttle("action", 3000, function () {
            EnemyGhost301.sayText("You've made me angry boy!", 3500, true)
        })
    }
    if (otherSprite == EnemyGhost302) {
        timer.throttle("action", 3000, function () {
            EnemyGhost302.sayText("You must be lost son, get out of here or fight me!", 3500, true)
        })
    }
    if (otherSprite == EnemyGhost303) {
        timer.throttle("action", 3000, function () {
            EnemyGhost303.sayText("You will pay for being here in my fields boy! ", 3500, true)
        })
    }
    if (otherSprite == EnemyGhost304) {
        timer.throttle("action", 3000, function () {
            EnemyGhost304.sayText("Your just a kid, you cant be here!", 3500, true)
        })
    }
})
let level_3_ghost: Sprite = null
let level_104_ghost: Sprite = null
let level_103_sprite: Sprite = null
let level_102_ghost: Sprite = null
let level_101_ghost: Sprite = null
let level_105_ghost: Sprite = null
let level_11_ghost: Sprite = null
let level_10_ghost: Sprite = null
let gray_line_head_ghost: Sprite = null
let level_4_ghost: Sprite = null
let level = 0
let EnemyGhost304: Sprite = null
let EnemyGhost303: Sprite = null
let EnemyGhost302: Sprite = null
let EnemyGhost301: Sprite = null
let EnemyGhost300: Sprite = null
let mySprite: Sprite = null
multilights.toggleLighting(true)
mySprite = sprites.create(assets.image`Harrison`, SpriteKind.Player)
multilights.addLightSource(
mySprite,
12,
12,
2.5
)
let anim = animation.createAnimation(ActionKind.Jumping, 1000)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`My Tile map`)
EnemyGhost300 = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
tiles.placeOnRandomTile(EnemyGhost300, myTiles.tile18)
EnemyGhost301 = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
tiles.placeOnRandomTile(EnemyGhost301, myTiles.tile18)
EnemyGhost302 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
tiles.placeOnRandomTile(EnemyGhost302, myTiles.tile18)
EnemyGhost303 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
tiles.placeOnRandomTile(EnemyGhost303, myTiles.tile18)
EnemyGhost304 = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
tiles.placeOnRandomTile(EnemyGhost304, myTiles.tile18)
level = 1
game.onUpdate(function () {
    if (level != 1) {
        sprites.destroy(EnemyGhost300)
    }
    if (level != 1) {
        sprites.destroy(EnemyGhost301)
    }
    if (level != 1) {
        sprites.destroy(EnemyGhost302)
    }
    if (level != 1) {
        sprites.destroy(EnemyGhost303)
    }
    if (level != 1) {
        sprites.destroy(EnemyGhost304)
    }
})
game.onUpdate(function () {
    if (level != 3) {
        sprites.destroy(level_3_ghost)
    }
    if (level != 4) {
        sprites.destroy(level_4_ghost)
    }
    if (level != 102) {
        sprites.destroy(level_102_ghost)
    }
    if (level != 103) {
        sprites.destroy(level_103_sprite)
    }
    if (level != 104) {
        sprites.destroy(level_104_ghost)
    }
    if (level != 101) {
        sprites.destroy(level_101_ghost)
    }
    if (level != 13) {
        sprites.destroy(gray_line_head_ghost)
    }
    if (level != 11) {
        sprites.destroy(level_11_ghost)
    }
    if (level != 10) {
        sprites.destroy(level_10_ghost)
    }
    if (level != 105) {
        sprites.destroy(level_105_ghost)
    }
})
