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
                                                <span class="icon"><i class="fa fa-check"></i></span>
                                                <h4>Identity Verified</h4>
                                                <p>Congrats! your identity has been successfully verified and your
                                                    investment
                                                    limit has been increased.</p>
                                            </div>

                                            <div class="text-center mb-4">
                                                <Link href="/add-debit-card" class="btn btn-success w-100">Continue</Link>
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