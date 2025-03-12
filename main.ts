namespace SpriteKind {
    export const NPC = SpriteKind.create()
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
        level = 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave1`)
        mySprite.setPosition(0, 310)
        level = 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(82, 68)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave2`)
        mySprite.setPosition(0, 310)
        level = 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Mega Cave`)
        mySprite.x += -650
        mySprite.y += -200
        level = 3
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
    if (level == 5) {
        tiles.setCurrentTilemap(tilemap`My Tile map`)
        mySprite.setPosition(250, 300)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave3`)
        mySprite.setPosition(0, 235)
        level = 5
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
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let MySprite6: Sprite = null
let mySprite4: Sprite = null
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
