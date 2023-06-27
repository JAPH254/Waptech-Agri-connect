
function Footer(){
    const currentDate = new Date();
    const currentDateTime = currentDate.toLocaleString();
  
    return(
        <div className="Footer">
        <div className="DisplayDate" style={{fontWeight:'bolder',display:'flex',flexDirection:'column',alignItems:'center'}}>
            {currentDateTime}
            <p>Wap technologies ltd</p>
        </div>
        </div>
    )
}
export default Footer