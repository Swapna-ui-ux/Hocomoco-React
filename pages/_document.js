import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

    <link rel="shortcut icon" type="image/x-icon" href="assets/favicon.png" />   
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>    
    <link rel="stylesheet" type="text/css" href="css/fontawesome/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="css/animate.css"/>   
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css"/>   
    <link rel="stylesheet" type="text/css" href="css/magnific-popup.min.css"/>   
    <link rel="stylesheet" type="text/css" href="css/loader.min.css"/>   
    <link rel="stylesheet" type="text/css" href="css/style.css"/>   
    <link rel="stylesheet" className="skin" type="text/css" href="css/skin/skin-1.css"/> 
    <link rel="stylesheet" type="text/css" href="css/flaticon.min.css"/>    
    <link rel="stylesheet" type="text/css" href="css/switcher.css"/>
    <link rel="stylesheet" type="text/css" href="css/banner.css"/>
    <link rel="stylesheet" type="text/css" href="css/responsive.css"/>   
    <link rel="stylesheet" type="text/css" href="css/wizard.css"/> 
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Poppins:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/> 
        </Head>
        <body>
          <Main />
          <NextScript />

    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossOrigin="anonymous"/>   
    <script src="js/bootstrap.min.js"/>  
    <script src="js/wizard.js"/> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"/> 
    <script src="js/magnific-popup.min.js"/>  
    <script src="js/waypoints.min.js"/> 
    <script src="js/counterup.min.js"/> 
    <script src="js/waypoints-sticky.min.js"/> 
    <script src="js/isotope.pkgd.min.js"/> 
    <script src="js/owl.carousel.min.js"/> 
    <script src="js/jquery.owl-filter.js"/> 
    <script src="js/stellar.min.js"/> 
    <script src="js/custom.js"/> 
    <script src="js/shortcode.js"/> 
    <script src="js/jquery.bgscroll.js"/> 
    <script src="js/switcher.js"/> 
    <script src="js/prefixfree.min.js"/> 
    <script src="js/read.js"/> 
    <script src="js/dev.js"/> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/js/bootstrap-multiselect.min.js"/> 
    
      
        </body>
      </Html>
    )
  }
}

export default MyDocument