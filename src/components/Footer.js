export default function Footer()

{
   return(
    <>
        <footer style={footerStyle}>
            <div className="container">
                 <div className="row text-center">
                     <div className="col-md-12 col-lg-12 col-sm-12">
                        <p>&copy; Comapny name. All Rights Reserved.</p>       
                    </div>
                </div>
            </div>
       </footer>
    </>
   );
}
const footerStyle = {
  backgroundColor: "black",
  color: 'white',
  textAlign: 'center',
  padding: '0px',
  position: 'relative',
  bottom: '0',
  width: '100%',
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: 'Poppins',
};