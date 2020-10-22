namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const KillerNPC = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    game.splash("Shop keeper: Welcome good sir would you like a battle? no??? TO BAD")
    tiles.setTilemap(tiles.createTilemap(hex`1000100009090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090902010101010101010101010101070909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a0609090405050505050505050505050508090909090909090909090909090909090909090909090909090909090909090909`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile8,myTiles.tile9,myTiles.tile15,sprites.dungeon.darkGroundCenter,myTiles.tile1], TileScale.Sixteen))
    mySprite.setPosition(100, 100)
    mySprite4.destroy()
    Killer_npc_1 = sprites.create(img`
        ......ffff.............
        ....fff22fff...........
        ...fff2222fff..........
        ..fffeeeeeefff.........
        ..ffe222222eef.........
        ..fe2ffffff2ef.........
        ..ffffeeeeffff......ccc
        .ffefbf44fbfeff....cddc
        .ffefbf44fbfeff...cddc.
        .fee4dddddd4eef.ccddc..
        fdfeeddddd4eeffecddc...
        fbffee4444ee4fddccc....
        fbf4f222222f1edde......
        fcf.f222222f44ee.......
        .ff.f445544f...........
        ....ffffffff...........
        .....ff..ff............
        `, SpriteKind.KillerNPC)
    Killer_npc_1.follow(mySprite)
    Killer_npc_1.setPosition(200, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.KillerNPC, function (sprite, otherSprite) {
    Killer_npc_1.destroy()
    info.changeLifeBy(-1)
    game.splash("BETA IS OVER")
    game.splash("Game will reset")
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite3.destroy()
    info.setLife(2)
    tiles.setTilemap(tiles.createTilemap(hex`3200320001010101010101010101010101010101060606060606060606060606060606060606060606060606060606060606060606060103030303030303030303030303030106060606060606060606060606060606060606060606060606060606060606060606010103030303030303030303030301010606060606060606060606060606060606060606060606060606060606060606060606010103030303030303030303010106060606060606060606060606060606060606060606060606060606060606060606060606010103040503030303030101060606060606060606060606060606060606060606060606060606060606060606060606060606010103030303030301010606060606060606060606060606060606060606060606060606060606060606060606060606060607010303030303030106060606060606060606060606060606060606060606060606060606060606060606060606060606060701030303030303010606060606060606060606060606060606060606060606060606060606060606060606060606060606070103030303030301060606060606060606060606060606060606060606060606060606060606060606060606060607070707010303030303030106060606060606060606060606060606060606060606060606060606060606060606060606060101010101030303030303010101010106060606060606060606060606060606060101010101010101010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a0106060606060606060103030303030303030303030303030106060606060606060606060606060606060101010101010a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010b08080808080808080808080808080808010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303020b08080808080808080808080808080808090a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010b08080808080808080808080808080808010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a0106060606060606060103030303030303030303030303030106060606060606060606060606060606060101010101010101010606060606060606010303030303030303030303030303010606060606060606060606060606060606060606060606060606060606060606060601030303030303030303030303030301060606060606060606060606060606060606060606060606060606060606060606060101010101010101010101010101010106060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606`, img`
        2222222222222222..................................
        2..............2..................................
        22............22..................................
        .22..........22...................................
        ..22........22....................................
        ...22......22.....................................
        ....2......2......................................
        ....2......2......................................
        ....2......2......................................
        ....2......2......................................
        22222......22222.................222222222........
        2..............2.................2.......2........
        2..............2.................2.......2........
        2..............2.................2.......2........
        2..............2.................2.......2........
        2..............2.................2.......2........
        2........................................2........
        2..............2.................2.......2........
        2..............2.................2.......2........
        2..............2.................2.......2........
        2..............2.................2.......2........
        2..............2.................2.......2........
        2..............2.................222222222........
        2..............2..................................
        2..............2..................................
        2222222222222222..................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile7,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.dungeon.darkGroundCenter,myTiles.tile5,myTiles.tile10,sprites.dungeon.darkGroundWest], TileScale.Sixteen))
    mySprite.setPosition(100, 80)
    game.splash("You: what was that?")
    game.splash("You: I better go to the store")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.setTilemap(tiles.createTilemap(hex`1000100009090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090902010101010101010101010101070909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a060909030a0a0a0a0a0a0a0a0a0a0a0a0609090405050505050505050505050508090909090909090909090909090909090909090909090909090909090909090909`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile2,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile8,myTiles.tile9,myTiles.tile15,sprites.dungeon.darkGroundCenter,myTiles.tile1], TileScale.Sixteen))
    mySprite.setPosition(100, 100)
    mySprite2.destroy()
    info.setLife(3)
    mySprite3 = sprites.create(img`
        d d d d d d d d d d d d d d d d 
        d b b b b b b b b b b b b b b d 
        d b b b b b b b b b b b b b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b b b b b b b b b b b b b d 
        d b b b b b b b b b b b b b b d 
        d d d d d d d d d d d d d d d d 
        `, SpriteKind.Projectile)
    mySprite3.setPosition(100, 220)
    mySprite3.follow(mySprite)
})
let mySprite3: Sprite = null
let Killer_npc_1: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`3200320001010101010101010101010101010101060606060606060606060606060606060606060606060606060606060606060606060103030303030303030303030303030106060606060606060606060606060606060606060606060606060606060606060606010103030303030303030303030301010606060606060606060606060606060606060606060606060606060606060606060606010103030303030303030303010106060606060606060606060606060606060606060606060606060606060606060606060606010103040503030303030101060606060606060606060606060606060606060606060606060606060606060606060606060606010103030303030301010606060606060606060606060606060606060606060606060606060606060606060606060606060607010303030303030106060606060606060606060606060606060606060606060606060606060606060606060606060606060701030303030303010606060606060606060606060606060606060606060606060606060606060606060606060606060606070103030303030301060606060606060606060606060606060606060606060606060606060606060606060606060607070707010303030303030106060606060606060606060606060606060606060606060606060606060606060606060606060101010101030303030303010101010106060606060606060606060606060606060101010101010101010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a0106060606060606060103030303030303030303030303030106060606060606060606060606060606060101010101010a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010b08080808080808080808080808080808010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303020b08080808080808080808080808080808090a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010b08080808080808080808080808080808010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a010606060606060606010303030303030303030303030303010606060606060606060606060606060606010a0a0a0a0a0a0a0106060606060606060103030303030303030303030303030106060606060606060606060606060606060101010101010101010606060606060606010303030303030303030303030303010606060606060606060606060606060606060606060606060606060606060606060601030303030303030303030303030301060606060606060606060606060606060606060606060606060606060606060606060101010101010101010101010101010106060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606`, img`
    2222222222222222..................................
    2..............2..................................
    22............22..................................
    .22..........22...................................
    ..22........22....................................
    ...22......22.....................................
    ....2......2......................................
    ....2......2......................................
    ....2......2......................................
    ....2......2......................................
    22222......22222.................222222222........
    2..............2.................2.......2........
    2..............2.................2.......2........
    2..............2.................2.......2........
    2..............2.................2.......2........
    2..............2.................2.......2........
    2........................................2........
    2..............2.................2.......2........
    2..............2.................2.......2........
    2..............2.................2.......2........
    2..............2.................2.......2........
    2..............2.................2.......2........
    2..............2.................222222222........
    2..............2..................................
    2..............2..................................
    2222222222222222..................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile7,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.dungeon.darkGroundCenter,myTiles.tile5,myTiles.tile10,sprites.dungeon.darkGroundWest], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . f f f f f . . 
    . f 1 1 1 1 1 f . 
    f 1 f 1 1 1 f 1 f 
    f 1 f 1 1 1 f 1 f 
    f 1 f 1 1 1 f 1 f 
    . f 1 1 1 1 1 f . 
    . . f 1 1 1 f . . 
    . . f 1 1 1 f . . 
    . . f 1 1 1 f . . 
    . . f 1 1 1 f . . 
    . . f 1 f 1 f . . 
    . . f 1 f 1 f . . 
    . . f 1 f 1 f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f 
    `)
game.setDialogTextColor(8)
game.splash("You hear some thing outside ")
mySprite2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 f 2 2 2 2 2 2 2 2 2 2 f 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 f 2 2 f 
    f 2 2 2 f 2 2 2 2 2 2 f 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
    f 2 2 2 2 f 2 2 2 2 f 2 2 2 2 f 
    f 2 2 2 f 2 2 2 2 2 2 f 2 2 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 f 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Enemy)
mySprite2.setPosition(400, 260)
mySprite2.follow(mySprite)
mySprite4 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.NPC)
mySprite4.setPosition(600, 200)
mySprite5 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fb11111111bf......
    ......fb11111111bf......
    ......fbbb1111bbbf......
    ......f2bbfbbfbbbf......
    ......f2bcf11fcbcf......
    .......f2111111bf.......
    ......fff2d212dffff.....
    ....f211122fbf21112f....
    ....f12121ffff12121f....
    ....f2fbffffff2f2f2f....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
`, SpriteKind.KillerNPC)
mySprite5.setPosition(601, 201)
