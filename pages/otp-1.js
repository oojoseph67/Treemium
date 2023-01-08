import LayoutAdmin from "../components/layout/LayoutAdmin";
import Link from "next/link"

const Index = () => {
    return (
        <>
             <div class="authincation section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="mini-logo text-center my-5">
                            <Link href="/landing" ><img src="./images/logo.png" alt=""/></Link>
                        </div>
                        <div class="auth-form card">
                            <div class="card-body">
                                <Link href="/signin"  class="page-back text-muted">
                                    <span><i class="fa fa-angle-left"></i></span> Back</Link>
                                <h3 class="text-center">OTP Verification</h3>
                                <p class="text-center mb-5">We will send one time code on this number</p>
                                <form>
                                    <div class="mb-3">
                                        <label>Your phone number</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text ps-4 pe-4"><i
                                                        class="fa fa-phone"></i></span>
                                            </div>
                                            <input type="text" class="form-control" value="+1 12365480"/>
                                        </div>
                                    </div>
                                    <div class="text-center mt-4">
                                        <Link  href="/otp-2"  class="btn btn-success w-100">Send</Link>
                                    </div>
                                </form>
                                <div class="new-account mt-3 d-flex justify-content-between">
                                    <p>Don't get code? <Link href="/otp-1"  class="text-primary">Resend</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Index;