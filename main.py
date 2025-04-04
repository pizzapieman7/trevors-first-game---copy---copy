class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
@namespace
class SpriteKind:
    NPC = SpriteKind.create()
    NPC1 = SpriteKind.create()
    NPC2 = SpriteKind.create()
    NPC3 = SpriteKind.create()
    NPC4 = SpriteKind.create()
    NPC5 = SpriteKind.create()
    NPC6 = SpriteKind.create()
    NPC7 = SpriteKind.create()
    NPC8 = SpriteKind.create()
    NPC9 = SpriteKind.create()
    enemysssssssss = SpriteKind.create()
    Key = SpriteKind.create()

def on_overlap_tile(sprite, location):
    global level_4_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Shop
            """))
        mySprite2.set_position(400, 250)
        level_4_ghost = sprites.create(assets.image("""
            Ghost1
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_4_ghost, assets.tile("""
            myTile17
            """))
        animation.run_movement_animation(level_4_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 4
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile38
        """),
    on_overlap_tile)

def on_up_pressed():
    multilights.remove_flashlight_source(mySprite2)
    multilights.add_flash_light_source(mySprite2, 270, 50, 100, 0, 2.5)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite2, otherSprite):
    if otherSprite == level_4_ghost:
        
        def on_throttle():
            level_4_ghost.say_text("Hello you have entered the shop, SIR HARRY", 3000, True)
        timer.throttle("action", 3000, on_throttle)
        
    if otherSprite == gray_line_head_ghost:
        
        def on_throttle2():
            gray_line_head_ghost.say_text("Hello you have entered the cave, SIR HARRY", 3000, True)
        timer.throttle("action", 3000, on_throttle2)
        
    if otherSprite == level_10_ghost:
        
        def on_throttle3():
            level_10_ghost.say_text("Hello you have entered the cave, SIR HARRY", 3000, True)
        timer.throttle("action", 3000, on_throttle3)
        
    if otherSprite == level_11_ghost:
        
        def on_throttle4():
            level_11_ghost.say_text("Hello you have entered the cave, SIR HARRY", 3000, True)
        timer.throttle("action", 3000, on_throttle4)
        
    if otherSprite == level_105_ghost:
        
        def on_throttle5():
            level_105_ghost.say_text("Hello you have entered the cave, SIR HARRY", 3000, True)
        timer.throttle("action", 3000, on_throttle5)
        
    if otherSprite == level_101_ghost:
        
        def on_throttle6():
            level_101_ghost.say_text("Hello you have entered the Space craft, SIR HARRY",
                3000,
                True)
        timer.throttle("action", 3000, on_throttle6)
        
    if otherSprite == level_102_ghost:
        
        def on_throttle7():
            level_102_ghost.say_text("Hello you have entered the Space craft, SIR HARRY",
                3000,
                True)
        timer.throttle("action", 3000, on_throttle7)
        
    if otherSprite == level_103_sprite:
        
        def on_throttle8():
            level_103_sprite.say_text("Hello you have entered the Space craft, SIR HARRY",
                3000,
                True)
        timer.throttle("action", 3000, on_throttle8)
        
    if otherSprite == level_104_ghost:
        
        def on_throttle9():
            level_104_ghost.say_text("Hello you have entered the Space craft, SIR HARRY",
                3000,
                True)
        timer.throttle("action", 3000, on_throttle9)
        
    if otherSprite == level_3_ghost:
        
        def on_throttle10():
            level_3_ghost.say_text("Hello you have entered the Mega Cave, SIR HARRY",
                3000,
                True)
        timer.throttle("action", 3000, on_throttle10)
        
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap)

def on_overlap_tile2(sprite3, location2):
    global level_103_sprite, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Space Craft
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(32, 43))
        level_103_sprite = sprites.create(assets.image("""
            Ghost3
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_103_sprite, assets.tile("""
            myTile27
            """))
        animation.run_movement_animation(level_103_sprite,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 103
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile34
        """),
    on_overlap_tile2)

def on_overlap_tile3(sprite4, location3):
    global level
    if level == 102:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        level = 1
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(13, 14))
    if level == 103:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        level = 1
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(8, 45))
    if level == 101:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        level = 1
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(77, 60))
    if level == 104:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        level = 1
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(52, 29))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile32
        """),
    on_overlap_tile3)

def on_overlap_tile4(sprite5, location4):
    global level_102_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Space Craft
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(32, 43))
        level_102_ghost = sprites.create(assets.image("""
            Ghost4
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_102_ghost, assets.tile("""
            myTile27
            """))
        animation.run_movement_animation(level_102_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 102
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
        """),
    on_overlap_tile4)

def on_down_released():
    multilights.remove_flashlight_source(mySprite2)
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_overlap_tile5(sprite6, location5):
    global level_104_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Space Craft
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(32, 43))
        level_104_ghost = sprites.create(assets.image("""
            Ghost6
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_104_ghost, assets.tile("""
            myTile27
            """))
        animation.run_movement_animation(level_104_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 104
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile33
        """),
    on_overlap_tile5)

