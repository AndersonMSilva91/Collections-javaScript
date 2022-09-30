import PromptSync = require("prompt-sync");
import { handleShowAllItems } from "./showAll";

const prompt = PromptSync();

export function handleUpdateItem(inventory: string[]) {

    handleShowAllItems(inventory);
    console.log('Type the name of the item that you want to change');
    const updateItem = prompt('--> ');

    let count: number = 0;

    let success = false;

    inventory.forEach(item => {
        if (item == updateItem) {
            console.log('Type the name of the new item');
            const newItem = prompt('--> ')

            inventory.splice(count, 1, newItem);

            console.clear();
            console.log(`the item ${updateItem} is updated now it is ${newItem}\n`);

            success = true;

        }
        count++;
    })

    if (!success) {
        console.clear();
        console.log(`the item ${updateItem} it wasn't find on list to updated \n`);
    }

}