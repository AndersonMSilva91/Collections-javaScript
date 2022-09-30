import PromptSync = require("prompt-sync");
import { handleShowAllItems } from "./showAll";

const prompt = PromptSync();


export function handleAddItem(inventory: string[]) {

    handleShowAllItems(inventory);
    console.log('type the item that you want to add');
    const item = prompt('--> ');

    inventory.push(item);

    console.clear();
    console.log(`the item ${item} it was add with success!!!\n`);

}