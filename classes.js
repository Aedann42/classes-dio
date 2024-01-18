class  party {
    constructor (classe, tipoDeAtaque) {
        this.tipoDeAtaque = tipoDeAtaque
        this.classe = classe
    }

    escrever() {
        console.log(`o ${this.classe} atacou usando ${this.tipoDeAtaque}`)
    }

}
    let mago = new party ('mago', 'magia')

    let guerreiro = new party ('guerreiro', 'espada')

    let monge = new party ('monge', 'artes marciais')

    let ninja = new party ('ninja', 'shuriken')

    mago.escrever()
    guerreiro.escrever()
    monge.escrever()
    ninja.escrever()
