import Link from "next/link";
import LayoutAdmin from "../components/layout/LayoutAdmin";

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
                                            <h4>Please verify your identity before adding your card</h4>
                                            <p>Uploading your ID helps as ensure the safety and security of your founds
                                            </p>
                                        </div>

                                        <div class="text-center">
                                            <Link  href="/verify-step-2"  class="btn btn-success w-100">Upload ID</Link>
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