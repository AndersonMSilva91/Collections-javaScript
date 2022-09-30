import PromptSync = require("prompt-sync");
import { handleShowAllItems } from "./showAll";

const prompt = PromptSync();

export function handleRemoveItem(inventory: string[]) {

    handleShowAllItems(inventory);

    console.log('Type the item tha you want to remove');
    const removeItem = prompt('--> ');

    let count: number = 0;
    let success = false;

    inventory.forEach(item => {
        if (item == removeItem) {
            inventory.splice(count, 1);
            console.clear();
            console.log(`the item ${removeItem} it was remove with success\n`);

            success = true;

        }
    })

    if (!success) {
        console.clear();
        console.log(`the item ${removeItem} it wasn't find to remove\n`);
    }



}