def on_left_pressed():
    multilights.remove_flashlight_source(mySprite2)
    multilights.add_flash_light_source(mySprite2, 180, 50, 100, 0, 2.5)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile6(sprite7, location6):
    global level_11_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Cave4
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 18))
        level_11_ghost = sprites.create(assets.image("""
            Ghost10
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_11_ghost, assets.tile("""
            myTile48
            """))
        animation.run_movement_animation(level_11_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 11
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile42
        """),
    on_overlap_tile6)

def on_right_released():
    multilights.remove_flashlight_source(mySprite2)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    multilights.remove_flashlight_source(mySprite2)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile7(sprite8, location7):
    global level_105_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Cave1
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 20))
        level_105_ghost = sprites.create(assets.image("""
            Ghost7
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_105_ghost, assets.tile("""
            myTile48
            """))
        animation.run_movement_animation(level_105_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 105
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile39
        """),
    on_overlap_tile7)

def on_on_overlap2(sprite9, otherSprite2):
    pass
sprites.on_overlap(SpriteKind.player, SpriteKind.Key, on_on_overlap2)

def on_on_zero(status):
    sprites.destroy(status.sprite_attached_to())
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero)

def on_overlap_tile8(sprite10, location8):
    global level
    if level == 3:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(41, 33))
        level = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile37
        """),
    on_overlap_tile8)

def on_overlap_tile9(sprite11, location9):
    global level
    if level == 105:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(30, 10))
        level = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile49
        """),
    on_overlap_tile9)

def on_overlap_tile10(sprite12, location10):
    global gray_line_head_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Cave2
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 21))
        gray_line_head_ghost = sprites.create(assets.image("""
            Ghost8
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(gray_line_head_ghost, assets.tile("""
            myTile48
            """))
        animation.run_movement_animation(gray_line_head_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 13
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile40
        """),
    on_overlap_tile10)

def on_right_pressed():
    multilights.remove_flashlight_source(mySprite2)
    multilights.add_flash_light_source(mySprite2, 0, 50, 100, 0, 2.5)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile11(sprite13, location11):
    global level_3_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Mega Cave
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 21))
        level_3_ghost = sprites.create(assets.image("""
            Ghost10
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_3_ghost, assets.tile("""
            myTile48
            """))
        animation.run_movement_animation(level_3_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 3
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile36
        """),
    on_overlap_tile11)

def on_overlap_tile12(sprite14, location12):
    global level
    if level == 11:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(55, 52))
        level = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile50
        """),
    on_overlap_tile12)

def on_overlap_tile13(sprite15, location13):
    global level
    if level == 4:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        mySprite2.set_position(250, 300)
        level = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile44
        """),
    on_overlap_tile13)

