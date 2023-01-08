
import Link from "next/link"

const Index = () => {
    return (
        <>
            <div class="authincation section-padding">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center">
                        <div class="col-xl-5 col-md-6">
                            <div class="mini-logo text-center my-5">
                                <img src="./images/logo.png" alt="" />
                            </div>
                            <div class="auth-form card">
                                <div class="card-header justify-content-center">
                                    <h4 class="card-title">Locked</h4>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="mb-3 mb-4">
                                            <label for="">Enter Password</label>
                                            <input type="password" class="form-control bg-transparent rounded-0"
                                                placeholder="Password" />
                                        </div>
                                        <Link href="/" class="btn-success w-100 btn-lg border-0" >Unlock 
                                        </Link>
                                    </form>
                                    <div class="new-account text-center mt-3">
                                        <Link href="/reset"  class="text-primary">
                                                <h5>Not Carla Pascle?</h5>
                                        </Link>
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