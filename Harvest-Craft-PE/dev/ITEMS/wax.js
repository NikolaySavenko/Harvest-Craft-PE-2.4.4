IDRegistry.genItemID("pressedWax");
Item.createItem("pressedWax", "Wax", {name: "wax", meta: 0}, {});

IDRegistry.genBlockID("pressedWaxBlock");
Block.createBlock("pressedWaxBlock", [
	{name: "Pressed wax", texture: [["pressedwax", 0]], inCreative: true}
]);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.pressedWaxBlock, count: 1, data: 0}, ["bbb", "bbb"," bbb"], [ "b", ItemID.pressedWax, 0]);
	let rec = [{id: ItemID.pot, data: 0}];
	for(let i = 0; i < 7; i++){
		rec.push({id: ItemID.candleberry, data: 0});
	}

	Recipes.addShapeless({id: ItemID.pressedWax, count: 1, data: 0}, rec, function(api, field, result){
		for (var i in field){
			if (field[i].id != ItemID.pot){
				api.decreaseFieldSlot(i);
			}
		}
	});
});