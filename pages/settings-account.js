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
                                <h4 class="card-title">Linked Account or Card</h4>
                            </div>
                            <div class="card-body">
                                <div class="form">
                                    <ul class="linked_account">
                                        <li>
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex">
                                                        <span class="me-3"><i class="fa fa-bank"></i></span>
                                                        <div class="flex-grow-1">
                                                            <h5 class="mt-0 mb-1">Bank of America</h5>
                                                            <p>Bank **************5421</p>
                                                        </div>
                                                        <div class="edit-option">
                                                            <Link href="javascript:void(0)"><i class="fa fa-eye"></i></Link>
                                                            <Link href="javascript:void(0)"><i class="fa fa-pencil"></i></Link>
                                                            <Link href="javascript:void(0)"><i class="fa fa-trash"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="verify">
                                                        <div class="verified">
                                                            <span><i class="la la-check"></i></span>
                                                            <Link href="javascript:void(0)">Verified</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex my-4">
                                                        <span class="me-3"><i class="fa fa-cc-mastercard"></i></span>
                                                        <div class="flex-grow-1">
                                                            <h5 class="mt-0 mb-1">Master Card</h5>
                                                            <p>Credit Card *********5478</p>
                                                        </div>
                                                        <div class="edit-option">
                                                            <Link href="javascript:void(0)"><i class="fa fa-eye"></i></Link>
                                                            <Link href="javascript:void(0)"><i class="fa fa-pencil"></i></Link>
                                                            <Link href="javascript:void(0)"><i class="fa fa-trash"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="verify">
                                                        <div class="verified">
                                                            <span><i class="la la-check"></i></span>
                                                            <Link href="javascript:void(0)">Verified</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex">
                                                        <span class="me-3"><i class="fa fa-credit-card"></i></span>
                                                        <div class="flex-grow-1">
                                                            <h5 class="mt-0 mb-1">Debit Card</h5>
                                                            <p>Prepaid Card *********5478</p>
                                                        </div>
                                                        <div class="edit-option">
                                                            <Link href="javascript:void(0)"><i class="fa fa-eye"></i></Link>
                                                            <Link href="javascript:void(0)"><i class="fa fa-pencil"></i></Link>
                                                            <Link href="javascript:void(0)"><i class="fa fa-trash"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="verify">
                                                        <div class="not-verify">
                                                            <span><i class="la la-close"></i></span>
                                                            <Link href="javascript:void(0)">Not verified</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="mt-5">
                                        <Link href="/verify-step-5" class="btn btn-primary px-4 me-3">Add Bank
                                            Account</Link>
                                        <Link href="/verify-step-1" class="btn btn-success px-4">Add Debit
                                            Account</Link>
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