const precoDotenis = 12999;
const meuDinheiro = 8000;

const desconto = precoDotenis - meuDinheiro;

const cupom = 100 * desconto / precoDotenis;

console.log(`O valor do cupom deve ser ${cupom}%`);