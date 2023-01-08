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
                                                <h4>Upload your ID card</h4>
                                                <span>(Driving License or Government ID card)</span>

                                                <p>Uploading your ID helps as ensure the safety and security of your founds
                                                </p>
                                            </div>

                                            <div class="mb-3">
                                                <label class="me-sm-2">Upload Front ID </label>
                                                <span class="float-right">Maximum file size is 2mb</span>
                                                <div class="file-upload-wrapper" data-text="front.jpg">
                                                    <input name="file-upload-field" type="file" class="file-upload-field"
                                                        value="" />
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="me-sm-2">Upload Back ID </label>
                                                <span class="float-right">Maximum file size is 2mb</span>
                                                <div class="file-upload-wrapper" data-text="back.jpg">
                                                    <input name="file-upload-field" type="file" class="file-upload-field"
                                                        value="" />
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <Link href="/verify-step-3" class="btn btn-success w-100">Submit</Link>
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