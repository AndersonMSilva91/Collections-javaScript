import { handleShowMenu } from "./Stock/showStock";

import { Stock } from "./Stock/StockMenu";
import { handleAddItem } from "./functions/add";
import { handleRemoveItem } from "./functions/remove";
import { handleUpdateItem } from "./functions/update";
import { handleShowAllItems } from "./functions/showAll";

const inventory: string[] = []

let choice: Stock;

do {

    choice = handleShowMenu();

    switch (choice) {
        case Stock.add:
            handleAddItem(inventory);
            break;

        case Stock.remove:
            handleRemoveItem(inventory);
            break;

        case Stock.change:
            handleUpdateItem(inventory);
            break;

        case Stock.show:
            handleShowAllItems(inventory);
            break;

        case Stock.exit:
            console.log('Programa finalizado!\n');
            break;

    }

} while (choice != Stock.exit)

