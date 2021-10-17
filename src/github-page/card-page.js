import axios from "axios";
import React from "react";
import './card-page.css';
const sample = [
    {
      "name": "aadhi",
      "description":"facebook",
      "image-url":"https://i.imgur.com/pwpWaWu.jpg"
    },
    {
        "name": "panjgala.aadhi",
      "description":"facebook",
      "image-url":"https://i.imgur.com/KIPtISY.jpg"
    },
    {
        "name": "aadhisiva",
      "description":"facebook",
      "image-url":"https://i.imgur.com/2jMCqQ2.jpg"
    },
    {
        "name": "panjagala",
      "description":"facebook",
      "image-url":"https://i.imgur.com/QFDRuAh.jpg"
    },
    {
        "name": "siva",
      "description":"facebook",
      "image-url":"https://i.imgur.com/8yIIokW.jpg"
    }
  ]

const CardList= (props) => {
        return <div>
            {props.profile.map(profile => <Card key={profile.is } {...profile}/>)}
        </div>
}

class Card extends React.Component{
    render(){
        const profile = this.props;
        return <div className="github-profile">
            <img src={profile["avatar_url"]} alt="image"  width="100px" height="100px" />
            <div className="info">
                <div className="name" style={{fontSize: '125%',color: "blue"}}>{profile.name}</div>
                <div className="company" style={{color: "yellow"}} >{profile.company}</div>
            </div>
        </div>
    }
}

class Form extends React.Component{
    // userInput = React.createRef()
    state={
        username: ""
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const resData = await axios.get(`https://api.github.com/users/${this.state.username}`)
        // const resData = await axios.get(`https://github.com/${this.state.username}`)
        console.log("REsData",resData);
        this.props.onSubmit(resData.data);
    }
    render(){
        return <form onSubmit={this.handleSubmit} className="form">
            <input 
                type="text" 
                placeholder="username" 
                style={{borderBlock: 'block',borderWidth: 3}} 
                value={this.state.username}
                onChange={event => this.setState({username : event.target.value})}
                required
                />

            <button>Add Card</button>
        </form>
    }
}
class appInstance extends React.Component{
    state = {
        sampleData : []
    }

    addNewuserData = (profileData) => {
        this.setState(prevState => ({
            sampleData : [...prevState.sampleData, profileData]
        }))
    }
    render(){
        return <div>
            <div className="heading">
            {this.props.titile}
            </div>
            <Form onSubmit={this.addNewuserData}/>
            <CardList profile={this.state.sampleData} />
            </div>

    }
}

export default appInstance;