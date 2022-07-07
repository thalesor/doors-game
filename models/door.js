export default class Door {
    #number
    #hasGift
    #selected
    #open

    constructor(number, hasGift=false, selected=false, open=false)
    {
        this.#hasGift = hasGift;
        this.#selected = selected;
        this.#number = number;
        this.#open = open;
    }

    get number()
    {
        return this.#number;
    }

    get hasGift()
    {
        return this.#hasGift;
    }

    get selected()
    {
        return this.#selected;
    }

    get open()
    {
         return this.#open
    }
    
    toggleSelection()
    {
        const selected = !this.selected;
        //boa prática deixar os dados da calsse imutáveis, gerar uma nova instância da classe 
        //em vez de alterar os dados da instância atual
        return new Door(this.number, this.hasGift, selected, this.open);
    }

    openUp()
    {
        const open = true;
        return new Door(this.number, this.hasGift, this.selected, open);
    }

    unselect()
    {
        //método será usado para desselecionar todas as portas
        const selected = false;
        return new Door(this.number, this.hasGift, selected, this.open);
    }
}