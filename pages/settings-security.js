import Link from "next/link";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import SettingsMenu from "../components/layout/SettingsMenu";

const Index = () => {
    return (
        <>
            <LayoutAdmin pageClass={"front"}>
                <div class="row">
                    <div class="col-xl-3 col-md-4">
                        <div class="card settings_menu">
                            <div class="card-header">
                                <h4 class="card-title">Settings</h4>
                            </div>
                            <div class="card-body">
                                <SettingsMenu />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-md-8">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Security</h4>
                            </div>
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-xl-4">
                                        <div class="id_card">
                                            <img src="./images/id.png" alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="id_info">
                                            <h3>Carla Pascle </h3>
                                            <p class="mb-1 mt-3">ID: 0024 5687 2254 3698 </p>
                                            <p class="mb-1">Status: <span class="font-weight-bold">Verified</span></p>
                                            <Link href="/verify-step-2" class="btn btn-success mt-3">New ID</Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="phone_verify">
                                            <h4 class="card-title mb-3">Email Address</h4>
                                            <form>
                                                <div class="row align-items-center">
                                                    <div class="mb-3 col-xl-6">
                                                        <input type="text" class="form-control"
                                                            placeholder="hello@example.com " />
                                                        <Link href="/otp-2" class="btn btn-success mt-4" >Add
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="phone_verified">
                                            <h5> <span><i class="fa fa-envelope"></i></span> hello@example.com</h5>
                                            <div class="verify">
                                                <div class="verified">
                                                    <span><i class="la la-check"></i></span>
                                                    <Link href="javascript:void(0)">Verified</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="phone_verify">
                                            <h4 class="card-title mb-3">Add Phone Number</h4>
                                            <form>
                                                <div class="row align-items-center">
                                                    <div class="mb-3 col-xl-6">
                                                        <input type="text" class="form-control"
                                                            placeholder="+1 2335 2458 " />
                                                        <Link href="/otp-2" class="btn btn-success mt-4" >Add
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="phone_verified">
                                            <h5> <span><i class="fa fa-phone"></i></span> +1 23584 2659</h5>
                                            <div class="verify">
                                                <div class="verified">
                                                    <span><i class="la la-check"></i></span>
                                                    <Link href="javascript:void(0)">Verified</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutAdmin>
        </>
    );
};

export default Index;