def on_up_released():
    multilights.remove_flashlight_source(mySprite2)
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_overlap_tile14(sprite16, location14):
    global level
    if level == 13:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(73, 12))
        level = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile43
        """),
    on_overlap_tile14)

def on_down_pressed():
    multilights.remove_flashlight_source(mySprite2)
    multilights.add_flash_light_source(mySprite2, 90, 50, 100, 0, 2.5)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def enemySetup(mySprite: Sprite):
    global statusbar, statusbar2, statusbar3, statusbar4, statusbar5
    statusbar = statusbars.create(20, 4, StatusBarKind.enemy_health)
    statusbar.set_color(2, 12)
    statusbar.attach_to_sprite(EnemyGhost300)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.enemy_health)
    statusbar2.set_color(2, 12)
    statusbar2.attach_to_sprite(EnemyGhost301)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.enemy_health)
    statusbar3.attach_to_sprite(EnemyGhost302)
    statusbar3.set_color(2, 12)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.enemy_health)
    statusbar4.set_color(2, 12)
    statusbar4.attach_to_sprite(EnemyGhost303)
    statusbar5 = statusbars.create(20, 4, StatusBarKind.enemy_health)
    statusbar5.set_color(2, 12)
    statusbar5.attach_to_sprite(EnemyGhost304)

def on_overlap_tile15(sprite17, location15):
    global level_10_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Cave3
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(0, 14))
        level_10_ghost = sprites.create(assets.image("""
            Ghost9
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_10_ghost, assets.tile("""
            myTile48
            """))
        animation.run_movement_animation(level_10_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 10
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile41
        """),
    on_overlap_tile15)

def on_overlap_tile16(sprite18, location16):
    global level
    if level == 10:
        tiles.set_current_tilemap(tilemap("""
            My Tile map
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(31, 48))
        level = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile51
        """),
    on_overlap_tile16)

def on_overlap_tile17(sprite20, location17):
    global level_101_ghost, level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            Space Craft
            """))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(32, 43))
        level_101_ghost = sprites.create(assets.image("""
            Ghost2
            """), SpriteKind.NPC)
        tiles.place_on_random_tile(level_101_ghost, assets.tile("""
            myTile27
            """))
        animation.run_movement_animation(level_101_ghost,
            animation.animation_presets(animation.shake),
            2000,
            True)
        level = 101
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile35
        """),
    on_overlap_tile17)

def on_on_overlap4(sprite21, otherSprite4):
    info.change_life_by(-1)
    sprites.destroy(otherSprite4, effects.disintegrate, 500)
    scene.camera_shake(4, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap4)

statusbar5: StatusBarSprite = None
statusbar4: StatusBarSprite = None
statusbar3: StatusBarSprite = None
statusbar2: StatusBarSprite = None
statusbar: StatusBarSprite = None
level_3_ghost: Sprite = None
level_104_ghost: Sprite = None
level_103_sprite: Sprite = None
level_102_ghost: Sprite = None
level_101_ghost: Sprite = None
level_105_ghost: Sprite = None
level_11_ghost: Sprite = None
level_10_ghost: Sprite = None
gray_line_head_ghost: Sprite = None
level_4_ghost: Sprite = None
level = 0
EnemyGhost304: Sprite = None
EnemyGhost303: Sprite = None
EnemyGhost302: Sprite = None
EnemyGhost301: Sprite = None
EnemyGhost300: Sprite = None
mySprite2: Sprite = None
multilights.toggle_lighting(True)
mySprite2 = sprites.create(assets.image("""
    Harrison0
    """), SpriteKind.player)
multilights.add_light_source(mySprite2, 12, 12, 2.5)
controller.move_sprite(mySprite2, 150, 150)
scene.camera_follow_sprite(mySprite2)
tiles.set_current_tilemap(tilemap("""
    My Tile map
    """))
EnemyGhost300 = sprites.create(assets.image("""
    myImage1
    """), SpriteKind.enemy)
tiles.place_on_tile(EnemyGhost300, tiles.get_tile_location(16, 20))
enemySetup(EnemyGhost300)
EnemyGhost301 = sprites.create(assets.image("""
    myImage2
    """), SpriteKind.enemy)
tiles.place_on_tile(EnemyGhost301, tiles.get_tile_location(65, 20))
enemySetup(EnemyGhost301)
EnemyGhost302 = sprites.create(assets.image("""
    myImage3
    """), SpriteKind.enemy)
tiles.place_on_tile(EnemyGhost302, tiles.get_tile_location(25, 45))
enemySetup(EnemyGhost302)
EnemyGhost303 = sprites.create(assets.image("""
    myImage4
    """), SpriteKind.enemy)
tiles.place_on_tile(EnemyGhost303, tiles.get_tile_location(65, 50))
enemySetup(EnemyGhost303)
EnemyGhost304 = sprites.create(assets.image("""
    myImage5
    """), SpriteKind.enemy)
enemySetup(EnemyGhost304)
tiles.place_on_tile(EnemyGhost304, tiles.get_tile_location(40, 40))
level = 1
Key0 = sprites.create(img("""
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
        """),
    SpriteKind.Key)
tiles.place_on_tile(Key0, tiles.get_tile_location(8, 1))
NumberofKeys = 0
tiles.place_on_tile(Key0, tiles.get_tile_location(9, 9))

def on_on_update():
    if level != 1:
        sprites.destroy(EnemyGhost300)
    if level != 1:
        sprites.destroy(EnemyGhost301)
    if level != 1:
        sprites.destroy(EnemyGhost302)
    if level != 1:
        sprites.destroy(EnemyGhost303)
    if level != 1:
        sprites.destroy(EnemyGhost304)
game.on_update(on_on_update)

def on_on_update2():
    if level != 3:
        sprites.destroy(level_3_ghost)
    if level != 4:
        sprites.destroy(level_4_ghost)
    if level != 102:
        sprites.destroy(level_102_ghost)
    if level != 103:
        sprites.destroy(level_103_sprite)
    if level != 104:
        sprites.destroy(level_104_ghost)
    if level != 101:
        sprites.destroy(level_101_ghost)
    if level != 13:
        sprites.destroy(gray_line_head_ghost)
    if level != 11:
        sprites.destroy(level_11_ghost)
    if level != 10:
        sprites.destroy(level_10_ghost)
    if level != 105:
        sprites.destroy(level_105_ghost)
game.on_update(on_on_update2)

def on_forever():
    if spriteutils.distance_between(mySprite2, EnemyGhost300) < 100:
        EnemyGhost300.follow(mySprite2, 10)
    else:
        EnemyGhost300.follow(None)
    if spriteutils.distance_between(mySprite2, EnemyGhost301) < 100:
        EnemyGhost301.follow(mySprite2, 10)
    else:
        EnemyGhost301.follow(None)
    if spriteutils.distance_between(mySprite2, EnemyGhost302) < 100:
        EnemyGhost302.follow(mySprite2, 10)
    else:
        EnemyGhost302.follow(None)
    if spriteutils.distance_between(mySprite2, EnemyGhost303) < 100:
        EnemyGhost303.follow(mySprite2, 10)
    else:
        EnemyGhost303.follow(None)
    if spriteutils.distance_between(mySprite2, EnemyGhost304) < 100:
        EnemyGhost304.follow(mySprite2, 10)
    else:
        EnemyGhost304.follow(None)
forever(on_forever)
