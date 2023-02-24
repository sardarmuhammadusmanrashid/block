// // import contract from "@truffle/contract-schema";
// import contract from "@truffle/contract-schema"
// export const loadcontract=async(name,provider)=>{
//     const res=await fetch(`./contracts/${name}.json`)
//     const Artiface=await res.json();
//     const _contract=contract(Artiface);
//     _contract.setProvider(provider);
//     const deployedContract=await _contract.deployed();
//     return deployedContract;
// }