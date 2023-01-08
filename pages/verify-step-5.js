import LayoutAdmin from "../components/layout/LayoutAdmin";
import Link from "next/link";
const Index = () => {
    return (
        <>
            <LayoutAdmin pageClass={"front"}>
                <div class="verification section-padding">
                    <div class="container h-100">
                        <div class="row justify-content-center h-100 align-items-center">
                            <div class="col-xl-7">
                                <div class="auth-form card">
                                    <div class="card-header">
                                        <h4 class="card-title">Add New Account</h4>
                                    </div>
                                    <div class="card-body py-0">
                                        <div class="add-bank-card">
                                            <div class="row my-4">
                                                <div class="col-md-6">
                                                    <Link href="/add-bank-acc" class="d-block">
                                                        <div class="d-flex">
                                                            <span class="me-3"><i class="fa fa-bank"></i></span>
                                                            <div class="flex-grow-1">
                                                                <h4 class="mt-0 mb-3">Bank account</h4>
                                                                <p>Use bank account to make purchase and sells. Prices are
                                                                    locked today. Trades may take 4-5 days to process</p>
                                                                <p class="text-muted">Recommended for invest large amount
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class="col-md-6">
                                                    <Link href="/add-debit-card" class="d-block">
                                                        <div class="d-flex">
                                                            <span class="me-3"><i class="fa fa-credit-card"></i></span>
                                                            <div class="flex-grow-1">
                                                                <h4 class="mt-0 mb-3">Debit card</h4>
                                                                <p>Use any visa or mastercard debit card to make small
                                                                    investment. Add a bank or wallet to sell</p>
                                                                <p class="text-muted">Recommended for invest small amount
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
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