import BasePage  from "../auto-tes-stor/base.page";
import CategoryMenuComponent from "../auto-tes-stor/components/category-menu.comp";

class HomePage extends BasePage {
    open() {
        return super.open("");
    }

    get categoryMenuComponent() {
        return CategoryMenuComponent;
    }
}

export default new HomePage();