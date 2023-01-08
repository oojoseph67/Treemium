import Link from "next/link";

const Index = () => {
    return (
        <>
            <div class="authincation section-padding">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center">
                        <div class="col-xl-5 col-md-6">
                            <div class="mini-logo text-center my-5">
                                <Link href="/landing"><img src="./images/logo.png" alt="" /></Link>
                            </div>
                            <div class="auth-form card">
                                <div class="card-body">
                                    <Link href="/signin" class="page-back text-muted">
                                        <span><i class="fa fa-angle-left"></i></span> Back</Link>
                                    <h3 class="text-center">OTP Verification</h3>
                                    <p class="text-center mb-5">We will send one time code on this number</p>
                                    <form>
                                        <div class="mb-3">
                                            <label>Your OTP Code</label>
                                            <input type="text" class="form-control text-center font-weight-bold"
                                                value="11 22 33" />
                                        </div>
                                        <div class="text-center">
                                            <Link href="/" class="btn btn-success w-100">Verify</Link>
                                        </div>
                                    </form>
                                    <div class="info mt-3">
                                        <p class="text-muted">You dont recommended to save password to browsers!</p>
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