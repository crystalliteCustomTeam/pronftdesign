
jQuery('#navbar').after(
    `<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container">
        <a href="../" class="navbar-brand d-flex mr-auto col33" rel="noopener noreferrer">
            <img src="../img/logo.png" class="img-fluid  animate__heartBeat wow" width="217" height="69"
                title="pronftdesign" alt="pronftdesign" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100 animate__fadeIn wow" id="collapsingNavbar3">
            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="/" rel="noopener noreferrer">
                        HOME
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../about-us/" rel="noopener noreferrer">
                        About
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                        rel="noopener noreferrer">SERVICES</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="../2d-nft-artwork-services/" rel="noopener noreferrer">2D NFT Artwork</a>
                        <a class="dropdown-item" href="../3d-nft-artwork-services/" rel="noopener noreferrer">3D NFT Artwork</a>
                        <a class="dropdown-item" href="../minting/" rel="noopener noreferrer">Minting</a>
                        <a class="dropdown-item" href="../nft-econtract/" rel="noopener noreferrer">eContracts</a>
                        <a class="dropdown-item" href="../nft-marketing-services/" rel="noopener noreferrer">Marketing</a>
                        <a class="dropdown-item" href="../web-design-and-development/" rel="noopener noreferrer">Web Design & Development</a>
                    </div>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="../package/" rel="noopener noreferrer">
                        PACKAGES
                    </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="../portfolio/" rel="noopener noreferrer">
                    PORTFOLIO
                </a>
            </li>
                <li class="nav-item ">
                    <a class="nav-link" href="../contact/" rel="noopener noreferrer">
                        CONTACT
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" rel="noopener noreferrer">
                        <img src="../images/user.png" height="14" width="18" class="img-fluid" alt="nft">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" rel="noopener noreferrer">
                        <img src="../images/wallet.png" height="14" width="18" class="img-fluid" alt="nft">
                    </a>
                </li>
                <li class="nav-item topbtn">
                    <a class="nav-link" href="tel:17178625446" rel="noopener noreferrer">
                        <i class="fa fa-phone"></i>  1-717-862-5446
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    `);
    
    var topbar = document.getElementById('navbar');