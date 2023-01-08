import LayoutAdmin from "../components/layout/LayoutAdmin";
import Link from "next/link";

const Index = () => {
    return (
        <>
            <LayoutAdmin pageClass={"front"}>

                <div class="verification section-padding">
                    <div class="container h-100">
                        <div class="row justify-content-center h-100 align-items-center">
                            <div class="col-xl-5 col-md-6">
                                <div class="auth-form card">
                                    <div class="card-body">
                                        <form class="identity-upload">
                                            <div class="identity-content">
                                                <span class="icon"><i class="fa fa-shield"></i></span>
                                                <h4>We are verifying your ID</h4>
                                                <p>Your identity is being verified. We will email you once your verification
                                                    has
                                                    completed.
                                                </p>
                                            </div>

                                            <div class="upload-loading text-center mb-3">
                                                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>

                                            </div>
                                            <Link href="/verify-step-4" class="btn btn-success w-100">Continue</Link>
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