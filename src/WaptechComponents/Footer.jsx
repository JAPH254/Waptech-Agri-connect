function Footer(){
    const currentDate = new Date();
    const currentDateTime = currentDate.toLocaleString();
  
    return(
        <div>
            {currentDateTime}
        </div>
    )
}
export default Footer