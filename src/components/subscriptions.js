import React,{ Component } from 'react';


class Subscriptions extends Component {
constructor(props){
    super(props);
    this.state = {
        email:'',
        error:false,
        success:false
    }
}

    saveSubscription = (email) =>{
        const URL_EMAIL = "http://localhost:3005/subcriptions"
        fetch(URL_EMAIL,{
            method: 'post',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email})
        })
        
        .then (res => res.json())
            .then (()=>{
                this.setState({
                    email:'',
                    success:true
                })

            })

        }


    clearMessages = () => {
        setTimeout(function(){
            this.setState({
                error:false,
                success:false
            })
        }.bind(this),3000)
    }

    handleSubmit = (event)=>{
                
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
            this.saveSubscription(email)
        }else{
            this.setState({
                error: true
            })
        }
        this.clearMessages()
    }

    onchangeInput =(event)=>{
    this.setState({
        email:event.target.value
    })
}

    render() {
        return (
            <div className="subscribe_panel">
            <h3> Subscribe Us</h3>
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <input 
                    type ="text"
                    placeholder="Enter your Email Here"
                    value={this.state.email}
                    onChange={this.onchangeInput}
                    />
                    <div className={this.state.error ? "error show":"error"}>Check Your email </div>
                    <div className={this.state.success ? "success show":"success"}> Thank You </div>
                </form>
            </div>
                <small>
                    Get Latest updates every week so subscribe with email
                </small>
            
            </div>
        )
    }
}

export default Subscriptions;
