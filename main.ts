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
    export const Key = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Shop`)
        mySprite2.setPosition(400, 250)
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
    multilights.removeFlashlightSource(mySprite2)
    multilights.addFlashLightSource(
    mySprite2,
    270,
    50,
    100,
    0,
    2.5
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite5, location4) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(32, 43))
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`left_projectile0`, mySprite2, 50, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite10, location8) {
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(41, 33))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite4, location3) {
    if (level == 102) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        level = 1
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(13, 14))
    }
    if (level == 103) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        level = 1
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 45))
    }
    if (level == 101) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        level = 1
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(77, 60))
    }
    if (level == 104) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        level = 1
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(52, 29))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite8, location7) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave1`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 20))
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`left_projectile`, mySprite2, -50, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite14, location12) {
    if (level == 11) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(55, 52))
        level = 1
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite2)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite2)
    multilights.addFlashLightSource(
    mySprite2,
    180,
    50,
    100,
    0,
    2.5
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite20, location17) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(32, 43))
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
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite2)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite12, location10) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave2`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 21))
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    NumberOfKeys += 1
    mySprite2.sayText("I got the key!", 500, false)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo())
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite11, location9) {
    if (level == 105) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(30, 10))
        level = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite2)
    multilights.addFlashLightSource(
    mySprite2,
    0,
    50,
    100,
    0,
    2.5
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite2, otherSprite) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite13, location11) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Mega Cave`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 21))
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite3, location2) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(32, 43))
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
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    multilights.removeFlashlightSource(mySprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite16, location14) {
    if (level == 13) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(73, 12))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite6, location5) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(32, 43))
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    multilights.removeFlashlightSource(mySprite2)
    multilights.addFlashLightSource(
    mySprite2,
    90,
    50,
    100,
    0,
    2.5
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite18, location16) {
    if (level == 10) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(31, 48))
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite15, location13) {
    if (level == 4) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite2.setPosition(250, 300)
        level = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite21, otherSprite4) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite4, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
