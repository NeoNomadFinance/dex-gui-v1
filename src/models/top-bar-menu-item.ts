import { constants } from "buffer";

export class TopBarMenuItem {
    title: string;
    link: string;
    child: TopBarMenuItem[];

    constructor(
        title: string,
        link: string,
        child: TopBarMenuItem[]
    ) {
        this.title = title;
        this.link = link;
        this.child = child;
    }
}

export const SITEURLS = {
    home: 'https://neonomad.finance',
    futures: 'https://futures.neonomad.exchange',
    app: 'https://app.neonomad.exchange'
}