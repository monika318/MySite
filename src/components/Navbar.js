import React from 'react'


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{ fontWeight: 600 }}>
            <div class="container-fluid" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <div class="logowrapper">
                    <a class="navbar-brand" href="/">Monika Shakya</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#Profile">Projects</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#contact">ContactME</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
