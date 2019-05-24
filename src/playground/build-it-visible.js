class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.message=this.message.bind(this);
        this.state ={
            visibility: false
        };
    }
    message() {
        this.setState((prevState) =>{
            return {
                visibility : !prevState.visibility
            };
        });        
    }
    render() {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.message}>{this.state.visibility? 'Hide Details' : 'Show Details'}</button>
            {
                this.state.visibility && (
                    <div>
                    <p>HI!!</p>
                    </div>
                )
            }
        </div>
    );
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'));

// console.log('App');

// let visibility = false ;

// const app = {
//     title : 'Visibility Toggle',
// };


// const message = () => {
//     visibility=!visibility;
//     render();
// };



// const appRoot = document.getElementById('app'); 

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={message}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             {visibility && (
//                 <div>
//                 <p>Hi!</p>
//                 </div>
//             )}
//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// };

// render();
