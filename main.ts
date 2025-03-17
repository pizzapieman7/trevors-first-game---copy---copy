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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Shop`)
        mySprite.setPosition(400, 250)
        level = 4
        mySprite2 = sprites.create(assets.image`Ghost1`, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile17`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (otherSprite == mySprite2) {
        timer.throttle("action", 3000, function () {
            mySprite2.sayText("Hello you have entered the shop, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == gray_line_head_ghost) {
        timer.throttle("action", 3000, function () {
            gray_line_head_ghost.sayText("Hello you have entered the cave, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == MySprite6) {
        timer.throttle("action", 3000, function () {
            MySprite6.sayText("Hello you have entered the Space craft, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == mySprite9) {
        timer.throttle("action", 3000, function () {
            mySprite9.sayText("Hello you have entered the cave, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == mySprite7) {
        timer.throttle("action", 3000, function () {
            mySprite7.sayText("Hello you have entered the cave, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == mySprite8) {
        timer.throttle("action", 3000, function () {
            mySprite8.sayText("Hello you have entered the cave, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == mySprite3) {
        timer.throttle("action", 3000, function () {
            mySprite3.sayText("Hello you have entered the Space craft, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == mySprite4) {
        timer.throttle("action", 3000, function () {
            mySprite4.sayText("Hello you have entered the Space craft, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == mySprite5) {
        timer.throttle("action", 3000, function () {
            mySprite5.sayText("Hello you have entered the Space craft, SIR HARRY", 3000, true)
        })
    }
    if (otherSprite == mySprite11) {
        timer.throttle("action", 3000, function () {
            mySprite11.sayText("Hello you have entered the Mega Cave, SIR HARRY", 3000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        mySprite.x += 375
        mySprite.y += 50
        level = 2
        mySprite4 = sprites.create(assets.image`Ghost3`, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile27`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.x += 20
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        mySprite.x += 300
        mySprite.y += 450
        level = 2
        MySprite6 = sprites.create(assets.image`Ghost4`, SpriteKind.NPC)
        tiles.placeOnRandomTile(MySprite6, assets.tile`myTile27`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        mySprite.x += -300
        mySprite.y += 250
        level = 2
        mySprite3 = sprites.create(assets.image`Ghost6`, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile27`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave4`)
        mySprite.setPosition(0, 310)
        level = 11
        mySprite8 = sprites.create(assets.image`Ghost10`, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite8, assets.tile`myTile48`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave1`)
        mySprite.setPosition(0, 310)
        level = 12
        mySprite9 = sprites.create(assets.image`Ghost7`, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite9, assets.tile`myTile48`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(82, 68)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    if (level == 12) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(250, 300)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave2`)
        mySprite.setPosition(0, 310)
        level = 13
        gray_line_head_ghost = sprites.create(assets.image`Ghost8`, SpriteKind.NPC)
        tiles.placeOnRandomTile(gray_line_head_ghost, assets.tile`myTile48`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Mega Cave`)
        mySprite.x += -650
        mySprite.y += -200
        level = 3
        mySprite11 = sprites.create(assets.image`Ghost10`, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite11, assets.tile`myTile48`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    if (level == 11) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(250, 300)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    if (level == 13) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(250, 300)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave3`)
        mySprite.setPosition(0, 235)
        level = 10
        mySprite7 = sprites.create(assets.image`Ghost9`, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite7, assets.tile`myTile48`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    if (level == 10) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(250, 300)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Space Craft`)
        mySprite.setPosition(200, 120)
        level = 2
        mySprite5 = sprites.create(assets.image`Ghost2`, SpriteKind.NPC)
        tiles.placeOnRandomTile(mySprite5, assets.tile`myTile27`)
    }
})
let mySprite11: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite9: Sprite = null
let MySprite6: Sprite = null
let gray_line_head_ghost: Sprite = null
let mySprite2: Sprite = null
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Harry`, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`My Tile map`)
level = 1
game.onUpdate(function () {
    if (level == 1) {
        sprites.destroy(mySprite2)
    }
    if (level != 4) {
        sprites.destroy(mySprite2)
    }
})
