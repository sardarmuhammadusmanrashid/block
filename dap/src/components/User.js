import { black } from "color-name";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { sendMoneyd,sendMoneydd } from "../connection";

const User = ({ state }) => {
  const [account, setAccount] = useState("");
  const [name, setname] = useState("");
  const [namek, setnamek] = useState([""]);
  const [img, setimg] = useState([""]);
  const [name1, setname1] = useState("");
  const [name11, setname11] = useState("");
  const [name22, setname22] = useState("");
  const [email, setemail] = useState("");
  const [tbalance, settbalance] = useState("");
  const [twinner, settwinner] = useState("");
  const [account1, setAccount1] = useState([""]);
  const [account11, setAccount11] = useState([""]);
  const [cbalance, setCbalance] = useState(0);
  const [name111, setname111] = useState("");
  const [registerdPlayers, setRegisterdPlayers] = useState([]);
  const [lwinner, setLwinner] = useState("No winner yet");

  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
    });
  };
  const dp=localStorage.getItem("phone");
  useEffect(() => {
    const getAccount = async () => {
      const { web3 } = state;
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      web3.eth.getBalance(accounts[0]).then((balanceInWei) => {
        let balance = web3.utils.fromWei(balanceInWei);
        // console.log("Balance in wei:", balanceInWei);
        // console.log("Balance in ETH:", balance);
        setCbalance(balance);


      });
      setAccountListener(web3.givenProvider);
      setAccount(accounts[0]);


      
    };
   
    getAccount();
   
    // totalc();
    // totalrdata();
    // totalrdata2();
    total1e ();
  }, [state, state.web3]);
  function totalc1(){
    console.log("ppppp");
  }
  const total1e = async () => {
    const { contract } = state;
    const { web3 } = state;
    try {
      const balance = await contract.methods.fetchQuestion().call();
      // const balanced1 = await contract.methods.result().call();
    //   console.log(balance);
      setemail(balance[0]);
      setname1(balance[1]);
      setimg(balance[2].substring(6));
    //   setname11("user created");
      
    //   value:web3.utils.toWei("1","ether")
      
    } catch (e) {
    //   setname11("invalid creditionals");
    }
  };
  const totalc = async () => {
    const { contract } = state;
    const { web3 } = state;
    try {
      const balance = await contract.methods.getalldata().call();
      // const balanced1 = await contract.methods.result().call();
    //   console.log(balance);
      setAccount1(balance);
    //   setname11("blood added");
    //   value:web3.utils.toWei("1","ether")
      
    } catch (e) {
    //   setname11("sorry no ");
    }
  };
  const totalrdata = async () => {
    const { contract } = state;
    const { web3 } = state;
    try {
      const balance = await contract.methods.getuserproduct().call();
      // const balanced1 = await contract.methods.result().call();
      console.log("kk",balance[0][0]);
      setAccount1(balance);
    //   setname11("blood added");
    //   value:web3.utils.toWei("1","ether")
      
    } catch (e) {
      setname11("sorry no ");
    }
  };
  const totalrdata2 = async () => {
    const { contract } = state;
    const { web3 } = state;
    try {
      const balance = await contract.methods.fetchalluser().call();
      // const balanced1 = await contract.methods.result().call();
      // console.log("jjjj");
      setemail(balance[0][1]);
      console.log("email",balance[0])
      setAccount11(balance);
      // console.log(email);
    //   setname11("blood added");
    //   value:web3.utils.toWei("1","ether")
      
    } catch (e) {
    //   setname11("sorry no ");
    }
  };
  const total = async () => {
    const { contract } = state;
    const { web3 } = state;
    try {
     
      
        
      const formData = new FormData();
      formData.append("file", img);

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `bb0d9ff448cba1c05184`,
          pinata_secret_api_key: `1e8f36ecaac3437054e33fcb8737be92f1e3f5757f0a0ad5b97aa7757bb5931c`,
          "Content-Type": "multipart/form-data",
        },
      });
      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      const balance = await contract.methods.update(email,name1,ImgHash).send({ from: account});
      // const balanced1 = await contract.methods.result().call();
      // console.log(balance);
      setname111("update succesfully");
      // localStorage.setItem("phone",name22);
    //   value:web3.utils.toWei("1","ether")
    window.location.href="/user";
      
    } catch (e) {
      setname111("invalid creditionals");
    }
  };
  return (
    <div className="contaner">
    <div className="row">
        <div className="col-3">


            
        </div>
    <div className="col-5 mr-3 " >
   


<div  >
<p>{cbalance}</p>
<h3>{account}</h3>
<h3 className="text-danger">Sign Up</h3>
 
  {name111 && <p className="alert alert-success">{name111}</p>}
  {/* {name111==='invalid creditionals' && <p className="alert alert-danger">{name111}</p>} */}
  <label>Enter username</label>
<input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control"/><br></br>
</div>

<div ><label>Enter passcode</label>
<input type="text" name="name" value={name1} onChange={(e)=>setname1(e.target.value)} className="form-control"/><br></br>
</div>


<div ><label>Enter img</label>
<img src={`https://gateway.pinata.cloud/ipfs/${img}`} alt="Card image cap" style={{width:100,height:100}}/>
<input type="file" name="name" src={img} onChange={(e)=>setimg(e.target.files[0])} className="form-control"/><br></br>
</div>
{/* <div ><label>Enter category</label>
<input type="text" name="name" value={name11} onChange={(e)=>setname11(e.target.value)} className="form-control"/><br></br>
</div> */}
<button className="btn btn-outline-primary" onClick={total}>SIgnup</button>&nbsp;&nbsp;
{/* <button className="btn btn-primary" onClick={totalc2}>Add problem</button>&nbsp;&nbsp; */}
</div>
      </div>
      <br></br>
      <div className="col">
{/*        
       {account1.map((name,i)=>{
        return (
            <>
            <p><h3>id</h3>::{i}&nbsp;<br></br>name::{name[0]}&nbsp;<br></br>address::{name[1]}&nbsp;<br></br>blood group::{name[2]}</p>
            </>
        )
       })} */}
      </div>
<div>




    </div></div>
    

   

  );
};

export default User;
