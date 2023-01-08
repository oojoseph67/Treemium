import LayoutAdmin from "../components/layout/LayoutAdmin";
import Link from "next/link"
const Index = () => {
    return (
        <>
            <LayoutAdmin pageClass={"front"}>

                <div class="verification section-padding mb-80">
                    <div class="container h-100">
                        <div class="row justify-content-center h-100 align-items-center  my-5">
                            <div class="col-xl-5 col-md-6">
                                <div class="auth-form card">
                                    <div class="card-header">
                                        <h4 class="card-title">Link a bank account</h4>
                                    </div>
                                    <div class="card-body">
                                        <form class="identity-upload">
                                            <div class="row">
                                                <div class="mb-3 col-xl-12">
                                                    <label class="me-sm-2">Routing number </label>
                                                    <input type="text" class="form-control" placeholder="25487" />
                                                </div>
                                                <div class="mb-3 col-xl-12">
                                                    <label class="me-sm-2">Account number </label>
                                                    <input type="text" class="form-control" placeholder="36475" />
                                                </div>
                                                <div class="mb-3 col-xl-12">
                                                    <label class="me-sm-2">Fulll name </label>
                                                    <input type="text" class="form-control" placeholder="Carla Pascle" />
                                                </div>
                                                <div class="mb-3 col-xl-12">
                                                    <img src="./images/routing.png" alt="" class="img-fluid" />
                                                </div>

                                                <div class="text-center col-12">
                                                    <Link href="/verify-step-5" class="btn btn-primary mx-2">Back</Link>
                                                    <Link href="/verify-step-6" class="btn btn-success mx-2">Back</Link>
                                                </div>
                                            </div>
                                        </form>
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