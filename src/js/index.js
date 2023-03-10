import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import { Table } from 'antd';
import './../css/index.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            InjectionID:10,
            Address:"",
            TotalStatusToChange:0,
            TheListGet:[11,12],
            Name:"",
            AuthAddress:"",
            HosAddress:"",
            LookUpInfo:"",
            DisposeNum:0,
            DisposeProposal:0,
            GetVaccineByIndex:0,
            AuthVaccineIndex:"",
            Kind:"",
            Date:"",
            PassportInfo:[],
            TheListUserGet:[11,12],
            Specific:"",
            SpecificIndex:0,
            TestSpecific:{},
            columnPassport: [
                {
                    title: "Address",
                    dataIndex: "address",
                    key: "address",
                },
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                },
                {
                    title: "Status",
                    dataIndex: "status",
                    key: "status",
                }
            ],
            columnSpecific: [
                {
                    title: "VaccinationID",
                    dataIndex: "VaccinationID",
                    key: "VaccinationID",
                },
                {
                    title: "VaccineKind",
                    dataIndex: "VaccineKind",
                    key: "VaccineKind",
                },
                {
                    title: "ID",
                    dataIndex: "ID",
                    key: "ID",
                },
                {
                    title: "Date",
                    dataIndex: "date",
                    key: "date",
                },
                {
                    title: "VaccinationIndex",
                    dataIndex: "VaccinationIndex",
                    key: "VaccinationIndex",
                },
                {
                    title: "VaccinationStatus",
                    dataIndex: "VaccinationStatus",
                    key: "VaccinationStatus",
                }
            ],
            columnLookUp: [
                {
                    title: "Address",
                    dataIndex: "address",
                    key: "address",
                },
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                },
                {
                    title: "VaccinationNumber",
                    dataIndex: "index",
                    key: "index"
                },
                {
                    title: "Status",
                    dataIndex: "status",
                    key: "status",
                }
            ],
            showAuth: 'none',
            showHos: 'none',
            showUser: 'none',
            showAuthDeliverPassport: 'none',
            showChangeStatus: 'none',
            showGrantHospital: 'none',
            showGrantAuthority: 'none',
            showGetList: 'none',
            showDisposeVaccination: 'none',
            showAuthLookUp: 'none',
            showHosDeliverPassport: 'none',
            showHosLookUp: 'none',
            showSubmitInfo: 'none',
            showGetPassport: 'none',
            showUserGetList: 'none',
            showSpecific: 'none'

        }

        if(typeof web3 != 'undefined'){
            console.log("Using web3 detected from external source like Metamask")
            this.web3 = new Web3(web3.currentProvider)
         }else{
            console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
         }
         const MyContract = web3.eth.contract([
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "enum Passport.TotalStatus",
                        "name": "totalStatus",
                        "type": "uint8"
                    }
                ],
                "name": "AuthorityChangeToatalStatusEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "i",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "enum Passport.InjectionStatus",
                        "name": "proposal",
                        "type": "uint8"
                    }
                ],
                "name": "AuthorityDisposeUncheckedInjectionEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "AuthorityGetUncheckedInjectionListEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "auth",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "kind",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "ID",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    }
                ],
                "name": "HospitalSubmitInfomationEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "LookUpEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "VaccinatedOneGetHisPassportEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "VaccinatedOneGetListEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "name": "deliverPassportEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "grantAuthorityEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "grantHospitalEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "i",
                        "type": "uint256"
                    }
                ],
                "name": "showSpecificInjectionEvent",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "enum Passport.TotalStatus",
                        "name": "totalStatus",
                        "type": "uint8"
                    }
                ],
                "name": "AuthorityChangeToatalStatus",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "i",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Passport.InjectionStatus",
                        "name": "proposal",
                        "type": "uint8"
                    }
                ],
                "name": "AuthorityDisposeUncheckedInjection",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "AuthorityGetInjectionByID",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "_InjectionID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_kind",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "_ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "_date",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_injectedIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Passport.InjectionStatus",
                        "name": "_InjectionStatus",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "AuthorityGetUncheckedInjectionList",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "flist",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "cnt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalCnt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "herenumbersinWaitingList",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "authorityAddr",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "kind",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    }
                ],
                "name": "HospitalSubmitInfomation",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "InjectionID",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "LookUp",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "injectedIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Passport.TotalStatus",
                        "name": "totalStatus",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "VaccinatedOneGetHisPassport",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "_ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "enum Passport.TotalStatus",
                        "name": "_totalStatus",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "VaccinatedOneGetList",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "list",
                        "type": "uint256[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    }
                ],
                "name": "deliverPassport",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "grantAuthority",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "grantHospitals",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "i",
                        "type": "uint256"
                    }
                ],
                "name": "showSpecificInjection",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "_InjectionID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_kind",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "_ID",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "_date",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_injectedIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Passport.InjectionStatus",
                        "name": "_InjectionStatus",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "testt",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "n",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ])
         this.state.ContractInstance = MyContract.at('0xf4cf2709b7ae05b99a73f0e1505a755f73a7a2cd')

         window.a = this.state

    }

    AuthClick = () => {
        this.setState({
            showAuth: 'block',
            showHos: 'none',
            showUser: 'none'
        })
    }

    HosClick = () => {
        this.setState({
            showAuth: 'none',
            showHos: 'block',
            showUser: 'none'
        })
    }

    UserClick = () => {
        this.setState({
            showAuth: 'none',
            showHos: 'none',
            showUser: 'block'
        })
    }

    AuthDeliver = () => {
        this.setState({
            showAuthDeliverPassport: 'block',
            showChangeStatus: 'none',
            showGrantHospital: 'none',
            showGrantAuthority: 'none',
            showGetList: 'none',
            showDisposeVaccination: 'none',
            showAuthLookUp: 'none'
        })
    }

    AuthChangeStatus = () => {
        this.setState({
            showAuthDeliverPassport: 'none',
            showChangeStatus: 'block',
            showGrantHospital: 'none',
            showGrantAuthority: 'none',
            showGetList: 'none',
            showDisposeVaccination: 'none',
            showAuthLookUp: 'none'
        })
    }

    AuthGrantHospital = () => {
        this.setState({
            showAuthDeliverPassport: 'none',
            showChangeStatus: 'none',
            showGrantHospital: 'block',
            showGrantAuthority: 'none',
            showGetList: 'none',
            showDisposeVaccination: 'none',
            showAuthLookUp: 'none'
        })
    }

    AuthGrantAuthority = () => {
        this.setState({
            showAuthDeliverPassport: 'none',
            showChangeStatus: 'none',
            showGrantHospital: 'none',
            showGrantAuthority: 'block',
            showGetList: 'none',
            showDisposeVaccination: 'none',
            showAuthLookUp: 'none'
        })
    }

    AuthGL = () => {
        this.setState({
            showAuthDeliverPassport: 'none',
            showChangeStatus: 'none',
            showGrantHospital: 'none',
            showGrantAuthority: 'none',
            showGetList: 'block',
            showDisposeVaccination: 'none',
            showAuthLookUp: 'none'
        })
    }

    AuthDisposeVaccination = () => {
        this.setState({
            showAuthDeliverPassport: 'none',
            showChangeStatus: 'none',
            showGrantHospital: 'none',
            showGrantAuthority: 'none',
            showGetList: 'none',
            showDisposeVaccination: 'block',
            showAuthLookUp: 'none'
        })
    }

    AuthLookUp = () => {
        this.setState({
            showAuthDeliverPassport: 'none',
            showChangeStatus: 'none',
            showGrantHospital: 'none',
            showGrantAuthority: 'none',
            showGetList: 'none',
            showDisposeVaccination: 'none',
            showAuthLookUp: 'block'
        })
    }

    HosDeliverPassport = () => {
        this.setState({
            showHosDeliverPassport: 'block',
            showHosLookUp: 'none',
            showSubmitInfo: 'none',
        })
    }

    HosLookUp = () => {
        this.setState({
            showHosDeliverPassport: 'none',
            showHosLookUp: 'block',
            showSubmitInfo: 'none',
        })
    }

    HosSubmitInformation = () => {
        this.setState({
            showHosDeliverPassport: 'none',
            showHosLookUp: 'none',
            showSubmitInfo: 'block',
        })
    }

    UserGetPass = () => {
        this.setState({
            showGetPassport: 'block',
            showUserGetList: 'none',
            showSpecific: 'none'
        })
    }

    UserGL = () => {
        this.setState({
            showGetPassport: 'none',
            showUserGetList: 'block',
            showSpecific: 'none'
        })
    }

    UserSpecific = () => {
        this.setState({
            showGetPassport: 'none',
            showUserGetList: 'none',
            showSpecific: 'block'
        })
    }

    myChangeHandler=(event)=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val});
    }

    AuthChangeTotalStatus=(event)=>{
        event.preventDefault();
        alert(this.state.Address+"  "+this.state.TotalStatusToChange);
        this.state.ContractInstance.AuthorityChangeToatalStatus(this.state.Address,this.state.TotalStatusToChange,{
            gas:300000
        },(err, result) => {
            cb()
         })
    }
    AuthGetList=(event)=>{
        event.preventDefault();
        console.log(this.state.TheListGet)
        this.state.ContractInstance.AuthorityGetUncheckedInjectionList((err, result) =>{
            if(result!=null){
                this.setState({
                    TheListGet:JSON.stringify(result[0])
                })
            }
        })
        // alert("get list");
        // this.state.TheListGet=this.state.ContractInstance.AuthorityGetUncheckedInjectionList()
        console.log(this.state.TheListGet)
    }
    DeliverPassport=(event)=>{
        event.preventDefault();
        alert(this.state.Address+"  "+this.state.Name);
        this.state.ContractInstance.deliverPassport(this.state.Address,this.state.Name,{gas:300000},(err,result)=>{})
    }
    LookUp=(event)=>{
        event.preventDefault();
        this.state.ContractInstance.LookUp(this.state.Address,{
            gas:300000
        },(err,result)=>{
            if(result!=null){
                let info = JSON.parse(JSON.stringify(result))
                console.log(info.length)
                let stat
                if (parseInt(info[3]) == 0) {
                    stat = "Not vaccinated"
                }
                else if (parseInt(info[3]) == 1) {
                    stat = "Waiting for authorization"
                }
                else {
                    stat = "Vaccinated"
                }
                let x = []
                let dict = {
                    "address": info[0], 
                    "name": info[1], 
                    "index": info[2],
                    "status": stat,
                    key: 1,
                }
                x.push(dict)

                this.setState({
                    LookUpInfo: x
                })
            }
        })
    }
    AuthGrantAuth=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.grantAuthority(this.state.AuthAddress,(err,result)=>{})
    }
    AuthGrantHos=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.grantHospitals(this.state.HosAddress,(err,result)=>{})
    }
    AuthDispose=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.AuthorityDisposeUncheckedInjection(this.state.DisposeNum,this.state.DisposeProposal,(err,result)=>{})
    }
    AuthGetVaccinationByIndex=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.AuthorityGetInjectionByID(this.state.GetVaccineByIndex, (error, result) => {
            if(result != null) {
                let info = JSON.parse(JSON.stringify(result))
                console.log(info[1])
                let infoo = {
                    "VaccinationID": info[0],
                    "VaccineKind": info[1],
                    "ID": info[2],
                    "date": info[3],
                    "VaccinationIndex": info[4],
                    "VaccinationStatus": info[5],
                    key: 1
                }
                let x = []
                x.push(infoo)
                
                this.setState({
                    AuthVaccineIndex: x
                })
            }
        })
    }

    HosSubmitInfo=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.HospitalSubmitInfomation(
            this.state.AuthAddress,this.state.Kind,this.state.Address,this.state.Date,
            (error,result)=>{

            }
        )
    }
    
    UserGetPassport=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.VaccinatedOneGetHisPassport((error,result)=>{
            if(result!=null){
                let info = JSON.parse(JSON.stringify(result))
                let stat
                if (parseInt(info[2]) == 0) {
                    stat = "Not vaccinated"
                }
                else if (parseInt(info[2]) == 1) {
                    stat = "Waiting for authorization"
                }
                else {
                    stat = "Vaccinated"
                }
                let x = []
                let dict = {
                    "address": info[0], 
                    "name": info[1], 
                    "status": stat,
                    key: 1,
                }
                x.push(dict)
                this.setState({
                    PassportInfo: x
                })
                console.log(this.state.PassportInfo[0])
            }
        })
    }
    UserGetList=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.VaccinatedOneGetList((error,result)=>{
            let vDict = JSON.parse(JSON.stringify(result))
            let length = vDict.length
            console.log(length)
            let temp = []
            for(let i = 0; i < length; i++) {
                this.state.ContractInstance.showSpecificInjection(i, (err, res) => {
                    if(res != null) {
                        let info = JSON.parse(JSON.stringify(res))
                        console.log(info[1])
                        let infoo = {
                            "VaccinationID": info[0],
                            "VaccineKind": info[1],
                            "ID": info[2],
                            "date": info[3],
                            "VaccinationIndex": info[4],
                            "VaccinationStatus": info[5],
                        }
                        this.setState({
                            TestSpecific: infoo
                        })
                    }
                })
                temp.push(this.state.TestSpecific)
            }
            console.log(temp[0])
            if(result!=null){
                this.setState({
                    TheListUserGet:JSON.stringify(result)
                })
            }
        })
    }
    UserGetSpecific=(event)=>{
        event.preventDefault()
        this.state.ContractInstance.showSpecificInjection(this.state.SpecificIndex,(error,result)=>{
            if(result!=null){
                let info = JSON.parse(JSON.stringify(result))
                console.log(info[1])
                let infoo = {
                    "VaccinationID": info[0],
                    "VaccineKind": info[1],
                    "ID": info[2],
                    "date": info[3],
                    "VaccinationIndex": info[4],
                    "VaccinationStatus": info[5],
                    key: 1
                }
                let x = []
                x.push(infoo)
                
                this.setState({
                    Specific: x
                })
            }
        })
    }
    

    myStyle = {
        fontSize: 100,
        color: '#FF0000'
     };

    componentDidMount(){
        this.updateState()
        this.setupListeners()
  
        setInterval(this.updateState.bind(this), 1e3)
    }

    updateState(){
        this.state.ContractInstance.InjectionID((err, result) => {
            if(result != null){
               this.setState({
                  InjectionID: parseInt(result)
               })
            }
         })
    }

    setupListeners(){
       
     }

    
    returnInjectionID(){
        return this.state.InjectionID;
    }
    
    render(){
        return(
            <div>
                <div>
                    <header>
                        <h1>Choose your own identity</h1>
                        <br/>
                        <button onClick={this.AuthClick}>Authority</button>
                        <button onClick={this.HosClick}>Hospital</button>
                        <button onClick={this.UserClick}>User</button>
                    </header>
                </div>

            <div>In js</div>
            <div className="block" style={this.myStyle}>
               <b>Total number of vaccination:</b> &nbsp;
               <span>{this.state.InjectionID}</span>
            </div>
            
            <div id="AuthorityPart" style={{display:this.state.showAuth}}>
                <h2>Here you are Authority</h2>
                <nav>       
                    <a onClick={this.AuthDeliver}>DeliverPassport</a>
                    <br/>
                    <a onClick={this.AuthChangeStatus}>ChangeTotalStatus</a>
                    <br/>
                    <a onClick={this.AuthGrantHospital}>GrantHospital</a>
                    <br/>
                    <a onClick={this.AuthGrantAuthority}>GrantAuthority</a>
                    <br/>
                    <a onClick={this.AuthGL}>GetList</a>
                    <br/>
                    <a onClick={this.AuthDisposeVaccination}>Dispose</a>
                    <br/>
                    <a onClick={this.AuthLookUp}>LookUp</a>
                </nav> 
            <section>
            <form id="DeliverPassport" onSubmit={this.DeliverPassport} style={{display:this.state.showAuthDeliverPassport}}>
                Deliver {this.state.Name}({this.state.Address}) a Passport here. 
                <br/>
                <br/>
                Enter the address of the user you need to send the passport:
                <br/>
                <input type="text" name='Address' onChange={this.myChangeHandler}/>
                <br/>
                Enter the name of the receiver:
                <br/>
                <input type="text" name='Name' onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
            
            <form id="ChangeTotalStatus" onSubmit={this.AuthChangeTotalStatus} style={{display:this.state.showChangeStatus}}>
                Change {this.state.Address} state to {this.state.TotalStatusToChange}
                <br/>
                <br/>
                Enter the address of the user:
                <br/>
                <input type="text" name='Address' onChange={this.myChangeHandler}/>
                <br/>
                Enter the status you want to change to (0-2):
                <br/>
                <input type="number" name='TotalStatusToChange' onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
            
            <form id="GetList" onSubmit={this.AuthGetList} style={{display:this.state.showGetList}}>
                GetList here
                <br/>
                <br/>
                <p>{this.state.TheListGet}</p>
                <br/>
                <input type="submit" value="Get List"/>
            </form>
            <form id="GrantHospital" onSubmit={this.AuthGrantHos} style={{display:this.state.showGrantHospital}}>
                Grant Hospital {this.state.HosAddress} here
                <br/>
                <br/>
                Enter the address of the hospital to be granted:
                <br/>
                <input type="text" name="HosAddress" onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
        
            <form id="GrantAuth" onSubmit={this.AuthGrantAuth} style={{display:this.state.showGrantAuthority}}>
                Grant Authority {this.state.AuthAddress} here
                <br/>
                <br/>
                Enter the address of the authority to be granted:
                <br/>
                <input type="text" name="AuthAddress" onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
            <form id="LookUp" onSubmit={this.LookUp} style={{display:this.state.showAuthLookUp}}>
                Look Up user's passport
                <br/>
                <br/>
                Enter the user's address:
                <input type="text" name='Address' onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
                <Table columns={this.state.columnLookUp} dataSource={this.state.LookUpInfo} bordered="block" />
            </form>
            <form id="GetByIndex" onSubmit={this.AuthGetVaccinationByIndex} style={{display:this.state.showDisposeVaccination}}>
                Dispose unchecked vaccination
                <br/>
                <br/>
                Enter the index of the vaccination you want to inspect:
                <br/>
                <input type="number" name="GetVaccineByIndex" onChange={this.myChangeHandler}/>
                <input type="submit" value="Submit" id="GetByIndex"/>
                <Table columns={this.state.columnSpecific} dataSource={this.state.AuthVaccineIndex} bordered="block"/>
            </form>
            <form id="Dispose" onSubmit={this.AuthDispose} style={{display:this.state.showDisposeVaccination}}>
                <br/>
                <br/>
                Enter the index of the vaccination waiting for dispose:
                <br/>
                <input type="number" name="DisposeNum" onChange={this.myChangeHandler}/>
                <br/>
                Enter the proposal here:
                <br/>
                <input type="number" name="DisposeProposal" onChange={this.myChangeHandler}/>
                <input type='submit' value='Submit'/>
            </form>
    

            </section>
            </div>

            <div id="HospitalPart" style={{display:this.state.showHos}}>
            <h2>Here you are Hospital</h2>
            <nav>       
                <a onClick={this.HosDeliverPassport}>DeliverPassport</a>
                <br/>
                <a onClick={this.HosLookUp}>LookUp</a>
                <br/>
                <a onClick={this.HosSubmitInformation}>SubmitInfo</a>
            
            </nav>
            <section>
                <form id="HosDeliverPassport" onSubmit={this.DeliverPassport} style={{display:this.state.showHosDeliverPassport}}>
                    Hospital DeliverPassport here
                    <br/>
                    <br/>
                    Enter the address of the user you need to send the passport:
                    <br/>
                    <input type="text" name="Address" onChange={this.myChangeHandler}/>
                    <br/>
                    Enter the name of the receiver:
                    <br/>
                    <input type="text" name="Name" onChange={this.myChangeHandler}/>
                    <input type="submit" value="submit"></input>
                </form>
                
                <form id="HosLookUp" onSubmit={this.LookUp} style={{display:this.state.showHosLookUp}}>
                    Hospital look up here
                    <br/>
                    <br/>
                    Enter the user's address:
                    <input type="text" name="Address" onChange={this.myChangeHandler}/>
                    <input type="submit" value="submit"></input>
                    <Table columns={this.state.columnLookUp} dataSource={this.state.LookUpInfo} bordered="block" />
                </form>
            
                <form id="SubmitInfo" onSubmit={this.HosSubmitInfo} style={{display:this.state.showSubmitInfo}}>
                Submit Information here
                <br/>
                <br/>
                Enter the authority's address:
                <br/>
                <input type="text" name="AuthAddress" onChange={this.myChangeHandler}/>
                <br/>
                Enter the vaccine type:
                <br/>
                <input type="text" name="Kind" onChange={this.myChangeHandler}/>
                <br/>
                Enter the ID (address) of the user:
                <br/>
                <input type="text" name="Address" onChange={this.myChangeHandler}/>
                <br/>
                Enter the date of vaccination:
                <br/>
                <input type="text" name="Date" onChange={this.myChangeHandler} placeholder={new Date().toLocaleTimeString()}></input>
                <input type="submit" value="submit"></input>
                </form>
                
            </section>
            </div>
            <div id="UserPart" style={{display:this.state.showUser}}>
            <h2>Here you are User</h2>

            <nav>       
                <a onClick={this.UserGetPass}>GetPassport</a>
                <br/>
                <a onClick={this.UserGL}>GetList</a>
                <br/>
                <a onClick={this.UserSpecific}>SpecificVaccine</a>
            
            </nav>
            <section>
                <form id="GetPassport" onSubmit={this.UserGetPassport} style={{display:this.state.showGetPassport}}>
                    Get your own vaccine passport here
                    <br/>
                    <br/>
                    <Table columns={this.state.columnPassport} dataSource={this.state.PassportInfo} bordered="block"/>
                    
                    <br/>
                    <input type="submit" value="submit"></input>
                </form>
                
                <form id="UserGetList" onSubmit={this.UserGetList} style={{display:this.state.showUserGetList}}>
                    Get your vaccination list here
                    <br/>
                    <br/>
                    <p>{this.state.TheListUserGet}</p>
                    <br/>
                    <input type="submit" value="submit"></input>
                </form>
            
                <form id="Specific" onSubmit={this.UserGetSpecific} style={{display:this.state.showSpecific}}>
                Search for your specific vaccination here
                <br/>
                <br/>
                <Table columns={this.state.columnSpecific} dataSource={this.state.Specific} bordered="block"/>
                <br/>
                Enter the index of vaccination list:
                <br/>
                <input type="number" name="SpecificIndex" onChange={this.myChangeHandler}/>
                <input type="submit" value="submit"></input>
                </form>
                
            </section>
            </div>


            </div>
            
        )
    }
    
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)