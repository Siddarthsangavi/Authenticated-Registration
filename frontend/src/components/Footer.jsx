
export default function Footer() {
    
    return (
        <div style={{padding: "7px 0px", backgroundColor : "black", textAlign: 'center', position:'fixed', width: '100%',height : '55px', bottom : '0', left: '0', right: '0', zIndex : '999'}}>
            

            <div className="text-center pt-1">
                <a href="https://www.linkedin.com/in/siddarth-sangavi-526232204/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{fontSize : "20px"}}></i>
                </a>
                
                <a href="https://65dcdd16e88d8d150a629e67--sparkling-lily-ae21be.netlify.app/" target="_blank" rel="noreferrer">
                    <i className="bi bi-globe mx-2" style={{fontSize : "20px"}}></i>
                </a>

                <a href="https://github.com/Siddarthsangavi" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                </a>

                <a href="mailto:siddarthsangavi28@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{fontSize : "21px"}}></i>
                </a>
            </div>
            {/* <footer style={{backgroundColor: 'crimson', color:'springgreen', textAlign: 'center', position:'fixed', width: '100%',height : '50px', bottom : '0', left: '0', right: '0', zIndex : '999'}}><h1>THIS IS MY FOOTER</h1></footer> */}
        </div>
       
    )
}