function enemySetup (mySprite: Sprite) {
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(2, 12)
    statusbar.attachToSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite7, location6) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave4`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 18))
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite17, location15) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave3`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 14))
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    if (NumberOfKeys > 0) {
        tiles.setTileAt(location, assets.tile`myTile54`)
        tiles.setTileAt(tiles.getTileLocation(0, 3), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(3, 1), assets.tile`myTile16`)
        tiles.setTileAt(tiles.getTileLocation(3, 0), assets.tile`myTile16`)
        tiles.setWallAt(tiles.getTileLocation(0, 3), false)
        tiles.setWallAt(tiles.getTileLocation(1, 3), false)
        tiles.setWallAt(tiles.getTileLocation(2, 3), false)
        tiles.setWallAt(tiles.getTileLocation(3, 3), false)
        tiles.setWallAt(tiles.getTileLocation(3, 2), false)
        tiles.setWallAt(tiles.getTileLocation(3, 1), false)
        tiles.setWallAt(tiles.getTileLocation(3, 0), false)
        NumberOfKeys += -1
        mySprite2.sayText("I used the key!", 500, false)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -25
})
let statusbar: StatusBarSprite = null
let level_3_ghost: Sprite = null
let level_104_ghost: Sprite = null
let level_103_sprite: Sprite = null
let level_11_ghost: Sprite = null
let level_10_ghost: Sprite = null
let NumberOfKeys = 0
let gray_line_head_ghost: Sprite = null
let level_101_ghost: Sprite = null
let level_105_ghost: Sprite = null
let projectile: Sprite = null
let level_102_ghost: Sprite = null
let level_4_ghost: Sprite = null
let level = 0
let mySprite2: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff22222222222fffff222222222222222ffffff22222222222ffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff222222222222222ff222222222222222222f222222222222222222fffffffff222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff2222222222222222222222222fffff2222222222222222222222222222ffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff22222222f2ff22222222222fffffffffff2222222222ff2f2ff222222222ffff22222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff222222ffffffffffff222222fffffffffff22222222fffffffffff22222225fff22222fff2222255ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff2222222ffffffffffffff2222fff2222fffffff2222fffffffffffffff222222f552222fffff222225ff5ffffffff22ff2ffffffffffff2222222fffffffffffffffffffffffffffffffffffffff
    fff2222222fffffffffffffffff2f22222222ffffff222ffff2ff2fffffffff222225222222fffff22222555ffffff22222222222fffffffff222222222fffffffffffffffffffffffffffffffffffff
    fff22222ffffff222ffffffffff2f222222222fffff222f22222222222ffffff22222222222ffff2222255ff5fff222222222222222fffff22222222222fffffffffffffffffffffffffffffffffffff
    ff22222ffff2222222222ffffffff222222222fffffffff22222222222ffffff222222222ffff22222225555ffff2222222222222222fff2222222222225f55fffffffffffffffffffffffffffffffff
    ff22222fff2222222222222ffffff22222222222ffffff2222222222222fffff222222222fff2222225555ff5f2222222fffff222222fff22222fff22225f222ffffffffffffffffffffffffffffffff
    ff2222ff222222222222222ffffff22222222222ffffff2222255522222fffff222222222ff2222225555555ff22222ffff222fff22222522222ff22222552222222ffffffffffffffffffffffffffff
    ff2222f22222225552222222ffffff2222222222fffff222225555522222ffff222222222222222225555f55f22222ffff22222ff2222222222fff222225222222222fff222222ffffffffffffffffff
    222222f222225555555222222fffff22222222222fffff2222255522222fffffff2222222222222255555ffff2222222222222222f222222222fff22222222222222222222222222ffffffffffffffff
    222222f222225555522522222fffff22222222222fffff22222555522222ffff22222222222222225555f5ff22222222222222222f22222222ff222222222222f22222222222222222ffffffffffffff
    222222ff22225555f55f22222fffffff222222222fffff2222255222222fffffff222222222222225555f22222222222222222222f22222222ffff222222222ff22222222222222225ffffffffffffff
    ff2222f2222255525ffff2222fffff22222252222ffffff2222552222222ffff222222222fff222225ff52222222fff22222222fff222222ffff222222222ffff222222222fff222225fffffffffffff
    ff2222f22222225ffffff222222fffff2222522222ffff222222222222ff2222222222222ff222222255222222ffffffff22222ff222222ffffffffffff22ffff22222222ffff22222255fffffffffff
    ff22222f222222555ffff222222fffff222252222ffffff22222222ffff2222222222222ffff2222222222222ffffffffffffffff22222fffffffffffff2fffffff22222ffffff2222255f5fffffffff
    ff22222f222222555ffff222222fffff222252222ffffff22222222ffff2222222222222ffff2222222222222ffffffffffffffff22222fffffffffffff2fffffff22222ffffff2222255f5fffffffff
    ff22222fff222222fffff552222fffff2222522222fffff22222222ffff222222222222ffffffff222222222ff222ffffffffff22222fffffffffffffff2fffffff22fffffffffff222225ffffffffff
    fff22222ff2222222225f222222fffff2222222222ffff22222222ffff22222222222ffffffffff2222222fff222222fffffff2222222222ffffff2222222ffffff2ff222fffffff22222f5fffffffff
    fff22222fff222222222fff2222fffff2222522222fffff222222fffff2222252222f222fffff22222222ffff222222222ffff2222222222ffff22222222222ffffff22222fffffff222225fffffffff
    fff2222222ff22222222f222222fff222222222222fffff222222fffff22222522222222fffff2222222fffff2222222222ff22222222222ffff22222222222fffff22222222fffff22222555fffffff
    ffff22222222fff2222252222222ffff2222522222ffff2222222fffff22222522222222fffff22222222ffff22222222ff2222222522222ffffff222222222ffff222222222ffffff22222ff5ffffff
    ffffff222222222f22225ff2222fffff2222522222fffff222222fffff22222555222222ffff222222222fffff2222222ff2222222222222ffff22222552222fffff222222222fffff22222555ffffff
    fffffff22222222222225552222fff222222522222ffff2222222fffff22222555f52222fffff22222222fffffff222fffffff2222222222ffff22222222222ffff22222222222ffff2222255f5fffff
    ffffffff55222222222555522222ffff2222522222ffff2222222fffff22222555f22222ffff2222222222ffffff22fffffffff222222222ffffff222552222fffff2222522222fffff2222555ffffff
    ffffffffff5f222225555222222fff22222252222fffff2222222fffff222225555f22222ffff22222222222fffffff22ffffffff2222222ffff22222222222ffff22222522222ffff222225555ff5ff
    fffffffffff5555555555222222fff222222522222fff22222222fffff22222555f22222fffff222252222222fffff22222ffffff2222222ffff22222552222ffff22222552222fffff2222555ffffff
    fffffffffffffff5f555f552222fff22225552222ffff22222222fffff22222555f52222ffff2222255522222ffff22222222fffff222222ffffff222222222fffff222255222222ff222225555fffff
    ffffffffffff55f5f55f5222222ff222225522222ffff22222222fffff22222555ff2222fffff222255522222fff222222222fffff222222ffff22222552222ffff22222552222fffff2222555f55fff
    ffffffffffffffff2ffff222222ff222225522222ff2222222222fffff222225555f2222ffff2222222222222fff2222222222fff2222222ffff22222222222fffff222225222222ff222225555fffff
    ffffffffffff22222222f2222fff2222222222222ff2222222222fffff22222522f222222ffff22222222222ff222225522222ffff222222ffffff222222222ffff22222222222ffff22222555f55fff
    fffffffffff22222222222222fff222222222222ff22222222222fffff22222222222222fffff22222222222f2222225522222fff2222222ffff22222222222ffff22222222222ffff22225555ffffff
    ffffffffff222222222222222ff2222222222222ff22222552222fffff22222222222222ffff2222222222fff2222222222222fff2222222ffff22222222222fffff2222222222fff2222255555fffff
    ffffffff2222222f22222222fff222ff22222222f222225222222fffff22222222222222fffff2222222ffffffff222222222ff222222222ffffff222ff2222ffff222ff222222fff22222555f5fffff
    ffffffff222222ffffff2222f2222fffffff22fff222225222222ffffff22222ff222222fffff222f2222ffffffff22222222f222222222ffffffffff222222fffffffff222222fff222255555ffffff
    fffffff2222222fffffff22f22222fffffffffff22222555522222ffffff22ff222222222fffffff222222fffffffff222fff2222222222fffffffff22222ffffffff22222222fff222225555f5fffff
    fffffff2222222fffffff22f22222fffffffffff22222555522222ffffff22ff222222222fffffff222222fffffffff222fff2222222222fffffffff22222ffffffff22222222fff222225555f5fffff
    ffffff222222fffffffffff22222ffffffffff2222222555522222fffffffff222222222fffffff2222222222ffffffffff2222222222222fffffff222222ffffffff22222222fff222225555fffffff
    ffffff22222fff2ffffff222222ff2fffffff222222555555222222ffffffff2222222222ffff2222222222222fffffff222222225522222222fff2222222222ffff22222222ff222225555225ffffff
    ffffff22222f22222ffff222222f22222fff22222255555ff2222222ffff222222222222222ff222225522222222ff2222222225555222222222222222222222fff222222222ff222225555fffffffff
    ffffff2222222222222f22222222222222ff22222555555fff22222222f222222225522222222222255552222222222222222555555522222222222225522222222222222222f222225555555fffffff
    fffffff222222222222222222222222222222222555552f55ffff222222222222255555222222222255555552222222222555555552f55f222222222555522222222222222fff222225555fff5ffffff
    ffffffff22222222222222225222222222222222555555fffffff52222222225555552222222222255555f55f52222222555555225f5ff5f5522222555555222222222222fff22222555552fffffffff
    ffffffffff525552222222255555552222222255555fff5ffffffff2222222255555f55f522222255555f5ff5f2222555555552ff5ffffff55f555555555f552222222222f22222255555f5fffffffff
    fffffffffff5ff5555555555555525555255555555255fffffffff5f552555555555fffff55f55555555ffffff55f55555522f5fffffffffff5f55255ff5f55f55522222f222222255555fffffffffff
    fffffffffff5ff5f52255555522f5f55f55555555f5fffffffffffff55f5555555ff5ffffff525555f55f5ffffff5f5ff5f55fffffffffffffffff5f5ff5fffff2222222f222225555255fffffffffff
    ffffffffffffff5ff55ff55f5ff5f5ff5fff5f55f5ffffffffffffffff5f55f5ff5ffffffffff55f5ffffffffffffff55f5ffffffffffffffff5fff5ffffffff222222ff22222255555fff5fffffffff
    ffffffffffffffffffff5fff5fffffffff55ff55ffffffffffffffffffffff5ffffffffffff5ffffff55ffffffffffffffffffffffffffffffffffffffffffff22222fff2222255555f55fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffff22222222222255555f5fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222225555555fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222225555ff5fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222225555555ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f5555555fff5fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ff55ffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffff
    fffffffffffffff22222522225522fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f55ffffffffffffffffffffffff
    fffffffffffffff22222522225522fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f55ffffffffffffffffffffffff
    fffffffffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff
    ffffffffff22222222222222222222222255ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff222222222222f22222222222222222222f5222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff22222222fffffffffffffff22222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff22222222fffffffffffffffffffff22222222222222ff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffff22222222fffffffffff
    fff2222222ffffff2fffffffffffffffffff2222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55222222552fffffffff222222222ffffffffff
    fff22222ffff222222222222ffffffffffffff2222f2222555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222ffffff22222222225fffffffff
    ff22222fff222222222222222222ffffffffffffff22222225f55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff52222222222222222ffff5222222222255f5fffff
    ff22222f22222222222222222222f2fffffffffff2222225555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222fffff22222225f222222ff22225ff5ffffff
    ff2222ff22222225555222222fff22222fffffff2222225555f55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffff22fff222225222222f22222555fffffff
    222222f222222255555222222ff222222222ff2222222555555fff5f2225222fffffffff2222ffff22222ffffffffffffff2222fffffffffffffff22222ff222222f2222222222fff2222255555fffff
    222222f22222555552222222f222222222222222222555555f5ff2f222222222fffffff522222ff5222222fffffffffff222222222ffffffffff5522222222222222f222222222fff22222555fffffff
    222222f2222255552222222ff2222222222222222255555225f2222222222222ff5ff2222222222222222255fffffff222222222225ffffffff22222222222222222f22222222ffff222222225f55fff
    222222f22222555522222fff22222555522222222555552ff22222222222222222f5f22222222222222222222f55ff2222222222222f55ffff522222222222222222f22222222fff22222222222fffff
    222222ff2222225f2222ffff22225555552222555552222222222222ffff2222225f22222ff2222222ff22225fff5222222fff222222ffff5522222fffff22222222f2222222fffff2222222222fffff
    ff2222f2222222222222fff2222252222222555555222222222222ffffff2222225222222fff22222fff22222522222222fffff222225552222222fffffff222222ff22222ffffffffffff22222555ff
    ff22222fff222222222ffff22222222222222f552f22222222ffff2fffff222222222222ffff2222fffff222222222222ffffffff22222f22222ffffffffffffffff22222fffffffffffff2222255f5f
    ff222222fff22222222ffff222222222222222222522222ffff2222fffffff222222222ffffff222ffffff222222222ff22ffffff2222222222fff222ffffffffff222222fffffffffffff22222555ff
    fff22222222f2222222ffff2222222222f222222222222ffff222222fffffff222222ffffffff22fffffff2222222ff2222fffffff22222222ff2222222ffffffff222222222ffff22222222222555f5
    fff22222222f2222222ffff2222222222f222222222222ffff222222fffffff222222ffffffff22fffffff2222222ff2222fffffff22222222ff2222222ffffffff222222222ffff22222222222555f5
    ffff222222222222222fffff222222ffff222222222222fffff2222222fffff222222222fffffff2fffff22222222ff222222fffff222222fff222222222222ff22222222222fffff2222222225555ff
    ffffff2222222222222ffffff22222fffffff222222222ffff22222222ffffff22222222fffffff22ffff2222222fff222222ffffff22222ffff222222222fff2222222222222ffff2222222225555f5
    ffffff2222222222222ffffff222ffffffffff22222222fffff22222222fffff222222222ffff22222ff222222fffff2222222fffff22222ffffff2222222ff2222225222222ffff2222225225555f5f
    ffffffff552222222222fffffff2f2ffffff2222222222ffff2222222222ffffff222222fffff2222222222222fffff22222222ffff22222ffffff222222ffff222222552222fffff2222555555555ff
    ffffffffff5255222222ffffffff22222f222222222222fffff222222222ffffff2222222ffff222222222222222fff22222222fff22222222fffff2222ffffff22222222222ffff2222255555f55fff
    ffffffff5522222222222fffffff222222222222252222ffff222225222222ffff222222fffff2222222222222ffff22222222fff222222222ffffff222ffffffff2222222222ffff2222555525fff5f
    fffffff2222222222222222ffffff22222222255522222fffff22225222222fffff222222ffff222225525222222fff222222ff222222222222fffff2ff2ffffffff22222222fffff22222555fffffff
    ffffff22222222222222222fffffff2222222255522222ffff222225222222ffff222222fffff2222255552222fffff2222ff222222255222222fffff222222ffffff2222222ffff2222255ff5ffffff
    ffff2222222fffff22222222ffffffff22222555522222fffff22225552222ffff2222222ffff222255555222222fff222f22222222555522222ffff22222222fffff2222222fffff22225555ff55fff
    ffff222222ff222ff22222222ffffffff2222255522222ffff222225222222ffff222222fffff2222255522222fffff22f222222225555552222ffff222222222ffff22222222ffff222255225ffffff
    ffff222222f22222fff22222222ffffff2222222522222ffff222225222222ff222222222ffff2222522222222fffffff2222222222222522222ff22222222222ffff2222222ffff222222255fffffff
    ffff2222222222222ff222222222ffffff2222225f2222fffff22225222222ff22222222fffff222222222222222fff222222222222222222222ff22222252222ffff2222222fffff22222222fffffff
    ffff222222222222fff222222222ffffffff2222222222ffff222222222222f2222222222ffff2222222222222fffff22222222222222222222f2222222522222fff222222222ffff222222225f55fff
    ffffff2222222222fff2222222222fffffff2222222222fffff222222222fff222222222fffff222222222222222fffff22222222222222222ffff22222222222fff22222222ffff22222222222fffff
    ffffffff2222222ffff22225222222ffffff2222222222fffff22222222fff2222222222fffff2222222f22222fffffff222222222f2222ffffffff2222222222ff222222222fffff2222f2222255fff
    fffffff2222222fff2222225522222fffffff22222222fffffffff22222f222222222222fffff22222ff22222222ffffff22222fff222222fffffffff2222222fff222222222fffffffff22222255f5f
    fffffff22222fffff222222555522222fffff22222222ffffffffffffff222222222222fffffffffff22222222222ffffffffffff222222222fffffffff22fff2222222222fffffffff22222225555ff
    ffffff222222ffff2222255555522222fffff222222222222fffffffff22222255222222fffffffff222222222222ffffffffff2222222222222fffffffffff2222222222222ffffff22222222555f5f
    ffffff22222ffff2222225555ff222222fffff2222222222222fffff2222222555522222222fffff222222225222222fffffff2222225522222222ffffff222222222522222222fff2222225555555ff
    ffffff22222ffff2222225555ff222222fffff2222222222222fffff2222222555522222222fffff222222225222222fffffff2222225522222222ffffff222222222522222222fff2222225555555ff
    ffffff22222ffff2222255555ff522222ffff22222222222222222f2222222555552222222222ff222222555522222222ffff2222225555222222222f222222222255555222222222222222555555f5f
    ffffff2222ffff2222255555f55f22222ffff222225552222222222222225555555f522222222ff2222225555555222222222222225555555522222222222222555555552222222222222555555ff5ff
    ffffff22222fff2222255555ffff22222ffff222225555555222222222255555225ff55f22222222225555555f55f222222222222555555f55f5222222222225555552ff5f2222222222255555f55fff
    ffffff22222fff222555555f5fff2222fffff22225555f5ff522222222555555ff5ffff52222222222555555f5ff2522222222255555ff5fff5f2222222255555555f5fff5ff5222225555555f5fffff
    fffffff2222fff2222225ff5fff222222fff222225555f5ff5f5522555555525fffffffff5522222555555ff5ffffff5522222555555ff5ffff5ff5225555555522f5f55fffff5225555555ff5ffffff
    fffffff22222ff222222222222222222ffff222225555f5fff5ff555555255ff55fffffffff5f55555555f55ffffff5ff255555555f5fffffffffff5f5555552f55fffffffffff55f5255f5fffffffff
    fffffff22222fff222222222222222ffff222222555ff5ffffffffff55f5ff5fffffffff5fff5ff55f55f5ffffffffffff5ff55555f5ffffffffffff5ff5f55f5fffffffffffffff5f5ff5f55fffffff
    ffffffff222222fff222222222222ffff2222222555ffffffffff5f5ff5fffffffffffffffffffff5f55fffffffffffffff55f5fff5ffffffffffffff55f5ffffffffffffffff5fffff55fffffffffff
    ffffffff22222222fff2f222222fffff2222225555555ffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffff55ffffffffffffff5fffffff5ffffffffffffffffffffffffffffffff
    ffffffffff222222222fffffffff22222222255555ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff222222222222222222222222255555f5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff55222222222222222222225555555f5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff522222222222222255555555225fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff555252222552555555555f55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff5ff55f55555555555555ff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff5f55f555f55ff5f55f5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff55ff55f5f55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
