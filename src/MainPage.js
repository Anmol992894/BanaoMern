import React, { useState } from 'react'
import './style.css'


const MainPage = () => {
    const [isloggedin,setIsLoggedIn]=useState(false);
    const login=(e)=>{
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
        <div>
            <nav class="big-screen-nav navbar bg-body-tertiary">
                <div class="container-fluid">
                    <div className='row w-100'>
                        <div className='col-3 d-flex align-items-center '>
                            <a class="ms-4 navbar-brand fs-1"><span className='text-success'>ATG</span><span className='text-secondary'>.WORLD</span></a>
                        </div>
                        <div className='col-6 d-flex justify-content-center align-items-center'>
                            <div className='d-flex align-items-center border border-1  border-dark rounded-pill'>
                                <span className='border-end-none ms-2'><i class="fa-solid fa-magnifying-glass"></i></span>
                                <input className="border border-none me-2" type="search" placeholder="Search for Your Favrouite group" aria-label="Search" />
                            </div>
                        </div>
                        <div className='col-3 d-flex justify-content-end align-items-center'>
                            <span><strong>Create Account. <span className='text-primary'>It's free</span><i class="fa-solid fa-caret-down"></i></strong></span>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className='small-screen navbar bg-body-tertiary'>
                <div className='container-fluid'>
                    <div className='w-100 d-flex justify-content-end align-items-center'>
                        <i class="p-2 fa-solid fa-square"></i>
                        <i class="p-2 fa-solid fa-circle"></i>
                        <i class="p-2 fs-3 fa-solid fa-caret-down"></i>
                    </div>
                </div>
            </nav>
            <div className='header d-flex flex-column justify-content-end'>
                <div className='small-screen-button w-100 d-flex align-items-between justify-content-between'>
                    <i class="fs-4 text-light fa-solid fa-arrow-left"></i>
                    <button data-bs-toggle="modal" data-bs-target="#writemodal" className='fs-4 btn btn-outline-light  text-light'>Join Group</button>
                </div>
                <div className='d-flex flex-column align-items-start p-5 justify-content-end text-light'>
                    <h1>Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
            <div className='container'>
                <nav class="big-screen navbar navbar-expand-sm bg-body-tertiary">
                    <div class="d-flex justify-content-between row w-100">
                        <div class="col-9" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">All Posts (32)</a>
                                <a class="nav-link" href="#">Articles</a>
                                <a class="nav-link" href="#">Event</a>
                                <a class="nav-link" href="#">Education</a>
                                <a class="nav-link" href="#">Job</a>
                            </div>
                        </div>
                        <div className='col-3 d-flex'>
                            <button className='btn btn-secondary ' data-bs-toggle="modal" data-bs-target="#writemodal">Write a Post <i class="m-1 fa-solid fa-caret-down"></i>
                            </button>
                            <button className='ms-2 btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-users"></i> Join Group <i class="fa-solid fa-caret-down"></i>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className='small-screen-main w-100 d-flex align-items-between justify-content-between'>
                    <strong>Posts(368)</strong>
                    <button className='btn btn-secondary'>Filter:ALL <i class="p-2 fa-solid fa-caret-down"></i></button>
                </div>
                <hr />
            </div>
            <div className='row container-md m-md-5 d-flex align-items-center'>
                <div className='col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center text-start'>
                    <div class="card my-2" style={{ "width": "100%" }}>
                        <img width={'100%'} height={'220px'} src='https://images.unsplash.com/photo-1490100667990-4fced8021649?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                        <div class="card-body">
                            <span className='my-2'><i class="fa-solid fa-pen-nib"></i> Article</span>
                            <div className='row py-2'>
                                <div className='col-10'>
                                    <h4><strong>What if famous brands had regular fonts? Meet RegulaBrands!</strong></h4>
                                </div>
                                <div className='col-2'>
                                    <i class=" fs-4 fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <p className='fs-5'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='row py-2'>
                                <div className='col-9'>
                                    <img className='rounded-circle' width={'40px'} height={'40px'} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                                    <strong className='ms-3'>Sarthak Kamara</strong>
                                </div>
                                <div className='col-3 d-flex justify-content-between'>
                                    <div>
                                        <i class="ms-2 fa-regular fa-eye"></i> 1.4k views
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "100%" }}>
                        <img width={'100%'} height={'220px'} src='https://images.unsplash.com/photo-1518832136475-59f7f4e1351b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                        <div class="card-body">
                            <span className='my-2'><i class="fa-solid fa-microscope"></i> Education</span>
                            <div className='row py-2'>
                                <div className='col-10'>
                                    <h4><strong>Tax Benefits for Investment under National Pension Scheme launched by Government</strong></h4>
                                </div>
                                <div className='col-2'>
                                    <i class="fs-4 fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <p className='fs-5'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='row py-2'>
                                <div className='col-9'>
                                    <img className='rounded-circle' width={'40px'} height={'40px'} src='https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                                    <strong className='ms-3'>Sarah West</strong>
                                </div>
                                <div className='col-3 d-flex justify-content-between'>
                                    <div>
                                        <i class="ms-2 fa-regular fa-eye"></i> 1.4k views
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "100%" }}>
                        <img width={'100%'} height={'220px'} src='https://images.unsplash.com/photo-1490100667990-4fced8021649?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                        <div class="card-body">
                            <span className='my-2'><i class="fa-solid fa-note-sticky"></i> Meetup</span>
                            <div className='row py-2'>
                                <div className='col-10'>
                                    <h4><strong>Finance & Investment Elite Social Mixer @Lujiazui</strong></h4>
                                </div>
                                <div className='col-2'>
                                    <i class="fs-4 fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <div className='row py-2'>
                                <div className='col-4'>
                                    <i class="px-2 fa-regular fa-calendar-days"></i>Fri, 12 Oct, 2018
                                </div>
                                <div className='col-7'>
                                    <i class="px-2 fa-solid fa-location-dot"></i> Ahemdabad, India
                                </div>

                            </div>
                            <p className='fs-5'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='row py-2'>
                                <div className='col-9'>
                                    <img className='rounded-circle' width={'40px'} height={'40px'} src='https://images.unsplash.com/photo-1656697828433-85f4ec837ead?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                                    <strong className='ms-3'>Monkey </strong>
                                </div>
                                <div className='col-3 d-flex justify-content-between'>
                                    <div>
                                        <i class="ms-2 fa-regular fa-eye"></i> 1.4k views
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "100%" }}>
                        <div class="card-body">
                            <span className='my-2'><i class="fa-solid fa-pen-nib"></i> Job</span>
                            <div className='row py-2'>
                                <div className='col-10'>
                                    <h4><strong>Software Developer</strong></h4>
                                </div>
                                <div className='col-2'>
                                    <i class="fs-4 fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <div className='row py-2'>
                                <div className='col-4'>
                                    <i class="px-2 fa-regular fa-calendar-days"></i>Fri, 12 Oct, 2018
                                </div>
                                <div className='col-7'>
                                    <i class="px-2 fa-solid fa-location-dot"></i> Ahemdabad, India
                                </div>
                            </div>
                            <button className='btn-outline-success w-100 bg-light'>Apply to timesSpot</button>
                            <div className='row py-2'>
                                <div className='col-9'>
                                    <img className='rounded-circle' width={'40px'} height={'40px'} src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                                    <strong className='ms-3'>Sarthak Kamara</strong>
                                </div>
                                <div className='col-3 d-flex justify-content-between'>
                                    <div>
                                        <i class="ms-2 fa-regular fa-eye"></i> 1.4k views
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-share-nodes"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 sidebar-body container' style={{ height: "260vh" }}>
                    {isloggedin ? <div> 
                        <i class="fa-solid fa-location-dot"></i>                                         
                        <input type="text" className="border border-none form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>:<div className='d-flex justify-content-between'>
                        <span>
                            <i class="fa-solid fa-location-dot"></i> Noida, India
                        </span>
                        <i class="fa-solid fa-pencil"></i>
                    </div>}
                    <p className='text-start pt-5'>
                        <i class="fa-solid fa-circle-info"></i>
                        Your location will help us serve better and extend a personalised experience.
                    </p>
                    {isloggedin? <div>
                        <div className='text-start m-3'>
                        <i class="fs-4 fa-solid fa-thumbs-up"></i> Recommended Group
                        </div>
                        <div className='my-2 d-flex align-items-center justify-content-around'>
                            <img className='rounded-circle' width={'40px'} height={'40px'} src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                            Liesure
                            <button type='button'>Folow</button>
                        </div>
                        <div className='my-2 d-flex align-items-center justify-content-around'>
                            <img className='rounded-circle' width={'40px'} height={'40px'} src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                            Liesure
                            <button type='button'>Folow</button>
                        </div>
                        <div className='my-2 d-flex align-items-center justify-content-around'>
                            <img className='rounded-circle' width={'40px'} height={'40px'} src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                            Liesure
                            <button type='button'>Folow</button>
                        </div>
                        <div className='my-2 d-flex align-items-center justify-content-around'>
                            <img className='rounded-circle' width={'40px'} height={'40px'} src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='forest' />
                            Liesure
                            <button type='button'>Folow</button>
                        </div>
                    </div>:""}
                </div>
                <hr />

            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg"  style={{width:"736px"}}>
                    <div class="modal-content">
                        <div class="modal-header bg-transparent">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container my-3 d-flex align-items-center justify-content-between'>
                                <h2 className='fw-bold'>Create Account</h2>
                                <span>Already have an account? <a href='#'>sign up.</a></span>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div class="input-group">
                                        <span class="input-group-text">First and last name</span>
                                        <input type="text" aria-label="First name" class="form-control" />
                                        <input type="text" aria-label="Last name" class="form-control" />
                                    </div>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                                    </div>
                                    <div class="input-group ">
                                        <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-key"></i></span>
                                    </div>
                                    <div class="input-group">
                                        <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-key"></i></span>
                                    </div>
                                    <button className='w-100 mt-4 text-light btn btn-primary rounded-pill' type='button'>Create Account</button>
                                    <button className='w-100 mt-4 text-dark btn btn-light ' type='button'><i class="mx-3 text-primary fa-brands fa-facebook"></i>Sign up with Facebook</button>
                                    <button className='w-100 mt-4 text-dark btn btn-light' type='button'><i class="mx-3 text-primary fa-brands fa-google"></i>Sign up with Email</button>

                                </div>
                                <div className='sidepic col'>
                                <img width={'320px'} height={'320px'} src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-27096.jpg?w=740&t=st=1718603134~exp=1718603734~hmac=35eef8554a93915a203d1a24d659c5e92fd4cfbfce498c44e2ac72ddf0bca674' alt='forest' />
                                <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="writemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" >
                    <div class="modal-content">
                        <div class="modal-header bg-transparent">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container my-3 d-flex align-items-center justify-content-between'>
                                <h2 className='fw-bold'>Sign In</h2>
                                <span>Don't have an account yet? <a href='#'>Create new for free</a></span>
                            </div>
                            <div className='row container' >
                                <div className='col'>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                                    </div>
                                    <div class="input-group ">
                                        <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-key"></i></span>
                                    </div>
                                    <button data-bs-dismiss="modal" onClick={login} className='w-100 mt-4 text-light btn btn-primary rounded-pill' type='button'>Login</button>
                                    <button className='w-100 mt-4 text-dark btn btn-light ' type='button'><i class="mx-3 text-primary fa-brands fa-facebook"></i>Sign up with Facebook</button>
                                    <button className='w-100 mt-4 text-dark btn btn-light' type='button'><i class="mx-3 text-primary fa-brands fa-google"></i>Sign up with Email</button>
                                    <p className='mt-3 text-center'>Forgot Password</p>
                                </div>
                                <div className='sidepic col'>
                                <img width={'320px'} height={'320px'} src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-27096.jpg?w=740&t=st=1718603134~exp=1718603734~hmac=35eef8554a93915a203d1a24d659c5e92fd4cfbfce498c44e2ac72ddf0bca674' alt='forest' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
