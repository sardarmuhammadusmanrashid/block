// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {


    struct problem {
        string question;
        string ans;
        address uaddress;
        string home;
        string phone;
    }

    mapping(uint=>problem)pb;
    problem[] kl;
uint id;
function sendproblem(string memory question,string memory home,string memory phone)public{
problem storage p=pb[id];
p.question=question;
p.uaddress=msg.sender;
p.home=home;
p.phone=phone;
kl.push(p);
id+=1;
}

function fetchall() public view returns(problem[] memory){
    return kl;
}
function fetone(uint im) public view returns(problem memory){
    
    return kl[im];
}
function ansproblem(uint idg,string memory question) public {
problem storage p=kl[idg];
p.ans=question;


}



}   