import AlthashRpc from './node_modules/althashd-rpc/dist/AlthashRpc';

const rpc = new AlthashRpc('http://tests:HardPassword123@localhost:4889');

async function getRpcBalance() {
    const balance = await rpc.getBalance();
    console.log(balance);
}

getRpcBalance().catch((e) => console.error(e));