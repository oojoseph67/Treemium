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
                                <div class="card-header justify-content-center">
                                    <h4 class="card-title">Sign in</h4>
                                </div>
                                <div class="card-body">
                                    <form method="post" name="myform" class="signin_validate">
                                        <div class="mb-3">
                                            <label>Email</label>
                                            <input type="email" class="form-control" placeholder="hello@example.com"
                                                name="email" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Password"
                                                name="password" />
                                        </div>
                                        <div class="row d-flex justify-content-between mt-4 mb-2">
                                            <div class="mb-3 mb-0">
                                                <label class="toggle">
                                                    <input class="toggle-checkbox" type="checkbox" />
                                                    <div class="toggle-switch"></div>
                                                    <span class="toggle-label">Remember me</span>
                                                </label>
                                            </div>
                                            <div class="mb-3 mb-0">
                                                <Link href="/reset">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <Link  href="/otp-1" class="btn btn-success w-100">Sign in</Link>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Don't have an account? <Link href="/signup" class="text-primary">Sign
                                            up</Link></p>
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