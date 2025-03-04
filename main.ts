scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
        mySprite.x += 20
        level = 2
    }
})
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Harry`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`My Tile map`)
let mySprite2 = 0
