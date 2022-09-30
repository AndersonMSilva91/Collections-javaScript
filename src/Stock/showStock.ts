import PromptSync = require("prompt-sync");
import { Stock } from "./StockMenu";

const prompt = PromptSync();

let option: number;

export function handleShowMenu() {

    do {

        console.log('1 - Add an item in the stock');
        console.log('2 - Remove an item');
        console.log('3 - Change an item');
        console.log('4 - Show all the stock');
        console.log('5 - exit');

        option = Number(prompt('--> '));

        switch (option) {
            case 1:
                return Stock.add;

            case 2:
                return Stock.remove;

            case 3:
                return Stock.change;

            case 4:
                return Stock.show;

            case 5:
                return Stock.exit;

            default:
                console.clear()
                console.log('this is a invaild option try again!\n')

        }

    } while (option < 1 || option > 5)

}