class ActionKind {
    static Walking: number
    private ___Walking_is_set: boolean
    private ___Walking: number
    get Walking(): number {
        return this.___Walking_is_set ? this.___Walking : ActionKind.Walking
    }
    set Walking(value: number) {
        this.___Walking_is_set = true
        this.___Walking = value
    }
    
    static Idle: number
    private ___Idle_is_set: boolean
    private ___Idle: number
    get Idle(): number {
        return this.___Idle_is_set ? this.___Idle : ActionKind.Idle
    }
    set Idle(value: number) {
        this.___Idle_is_set = true
        this.___Idle = value
    }
    
    static Jumping: number
    private ___Jumping_is_set: boolean
    private ___Jumping: number
    get Jumping(): number {
        return this.___Jumping_is_set ? this.___Jumping : ActionKind.Jumping
    }
    set Jumping(value: number) {
        this.___Jumping_is_set = true
        this.___Jumping = value
    }
    
    public static __initActionKind() {
        ActionKind.Walking = 0
        ActionKind.Idle = 1
        ActionKind.Jumping = 2
    }
    
}
ActionKind.__initActionKind()
multilights.toggleLighting(true)
mySprite2 = sprites.create(assets.image`Harrison0`, SpriteKind.Player)
mySprite2.startEffect(effects.starField)
mySprite2.sayText("This is a great day", 3000, false)
characterAnimations.loopFrames(
mySprite2,
[img`
    . . . . 1 1 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 1 . . . 
    . 1 1 5 1 1 1 c 1 1 1 . . 
    1 1 5 6 5 1 c c 1 1 1 c . 
    1 1 1 5 1 1 1 1 1 1 5 c . 
    c c c 1 1 1 4 4 1 5 6 5 . 
    1 1 1 1 1 4 4 1 1 c 5 1 . 
    1 1 1 b f 4 4 f b 1 1 1 . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f 4 4 4 4 4 4 4 4 f . . 
    . f f f 3 7 7 3 f f f . . 
    f 4 f 6 3 6 6 3 6 f 4 f . 
    4 4 f 7 3 7 7 3 7 f 4 4 . 
    4 4 f 6 3 6 6 3 6 f 4 4 . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 . . 
    . . 1 1 5 1 1 1 c 1 1 1 . 
    1 1 1 5 6 5 1 c c 1 1 1 c 
    1 1 1 1 5 1 1 1 1 1 1 5 c 
    . c c c 1 1 1 4 4 1 5 6 5 
    . 1 1 1 1 1 4 4 1 1 c 5 1 
    . 1 1 1 b f 4 4 f b 1 1 1 
    . 1 f 4 1 f 4 4 f 1 4 1 1 
    . . f 4 4 4 4 4 4 e e 1 e 
    . f 4 f 7 3 7 3 e 4 4 4 e 
    . e 4 f 6 3 6 3 e 4 4 e . 
    . . . f 7 3 7 3 7 e e . . 
    . . . f f f f f f f . . . 
    . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . 1 1 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 c 1 1 1 1 1 1 . . 
    c 1 1 1 c c 1 1 5 1 1 1 1 
    c 5 1 1 1 1 1 5 6 5 1 1 1 
    5 6 5 1 4 4 1 1 5 c c c . 
    1 5 c 1 1 4 4 1 1 1 1 1 . 
    1 1 1 b f 4 4 f b 1 1 1 . 
    1 1 4 1 f 4 4 f 1 4 f 1 . 
    e 1 e e 4 4 4 4 4 4 f . . 
    e 4 4 4 e 3 7 3 7 f 4 f . 
    . e 4 4 e 3 6 3 6 f 4 e . 
    . . e e 7 3 7 3 7 f . . . 
    . . . f f f f f f f . . . 
    . . . . . . . f f f . . . 
    `],
100,
characterAnimations.rule(Predicate.FacingDown)
)
characterAnimations.loopFrames(
mySprite2,
assets.animation`myAnim1`,
100,
characterAnimations.rule(Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite2,
assets.animation`myAnim2`,
100,
characterAnimations.rule(Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite2,
assets.animation`myAnim`,
200,
characterAnimations.rule(Predicate.FacingUp)
)
multilights.addLightSource(
mySprite2,
12,
12,
2.5
)
controller.moveSprite(mySprite2, 150, 150)
scene.cameraFollowSprite(mySprite2)
tiles.setCurrentTilemap(tilemap`My Tile map`)
let EnemyGhost300 = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
tiles.placeOnTile(EnemyGhost300, tiles.getTileLocation(16, 20))
enemySetup(EnemyGhost300)
let EnemyGhost301 = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
tiles.placeOnTile(EnemyGhost301, tiles.getTileLocation(65, 20))
enemySetup(EnemyGhost301)
let EnemyGhost302 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
tiles.placeOnTile(EnemyGhost302, tiles.getTileLocation(25, 45))
enemySetup(EnemyGhost302)
let EnemyGhost303 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
tiles.placeOnTile(EnemyGhost303, tiles.getTileLocation(65, 50))
enemySetup(EnemyGhost303)
let EnemyGhost304 = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
enemySetup(EnemyGhost304)
tiles.placeOnTile(EnemyGhost304, tiles.getTileLocation(40, 40))
level = 1
let Key0 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ............fffff...............
    ...........f55555f..............
    ..........f45fff54f.............
    ..........f5f...f5f.............
    ..........f5f...f5f.............
    ..........f5f...f5f.............
    ..........f55fff45f.............
    ...........f54555f..............
    ............ff5ff...............
    .............f5f................
    .............f5f................
    .............f5f................
    .............f4f................
    .............f5f................
    .............f5ffff.............
    .............f5554f.............
    .............f5ffff.............
    .............f5f................
    .............f4f................
    .............f5ffff.............
    .............f5545f.............
    .............ffffff.............
    ................................
    ................................
    `, SpriteKind.Key)
tiles.placeOnTile(Key0, tiles.getTileLocation(8, 1))
let NumberofKeys = 0
tiles.placeOnTile(Key0, tiles.getTileLocation(9, 9))
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
    if (spriteutils.distanceBetween(mySprite2, EnemyGhost300) < 100) {
        EnemyGhost300.follow(mySprite2, 10)
    } else {
        EnemyGhost300.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite2, EnemyGhost301) < 100) {
        EnemyGhost301.follow(mySprite2, 10)
    } else {
        EnemyGhost301.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite2, EnemyGhost302) < 100) {
        EnemyGhost302.follow(mySprite2, 10)
    } else {
        EnemyGhost302.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite2, EnemyGhost303) < 100) {
        EnemyGhost303.follow(mySprite2, 10)
    } else {
        EnemyGhost303.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite2, EnemyGhost304) < 100) {
        EnemyGhost304.follow(mySprite2, 10)
    } else {
        EnemyGhost304.follow(null)
    }
})
