export class MenuItem {
    constructor(
        public title: string,
        public faIcon: string,
        public route?: string,
        public subMenus?: MenuItem[]
    ) {
        this.title = title
        this.route = route
        this.faIcon = faIcon
    }
}