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
    export const enemysssssssss = SpriteKind.create()
}
function enemySetup4 (mySprite: Sprite) {
    statusbar = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(2, 12)
    statusbar.attachToSprite(EnemyGhost302)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Shop`)
        mySprite.setPosition(400, 250)
        level_4_ghost = sprites.create(assets.image`Ghost1`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_4_ghost, assets.tile`myTile17`)
        animation.runMovementAnimation(
        level_4_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 4
    }
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 43))
        level_103_sprite = sprites.create(assets.image`Ghost3`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_103_sprite, assets.tile`myTile27`)
        animation.runMovementAnimation(
        level_103_sprite,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 103
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 43))
        level_102_ghost = sprites.create(assets.image`Ghost4`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_102_ghost, assets.tile`myTile27`)
        animation.runMovementAnimation(
        level_102_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 102
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
function enemySetup2 (mySprite: Sprite) {
    statusbar = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(2, 12)
    statusbar.attachToSprite(EnemyGhost301)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 43))
        level_104_ghost = sprites.create(assets.image`Ghost6`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_104_ghost, assets.tile`myTile27`)
        animation.runMovementAnimation(
        level_104_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 104
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 18))
        level_11_ghost = sprites.create(assets.image`Ghost10`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_11_ghost, assets.tile`myTile48`)
        animation.runMovementAnimation(
        level_11_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 11
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 20))
        level_105_ghost = sprites.create(assets.image`Ghost7`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_105_ghost, assets.tile`myTile48`)
        animation.runMovementAnimation(
        level_105_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 105
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo())
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(41, 33))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    if (level == 105) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 10))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 21))
        gray_line_head_ghost = sprites.create(assets.image`Ghost8`, SpriteKind.NPC)
        tiles.placeOnRandomTile(gray_line_head_ghost, assets.tile`myTile48`)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Mega Cave`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 21))
        level_3_ghost = sprites.create(assets.image`Ghost10`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_3_ghost, assets.tile`myTile48`)
        animation.runMovementAnimation(
        level_3_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 3
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    if (level == 11) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(55, 52))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(250, 300)
        level = 1
    }
})
function enemySetup3 (mySprite: Sprite) {
    statusbar = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(2, 12)
    statusbar.attachToSprite(EnemyGhost303)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    if (level == 13) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(73, 12))
        level = 1
    }
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
function enemySetup5 (mySprite: Sprite) {
    statusbar = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(2, 12)
    statusbar.attachToSprite(EnemyGhost304)
}
function enemySetup (mySprite: Sprite) {
    statusbar = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(2, 12)
    statusbar.attachToSprite(EnemyGhost300)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        level_10_ghost = sprites.create(assets.image`Ghost9`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_10_ghost, assets.tile`myTile48`)
        animation.runMovementAnimation(
        level_10_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 10
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    if (level == 10) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(31, 48))
        level = 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -5
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 43))
        level_101_ghost = sprites.create(assets.image`Ghost2`, SpriteKind.NPC)
        tiles.placeOnRandomTile(level_101_ghost, assets.tile`myTile27`)
        animation.runMovementAnimation(
        level_101_ghost,
        animation.animationPresets(animation.shake),
        2000,
        true
        )
        level = 101
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
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
let statusbar: StatusBarSprite = null
let level = 0
let EnemyGhost304: Sprite = null
let EnemyGhost303: Sprite = null
let EnemyGhost302: Sprite = null
let EnemyGhost301: Sprite = null
let EnemyGhost300: Sprite = null
let mySprite: Sprite = null
multilights.toggleLighting(false)
mySprite = sprites.create(assets.image`Harrison0`, SpriteKind.Player)
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
tiles.placeOnTile(EnemyGhost300, tiles.getTileLocation(16, 20))
enemySetup(EnemyGhost300)
EnemyGhost301 = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
tiles.placeOnTile(EnemyGhost301, tiles.getTileLocation(65, 20))
enemySetup(EnemyGhost301)
EnemyGhost302 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
tiles.placeOnTile(EnemyGhost302, tiles.getTileLocation(25, 45))
enemySetup(EnemyGhost302)
EnemyGhost303 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
tiles.placeOnTile(EnemyGhost303, tiles.getTileLocation(65, 50))
enemySetup(EnemyGhost303)
EnemyGhost304 = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
enemySetup(EnemyGhost304)
tiles.placeOnTile(EnemyGhost304, tiles.getTileLocation(40, 40))
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
forever(function () {
    if (spriteutils.distanceBetween(mySprite, EnemyGhost300) < 100) {
        EnemyGhost300.follow(mySprite, 10)
    } else {
        EnemyGhost300.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, EnemyGhost301) < 100) {
        EnemyGhost301.follow(mySprite, 10)
    } else {
        EnemyGhost301.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, EnemyGhost302) < 100) {
        EnemyGhost302.follow(mySprite, 10)
    } else {
        EnemyGhost302.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, EnemyGhost303) < 100) {
        EnemyGhost303.follow(mySprite, 10)
    } else {
        EnemyGhost303.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, EnemyGhost304) < 100) {
        EnemyGhost304.follow(mySprite, 10)
    } else {
        EnemyGhost304.follow(null)
    }
})
